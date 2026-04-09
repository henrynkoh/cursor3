export type SessionBlock = {
  label: string;
  items: string[];
};

export type DayPlan = {
  day: number;
  title: string;
  focus: string;
  keyTakeaway: string;
  sessions: SessionBlock[];
  homework?: string[];
};
