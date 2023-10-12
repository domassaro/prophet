import {
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownItem,
  Button,
  Image,
} from "@nextui-org/react";
import List from "../../public/images/list.svg";
import { Option } from "@/types/types";
import { ChevronIcon } from "../../public/images/chevron";
import { useState } from "react";

interface Props {
  options: Option[];
  numResults: number;
  setNumResults: (result: number) => void;
}

const NumResults = ({
  options,
  numResults,
  setNumResults,
}: Props): JSX.Element => {
  const [open, setDropdownOpen] = useState(false);

  return (
    <div className="flex p-3 mx-0 md:mx-4 lg:mx-4 bg-white hover:bg-neutral-100 rounded-full transition-all ease-in-out">
      <div className="flex h-12 w-12 justify-center items-center rounded-full py-4 pl-[13.5px] pr-[14.5px] mr-6 bg-marigold-200 z-0">
        <Image
          className="w-100 rounded-none"
          alt="calendar"
          removeWrapper
          src={List.src}
        />
      </div>
      <label className="flex flex-col items-start text-sm space-y-2 h-12">
        <div className="flex justify-center items-center uppercase text-neutral-500 text-xs font-medium tracking-wider">
          <div className="mr-1">Num Results</div>
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
              className="block text-base tracking-tight bg-transparent outline-0 p-0 text-left items-end z-1"
            >
              {numResults}
            </Button>
          </DropdownTrigger>
          <DropdownMenu
            aria-label="Single selection example"
            variant="flat"
            className="!text-base"
            disallowEmptySelection
            selectionMode="single"
            onSelectionChange={(result: any) =>
              setNumResults(result.currentKey)
            }
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

export default NumResults;
