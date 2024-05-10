import React from "react";
import InvestigationWrapper from "@/components/investigationWrapper";
import { act, render, screen } from "@testing-library/react";
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

describe("Investigation Wrapper", () => {
  beforeEach(async () => {
    jest.fn().mockResolvedValue(mockResponse);
    await act(async () => render(<InvestigationWrapper />));
  });

  it("should display the default severity filter value as All", () => {
    expect(screen.getByTestId("severity-selector")).toBeInTheDocument();
    expect(screen.getByTestId("severity-selector")).toHaveTextContent("All");
  });
});
