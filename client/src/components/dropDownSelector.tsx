import {
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownItem,
  Button,
  Image,
} from "@nextui-org/react";
import List from "../../public/images/list.svg";
import Globe from "../../public/images/globe.svg";
import { Option } from "@/types/types";
import { ChevronIcon } from "../../public/images/chevron";
import { useState } from "react";

interface Props {
  options: Option[];
  currentState: string;
  setState: (currentState: string) => void;
  setPage: (page: number) => void;
  type: string;
}

const DropDownSelector = ({
  options,
  currentState,
  setState,
  setPage,
  type,
}: Props): JSX.Element => {
  const [open, setDropdownOpen] = useState(false);

  return (
    <div className="mb-4 md:mb-0 flex p-3 mx-0 md:mr-4 lg:mr-4 bg-black hover:bg-yellow border border-yellow rounded-full transition-all ease-in-out">
      <div className="flex h-12 w-12 justify-center items-center rounded-full py-4 pl-[13.5px] pr-[14.5px] mr-6 bg-yellow z-0">
        <Image
          className="w-100 rounded-none"
          alt="dropdown-icon"
          removeWrapper
          src={type === "determination" ? List.src : Globe.src}
        />
      </div>
      <label className="flex flex-col items-start text-sm space-y-2 h-12">
        <div className="flex justify-center items-center uppercase text-white text-xs font-medium tracking-wider">
          <div className="mr-1">{type}</div>
          <ChevronIcon className={open ? "rotate-90" : "-rotate-90"} />
        </div>
        <Dropdown
          onClose={() => setDropdownOpen(false)}
          className="text-base tracking-tight bg-white outline-0"
        >
          <DropdownTrigger>
            <Button
              disableAnimation
              onClick={() => setDropdownOpen(true)}
              className="block text-base text-white bg-transparent outline-0 p-0 text-left items-end z-1"
              data-testid={`${type}-selector`}
            >
              {currentState}
            </Button>
          </DropdownTrigger>
          <DropdownMenu
            aria-label="Single selection example"
            variant="flat"
            className="!text-base"
            disallowEmptySelection
            selectionMode="single"
            onSelectionChange={(result: any) => {
              setState(result.currentKey);
              setPage(1);
            }}
          >
            {options.map((item) => (
              <DropdownItem
                textValue={item.value.toString()}
                key={item.value}
                className="!text-base text-center tracking-tight bg-white"
              >
                {item.value}
              </DropdownItem>
            ))}
          </DropdownMenu>
        </Dropdown>
      </label>
    </div>
  );
};

export default DropDownSelector;
