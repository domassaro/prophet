import {
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownItem,
  Button,
  Image,
} from "@nextui-org/react";
import { ChevronIcon } from "../../public/images/chevron";
import { useState } from "react";
import { countries } from "@/api/countries";
import Globe from "../../public/images/globe.svg";
import { Country } from "@/types/types";

interface Props {
  setCountry: (country: Country) => void;
  country: Country;
}

const CountrySelector = ({ setCountry, country }: Props): JSX.Element => {
  const [open, setDropdownOpen] = useState(false);
  const onSelectionChange = (selected: {
    anchorKey: string;
    currentKey: string;
  }) => {
    const selectedCountry = countries.find(
      (country) => country.code === selected.currentKey
    );
    setCountry(selectedCountry || { name: "United States", code: "US" });
  };

  return (
    <div className="flex p-3 mx-0 md:mx-4 lg:mx-4 bg-white hover:bg-neutral-100 rounded-full transition-all ease-in-out">
      <div className="flex h-12 w-12 justify-center items-center rounded-full py-4 pl-[13.5px] pr-[14.5px] mr-6 bg-ocean-200 z-0">
        <Image
          className="w-100 rounded-none"
          alt="globe"
          removeWrapper
          src={Globe.src}
        />
      </div>
      <label className="flex flex-col items-start text-sm space-y-2 h-12">
        <div className="flex justify-center items-center uppercase text-neutral-500 text-xs font-medium tracking-wider">
          <div className="mr-1">Country</div>
          <ChevronIcon className={open ? "rotate-90" : "-rotate-90"} />
        </div>
        <Dropdown
          onClose={() => setDropdownOpen(false)}
          className="text-base tracking-tight bg-white outline-0 font-poppins"
        >
          <DropdownTrigger>
            <Button
              disableAnimation
              onClick={() => setDropdownOpen(true)}
              className="block text-base tracking-tight bg-transparent outline-0 p-0 text-left items-end z-1 w-[105px] text-ellipsis"
            >
              {country.name}
            </Button>
          </DropdownTrigger>
          <DropdownMenu
            aria-label="Single selection example"
            variant="flat"
            className="text-base country-container"
            disallowEmptySelection
            selectionMode="single"
            selectedKeys={country.code}
            onSelectionChange={(country: any) => onSelectionChange(country)}
          >
            {countries.map((country) => (
              <DropdownItem
                key={country.code}
                className="!text-base text-center tracking-tight bg-white"
              >
                {country.name}
              </DropdownItem>
            ))}
          </DropdownMenu>
        </Dropdown>
      </label>
    </div>
  );
};

export default CountrySelector;
