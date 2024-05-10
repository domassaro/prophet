import React from "react";
import { act, render, screen } from "@testing-library/react";
import { InvestigationTable } from "@/components/investigationTable";
import "@testing-library/jest-dom";
jest.mock("../api/investigation");

const mockResponse = [
  {
    id: 0,
    title: "Unusual Network Behavior",
    source: "Crowdstrike",
    alertFiredTimestamp: "2024-04-28T02:39:24.854Z",
    lastUpdatedTimestamp: "2024-05-02T09:43:36.400Z",
    severity: "Low",
    analystAssigned: "Drew Miller",
    determination: "In progress",
    readyForReview: "Yes",
  },
  {
    id: 1,
    title: "Unusual Network Behavior",
    source: "SentinelOne",
    alertFiredTimestamp: "2024-05-04T20:25:27.144Z",
    lastUpdatedTimestamp: "2024-05-07T06:17:25.955Z",
    severity: "High",
    analystAssigned: "Taylor Martinez",
    determination: "In progress",
    readyForReview: "Yes",
  },
];

describe("Investigation Table", () => {
  beforeEach(async () => {
    jest.fn().mockResolvedValue(mockResponse);
    await act(async () => render(<InvestigationTable isLoading={false} items={mockResponse} />));
  });

  it("should have the investigation table render when there is investigation data", () => {
    expect(screen.getByTestId("investigation-table")).toBeInTheDocument();
  });

  it("should test that if investigation are returned the table displays the correct data for ranking", () => {
    // First Investigation
    expect(screen.getByTestId("0-investigation-severity")).toBeInTheDocument();
    expect(screen.getByTestId("0-investigation-severity")).toHaveTextContent(
      mockResponse[0].severity.toString(),
    );

    // Second Investigation
    expect(screen.getByTestId("1-investigation-severity")).toBeInTheDocument();
    expect(screen.getByTestId("1-investigation-severity")).toHaveTextContent(
      mockResponse[1].severity.toString(),
    );
  });

  it("should test that investigation display the correct title", () => {
    // First Investigation
    expect(screen.getByTestId("0-investigation-title")).toBeInTheDocument();
    expect(screen.getByTestId("0-investigation-title")).toHaveTextContent(
      mockResponse[0].title.toString().replace(/_/g, " "),
    );

    // Second investigation
    expect(screen.getByTestId("1-investigation-title")).toBeInTheDocument();
    expect(screen.getByTestId("1-investigation-title")).toHaveTextContent(
      mockResponse[1].title.toString().replace(/_/g, " "),
    );
  });
});
