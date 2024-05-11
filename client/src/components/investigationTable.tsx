import { Investigation } from "@/types/types";
import {
  Table,
  TableHeader,
  TableColumn,
  TableBody,
  TableRow,
  TableCell,
  Spinner,
  SortDescriptor,
} from "@nextui-org/react";

interface Props {
  items: Investigation[];
  isLoading: boolean;
  sortDescriptor?: SortDescriptor;
  setSortDescriptor?: any;
}

export const InvestigationTable = ({
  items,
  isLoading,
  sortDescriptor,
  setSortDescriptor,
}: Props): JSX.Element => {
  return (
    <div className="shadow-3xl p-6 md:p-8 lg:p-8 md:rounded-2xl lg:rounded-2xl transition-height duration-500 ease-in-out">
    <Table
      className="sizingchart col-span-3 md:col-span-3 lg:col-span-3"
      aria-label="Investigations table"
      data-testid="investigation-table"
      sortDescriptor={sortDescriptor}
      onSortChange={setSortDescriptor}
      removeWrapper
    >
      <TableHeader className="!rounded-t-lg">
        <TableColumn
          className="!rounded-none !rounded-tl-lg text-tiny text-black uppercase font-bold bg-yellow-accent"
          key="title"
          allowsSorting
        >
          Title
        </TableColumn>
        <TableColumn
          className="px-0 text-tiny text-black uppercase font-bold bg-yellow-accent"
          key="severity"
          allowsSorting
        >
          Severity
        </TableColumn>
        <TableColumn
          className="hidden md:table-cell text-tiny text-black uppercase font-bold bg-yellow-accent"
          key="determination"
          allowsSorting
        >
          Determination
        </TableColumn>
        <TableColumn
          className="!rounded-none !rounded-tr-lg text-tiny text-black uppercase font-bold bg-yellow-accent" 
          key="alertFiredTimestamp"
          allowsSorting
        >
          Alert Fired
        </TableColumn>
      </TableHeader>
      <TableBody
        items={items}
        isLoading={isLoading}
        loadingContent={
          <Spinner className="mx-auto" color="secondary" size="lg" />
        }
        emptyContent={`No investigations found! Try changing your search to another filter.`}
      >
        {items.map((item, index) => {
          const dateFormat = new Date(
            item.alertFiredTimestamp,
          ).toLocaleDateString("en-us", {
            hour: '2-digit', 
            minute:'2-digit',
            year: "numeric",
            month: "numeric",
            day: "numeric",
          });
          return (
            <TableRow
              data-testid={`${index}-investigation-row`}
              className="rounded-xl border border-yellow !p-4 md:p-6 lg:p-6 my-5 first:mt-0 last:mb-0 items-center"
              key={index}
            >
              <TableCell
                data-testid={`${index}-investigation-title`}
                className="rounded-xl text-base text-default-color p-0 font-mpluscode mr-4 md:mr-5 lg:mr-5 flex-none"
              >
                <span className="pl-2 w-[50px] md:w-full overflow-hidden inline-block truncate md:pl-3">{item.title}</span>
              </TableCell>
              <TableCell
                data-testid={`${index}-investigation-severity`}
                className="grow text-base font-mpluscode text-base text-default-color px-0"
              >
                {item.severity}
              </TableCell>
              <TableCell className="hidden md:block flex-none text-sm	text-default-color leading-4">
                <span className="w-[40px] md:w-full overflow-hidden inline-block truncate">
                  {item.determination}
                </span>
              </TableCell>
              <TableCell className="flex-none text-sm	text-default-color leading-4">
               <span className="w-[60px] md:w-full overflow-hidden inline-block truncate">
                  {dateFormat}
                </span>
              </TableCell>
            </TableRow>
          );
        })}
      </TableBody>
    </Table>
    </div>
  );
};
