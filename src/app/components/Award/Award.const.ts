import { ScheduleItemType } from "@/app/api/schedule/schedule.type";
import { ScheduleFormType } from "./Award.type";
import { SCHEDULE_COLOR_TYPE } from "@/app/enum/common";

export const DEFAULT_SCHEDULE: ScheduleItemType = {
  name: "Comfirm with customer",
  html: "",
  start: "",
  details: "",
  end: "",
  bar_color: SCHEDULE_COLOR_TYPE.APPOIMENT,
  type: "string",
};

export const DEFAULT_SCHEDULE_INFORMATION: ScheduleFormType = {
  name: "",
  phone: "",
  time: new Date(),
};
