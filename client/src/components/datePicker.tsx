import ReactDatePicker from "react-datepicker";
import { Image } from "@nextui-org/react";
import Calendar from "../../public/images/calendar.svg";
import moment from "moment";
import { ChevronIcon } from "../../public/images/chevron";
import { useState } from "react";
import "react-datepicker/dist/react-datepicker.css";

interface Props {
  date: string;
  handleDateChange: (e: any) => void;
}

const DatePicker = ({ date, handleDateChange }: Props): JSX.Element => {
  const [open, setCalendarOpen] = useState(false);
  const today = new Date(new Date().setDate(new Date().getDate()));
  const selectedDate = moment(date, "YYYY-MM-DD").toDate();

  return (
    <div className="mb-4 md:mb-0 flex p-3 mx-0 md:mr-4 lg:mr-4 bg-black hover:bg-yellow border border-yellow rounded-full transition-all ease-in-out">
      <div className="flex h-12 w-12 justify-center items-center rounded-full py-4 pl-[13.5px] pr-[14.5px] bg-yellow mr-6">
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
            <div className="mr-1 text-white">Date</div>
            <ChevronIcon className={open ? "rotate-90" : "-rotate-90"} />
          </div>
        </div>
        <ReactDatePicker
          calendarClassName="datePicker"
          portalId="root-portal"
          selected={selectedDate}          
          dateFormat="MMMM d, yyyy"
          popperPlacement="top"
          className="text-base color-white"
          onChange={handleDateChange}
          maxDate={today}
          onCalendarOpen={() => setCalendarOpen(true)}
          onCalendarClose={() => setCalendarOpen(false)}
        />
      </label>
    </div>
  );
};

export default DatePicker;
