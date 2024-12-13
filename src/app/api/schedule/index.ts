import { useMutation, useQuery } from "@tanstack/react-query";
import { createSchedule, getAllSchedule } from "./schedule.api";
import { RequestScheduleType, ScheduleItemType } from "./schedule.type";

export const useCreateSchedule = () => {
  return useMutation<ScheduleItemType, Error, RequestScheduleType>({
    mutationKey: ["createSchedule"],
    mutationFn: createSchedule,
  });
};

export const useGetAllSchedule = () => {
  return useQuery({
    queryKey: ["getAllSchedule"],
    queryFn: getAllSchedule,
  });
};
