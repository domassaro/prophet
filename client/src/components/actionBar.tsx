import { SetStateAction } from "react";
import DatePicker from "./datePicker";
import { Button, Divider } from "@nextui-org/react";
import DropDownSelector from "./dropDownSelector";
import { Option } from "@/types/types";

interface Props {
  handleDateChange: (e: SetStateAction<string>) => void;
  setSeverity: (severity: string) => void;
  setPage: (page: number) => void;
  setDetermination: (determination: string) => void;
  determination: string;
  severity: string;
  chosenDate: string;
}

const severityOptions: Option[] = [
  { label: "Low", value: "Low" },
  { value: "Medium", label: "Medium" },
  { value: "High", label: "High" },
  { value: "Critical", label: "Critical" },
  { value: "All", label: "All" },
];

const determinationOptions: Option[] = [
  { label: "True positive", value: "True positive" },
  { value: "False positive", label: "False positive" },
  { value: "In progress", label: "In progress" },
  { value: "Closed", label: "Closed" },
  { value: "All", label: "All" },
];

const ActionBar = ({
  handleDateChange,
  setSeverity,
  setPage,
  setDetermination,
  determination,
  severity,
  chosenDate,
}: Props): JSX.Element => {
  return (
    <div className="block md:flex justify-center p-4 bg-black items-center md:flex lg:flex md:rounded-full lg:rounded-full mb-0 md:mb-6 shadow-3xl">
      <DatePicker handleDateChange={handleDateChange} date={chosenDate} />
      <Divider className="md:h-16 lg:h-16" orientation="vertical" />
      <DropDownSelector
        setState={setSeverity}
        currentState={severity}
        options={severityOptions}
        setPage={setPage}
        type="severity"
      />
      <Divider className="md:h-16 lg:h-16" orientation="vertical" />
      <DropDownSelector
        setState={setDetermination}
        currentState={determination}
        options={determinationOptions}
        setPage={setPage}
        type="determination"
      />
    </div>
  );
};

export default ActionBar;
