export interface Investigation {
  alertFiredTimestamp: string;
  analystAssigned: string;
  determination: string;
  id: number;
  lastUpdatedTimestamp: string;
  readyForReview: string;
  severity: string;
  source: string;
  title: string;
}

export interface Option {
  value: string;
  label: string;
}
