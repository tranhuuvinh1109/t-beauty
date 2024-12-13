import axiosInstance from "..";
import {
  RequestScheduleType,
  ResponseGetAllScheduleType,
  ResponseScheduleType,
} from "./schedule.type";

export const createSchedule = async ({ data }: RequestScheduleType) => {
  const res: ResponseScheduleType = await axiosInstance.post(
    "/appointment",
    data
  );
  return res.data;
};

export const getAllSchedule = async () => {
  const res: ResponseGetAllScheduleType = await axiosInstance.get(
    "/appointment"
  );
  return res.data.results;
};
