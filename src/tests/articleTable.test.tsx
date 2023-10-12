import ArticleTable from "@/components/articleTable";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { getArticles } from "@/api/articles";
jest.mock("../api/articles");

const mockResponse = [
  {
    article: "Main_Page",
    project: "en.wikipedia",
    views_ceil: 1816200,
    rank: 1,
  },

  {
    article: "Cookie_(informatique)",
    project: "fr.wikipedia",
    views_ceil: 973100,
    rank: 2,
  },
];

describe("Article Table", () => {
  beforeEach(() => {
    jest.fn().mockResolvedValue(mockResponse);
  });
  it("Tests that article table renders", async () => {
    render(<ArticleTable />);
    expect(screen.getByTestId("article-table")).toBeInTheDocument();
  });
});
