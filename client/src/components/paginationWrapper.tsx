import { Pagination, PaginationItemType, cn } from "@nextui-org/react";
import { ChevronIcon } from "../../public/images/chevron";

interface Props {
  page: number;
  pages: number;
  setPage: (page: number) => void;
}

export const PaginationWrapper = ({
  page,
  pages,
  setPage,
}: Props): JSX.Element => {
  const renderItem = ({
    ref,
    value,
    isActive,
    onNext,
    onPrevious,
    setPage,
    className,
    index,
  }: any) => {
    if (value === PaginationItemType.NEXT) {
      console.log("did this happen", page === pages)
      return (
        <button
          className={cn(
            className,
            page === pages
              ? "bg-yellow ml-0 md:ml-5 lg:ml-5 text-white"
              : "ml-0 md:ml-5 lg:ml-5 text-neutral-900 border border-neutral_400 rounded-full bg-white",
          )}
          onClick={onNext}
          key={`${value}_button_front`}
        >
          <ChevronIcon className="rotate-180" />
        </button>
      );
    }

    if (value === PaginationItemType.PREV) {
      return (
        <button
          className={cn(
            className,
            page === 1
              ? "mr-0 md:mr-5 lg:mr-5 bg-yellow text-white"
              : "mr-0 md:mr-5 lg:mr-5 text-neutral-900 border default-color rounded-full bg-white",
          )}
          onClick={onPrevious}
          key={`${value}_button_back`}
        >
          <ChevronIcon />
        </button>
      );
    }

    if (value === PaginationItemType.DOTS) {
      return (
        <button key={`${value}_${index}_dots`} className={className}>
          ...
        </button>
      );
    }

    return (
      <button
        ref={ref}
        key={value}
        className={cn(
          className,
          isActive
            ? "text-white !bg-yellow font-bold"
            : "text-neutral-900 border border-default-color rounded-full bg-white",
        )}
        onClick={() => {
          setPage(value);
        }}
      >
        {value}
      </button>
    );
  };

  return (
    <div className="pt-10 flex w-full justify-center">
      <Pagination
        disableCursorAnimation
        showControls
        initialPage={1}
        className="text-neutral-900"
        radius="full"
        renderItem={renderItem}
        onChange={(page) => setPage(page)}
        page={page}
        total={pages}
      />
    </div>
  );
};
