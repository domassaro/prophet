import { SetStateAction, useEffect, useState } from "react";
import { Investigation } from "@/types/types";
import { PaginationWrapper } from "./paginationWrapper";
import { InvestigationTable } from "./investigationTable";
import { getInvestigations } from "@/api/investigation";
import ActionBar from "./actionBar";
import moment from "moment";
import { SortDescriptor } from "@nextui-org/react";

function InvestigationWrapper() {
  const [investigations, setInvestigations] = useState<Investigation[]>([]);
  const [page, setPage] = useState<number>(1);
  const [chosenDate, setChosenDate] = useState(
    moment().format("YYYY-MM-DD"),
  );
  const [totalPages, setTotalPages] = useState<number>(0);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [severity, setSeverity] = useState<string>("All");
  const [source, setSource] = useState<string>("");
  const [determination, setDetermination] = useState<string>("All");
  const [sortDescriptor, setSortDescriptor] = useState<SortDescriptor>({
    column: "alertFiredTimestamp",
    direction: "descending",
  });

  const fetchInvestigations = async () => {
    try {
      setIsLoading(true);
      // establish sorting
      const column = sortDescriptor.column as string;
      const order = sortDescriptor.direction;

      const response = await getInvestigations(
        page,
        source,
        severity,
        determination,
        column,
        order,
        chosenDate
      );
      const { paginatedResults, totalPages, resultTotalCount } = response;
      setInvestigations(paginatedResults);
      setTotalPages(totalPages);
      setSeverity(severity);
      setIsLoading(false);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchInvestigations();
  }, [page, source, severity, determination, sortDescriptor, chosenDate]);

  const handleDateChange = (e: SetStateAction<string>) => {
    setChosenDate(e);
  };

  return (
    <>
      <ActionBar
        handleDateChange={handleDateChange}
        setSeverity={setSeverity}
        setDetermination={setDetermination}
        determination={determination}
        severity={severity}
        chosenDate={chosenDate}
        setPage={setPage}
      />
      <InvestigationTable
        isLoading={isLoading}
        items={investigations}
        sortDescriptor={sortDescriptor}
        setSortDescriptor={setSortDescriptor}
      />
      {investigations && investigations.length > 0 && (
        <PaginationWrapper page={page} pages={totalPages} setPage={setPage} />
      )}
    </>
  );
}

export default InvestigationWrapper;
