import { SetStateAction } from "react";
import DatePicker from "./datePicker";
import { Button, Divider } from "@nextui-org/react";
import NumResults from "./numResults";
import CountrySelector from "./countrySelector";
import { Country } from "@/types/types";

interface Props {
  handleDateChange: (e: SetStateAction<string>) => void;
  setNumResults: (results: number) => void;
  setCountry: (country: Country) => void;
  updateArticles: () => void;
  country: Country;
  numResults: number;
  chosenDate: string;
}

const resultOptions = [
  { label: 25, value: 25 },
  { value: 50, label: 50 },
  { value: 75, label: 75 },
  { value: 100, label: 100 },
  { value: 200, label: 200 },
];

const ActionBar = ({
  handleDateChange,
  setNumResults,
  setCountry,
  updateArticles,
  country,
  numResults,
  chosenDate,
}: Props): JSX.Element => {
  return (
    <div className="block p-4 bg-neutral-000 items-center md:flex lg:flex md:rounded-full lg:rounded-full mb-6 shadow-3xl">
      <DatePicker handleDateChange={handleDateChange} date={chosenDate} />
      <Divider className="md:h-16 lg:h-16" orientation="vertical" />
      <NumResults
        setNumResults={setNumResults}
        numResults={numResults}
        options={resultOptions}
      />
      <Divider className="md:h-16 lg:h-16" orientation="vertical" />
      <CountrySelector setCountry={setCountry} country={country} />
      <Button
        onClick={updateArticles}
        radius="full"
        className="w-full h-full md:w-auto lg:w-auto text-base bg-brand-green-500 text-white px-14 mt-3 md:my-0 lg:my-0 py-5"
      >
        Search
      </Button>
    </div>
  );
};

export default ActionBar;
