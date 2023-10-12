import ReactDatePicker from "react-datepicker";
import { Image } from "@nextui-org/react";
import Calendar from "../../public/images/calendar.svg";
import moment from "moment";
import "react-datepicker/dist/react-datepicker.css";
import { ChevronIcon } from "../../public/images/chevron";
import { useState } from "react";

interface Props {
  date: string;
  handleDateChange: (e: any) => void;
}

const DatePicker = ({ date, handleDateChange }: Props): JSX.Element => {
  const [open, setCalendarOpen] = useState(false);
  const yesterday = new Date(new Date().setDate(new Date().getDate() - 1));
  const selectedDate = moment(date, "YYYY-MM-DD").toDate();

  return (
    <div className="flex p-3 mx-0 md:mr-4 lg:mr-4 bg-white hover:bg-neutral-100 rounded-full transition-all ease-in-out">
      <div className="flex h-12 w-12 justify-center items-center rounded-full py-4 pl-[13.5px] pr-[14.5px] bg-avocado-200 mr-6">
        <Image
          className="w-100 rounded-none"
          alt="calendar"
          removeWrapper
          src={Calendar.src}
        />
      </div>
      <label className="flex flex-col items-start text-sm space-y-2 h-12">
        <div className="uppercase text-neutral-500 text-xs font-medium tracking-wider">
          <div className="flex justify-center items-center">
            <div className="mr-1">Date</div>
            <ChevronIcon className={open ? "rotate-90" : "-rotate-90"} />
          </div>
        </div>
        <ReactDatePicker
          calendarClassName="datePicker"
          portalId="root-portal"
          selected={selectedDate}
          dateFormat="MMMM d, yyyy"
          className="text-base tracking-tight"
          onChange={handleDateChange}
          maxDate={yesterday}
          onCalendarOpen={() => setCalendarOpen(true)}
          onCalendarClose={() => setCalendarOpen(false)}
        />
      </label>
    </div>
  );
};

export default DatePicker;
