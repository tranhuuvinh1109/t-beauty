import { ResponseAPIType } from "../common.type";

export type ScheduleItemType = {
  id?: string;
  name: string;
  start: string;
  bar_color: string;
  type: string;
  details: string;
  end: string;
  html: string;
  is_active?: boolean;
  deleted_at?: string;
  updated_at?: string;
  created_at?: string;
};

export type RequestScheduleType = {
  data: ScheduleItemType;
};

export type ResponseScheduleType = ResponseAPIType<ScheduleItemType>;

export type ResultGetAllScheduleType = {
  results: ScheduleItemType[];
  total: number;
};
export type ResponseGetAllScheduleType =
  ResponseAPIType<ResultGetAllScheduleType>;
