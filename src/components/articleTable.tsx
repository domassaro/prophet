import { SetStateAction, useEffect, useMemo, useState } from "react";
import {
  Card,
  Pagination,
  Table,
  TableHeader,
  TableColumn,
  TableBody,
  TableRow,
  TableCell,
  Spinner,
  PaginationItemType,
  cn,
} from "@nextui-org/react";
import { getArticles } from "../api/articles";
import moment from "moment";
import { Article, Country } from "@/types/types";
import ActionBar from "./actionBar";
import { ChevronIcon } from "../../public/images/chevron";

function ArticleTable() {
  const [articles, setArticles] = useState<Article[]>([]);
  const [page, setPage] = useState<number>(1);
  const [chosenDate, setChosenDate] = useState(
    moment().subtract(1, "d").format("YYYY-MM-DD")
  );
  const [numResults, setNumResults] = useState<number>(100);
  const [country, setCountry] = useState<Country>({
    name: "United States",
    code: "US",
  });
  const rowsPerPage = 10;

  const updateArticles = async () => {
    try {
      const countryCode = country.code;
      const data = await getArticles(chosenDate, countryCode);
      if (data) {
        setArticles(data.articles.slice(0, numResults));
      } else {
        setArticles([]);
      }
      setPage(1);
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    updateArticles();
  }, []);

  const pages = Math.ceil(articles.length / rowsPerPage);

  const items = useMemo(() => {
    const start = (page - 1) * rowsPerPage;
    const end = start + rowsPerPage;
    return articles.slice(start, end);
  }, [page, articles, rowsPerPage]);

  const handleDateChange = (e: SetStateAction<string>) => {
    setChosenDate(e);
  };

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
      return (
        <button
          className={cn(
            className,
            page === pages
              ? "ml-0 md:ml-5 lg:ml-5 bg-neutral_400"
              : "ml-0 md:ml-5 lg:ml-5 text-neutral-900 border border-neutral_400 rounded-full bg-white"
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
              ? "mr-0 md:mr-5 lg:mr-5 bg-neutral_400 color-neutral-600"
              : "mr-0 md:mr-5 lg:mr-5 text-neutral-900 border neutral_400 rounded-full bg-white"
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
            ? "text-brand-green-500 !bg-avocado_300 font-bold"
            : "text-neutral-900 border border-neutral_400 rounded-full bg-white"
        )}
        onClick={() => setPage(value)}
      >
        {value}
      </button>
    );
  };

  return (
    <>
      <ActionBar
        handleDateChange={handleDateChange}
        setNumResults={setNumResults}
        updateArticles={updateArticles}
        numResults={numResults}
        chosenDate={chosenDate}
        country={country}
        setCountry={setCountry}
      />
      {numResults ? (
        <div className="bg-white shadow-3xl p-6 md:p-8 lg:p-8 md:rounded-2xl lg:rounded-2xl transition-height duration-500 ease-in-out">
          <Table
            className="col-span-3 md:col-span-3 lg:col-span-3"
            aria-label="Articles table"
            hideHeader={true}
            data-testid="article-table"
            removeWrapper
          >
            <TableHeader>
              <TableColumn className="text-tiny uppercase font-bold">
                Rank
              </TableColumn>
              <TableColumn className="text-tiny uppercase font-bold">
                Name
              </TableColumn>
              <TableColumn className="text-tiny uppercase font-bold">
                Views
              </TableColumn>
            </TableHeader>
            <TableBody
              items={items}
              emptyContent={`No articles found! Try changing your search to another country.`}
            >
              {items.map((item, index) => (
                <TableRow
                  className="flex rounded-xl border border-neutral-300 p-4 md:p-6 lg:p-6 my-5 first:mt-0 last:mb-0 items-center"
                  key={index}
                >
                  <TableCell className="text-base text-neutral-500 p-0 font-lora mr-4 md:mr-5 lg:mr-5 flex-none">
                    {item.rank}
                  </TableCell>
                  <TableCell className="grow text-base font-lora font-medium text-black px-0">
                    {item.article.replace(/_/g, " ")}
                  </TableCell>
                  <TableCell className="flex-none text-sm	text-neutral-600 leading-4">
                    {item.views_ceil.toLocaleString("en-US")} views
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      ) : (
        <Card className="py-12 m-auto shadow-3xl transition-height duration-500 ease-in-out">
          <Spinner className="mx-auto" color="secondary" size="lg" />
        </Card>
      )}
      {articles && articles.length > 0 && (
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
      )}
    </>
  );
}

export default ArticleTable;
