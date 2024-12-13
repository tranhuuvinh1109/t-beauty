import { InvoiceType } from "@/app/api/invoice/invoice.type";
import { EventType, svgAppoiment } from "../components/Schedule/Schedule.const";
import { ScheduleFormType } from "../components/Award/Award.type";
import { SCHEDULE_COLOR_TYPE } from "../enum/common";
import { ScheduleItemType } from "../api/schedule/schedule.type";

export const formatDate = (
  date: Date,
  format: "yyyy-mm-dd" | "dd-mm-yyy" = "yyyy-mm-dd"
) => {
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");
  if (format === "yyyy-mm-dd") return `${year}-${month}-${day}`;
  return `${day}-${month}-${year}`;
};

export const currentWeek = (date: Date = new Date()) => {
  const dayOfWeek = date.getDay();
  const mondayOffset = dayOfWeek === 0 ? -6 : 1 - dayOfWeek;
  const monday = new Date(date);
  monday.setDate(date.getDate() + mondayOffset);

  const sunday = new Date(monday);
  sunday.setDate(monday.getDate() + 6);

  return {
    start: monday,
    end: sunday,
  };
};

export const calculatorAmount = (invoice: InvoiceType) => {
  const total = invoice.details.reduce((pre, item) => {
    return (pre +=
      (+item.price * item.quantity * (100 - Number(item.discount))) / 100);
  }, 0);
  return (total * (100 - Number(invoice.discount))) / 100;
};

export const formatDateTime = (dateInput?: string | Date) => {
  if (!dateInput) return "-";

  if (!dateInput) return "-";

  // Use the Date instance directly or parse if it's a string
  const date = typeof dateInput === "string" ? new Date(dateInput) : dateInput;

  const hours = date.getHours().toString().padStart(2, "0");
  const minutes = date.getMinutes().toString().padStart(2, "0");

  const day = date.getDate().toString().padStart(2, "0");
  const month = (date.getMonth() + 1).toString().padStart(2, "0");
  const year = date.getFullYear();

  return `${hours}:${minutes} - ${day}/${month}/${year}`;
};

export const getBasePath = (url: string) => {
  const match = url.match(/\/admin\/[^/]+/);
  return match ? match[0] : "/admin";
};

export const generateHTMLEvent = (data: EventType) => {
  return `<div style="height: -webkit-fill-available; color: ${data.barColor};"><h1>${svgAppoiment} ${data.text}</h1><p>${data.details}</p></div>`;
};

export const generateHTMLEventFromMakeAppoiment = (data: ScheduleFormType) => {
  return `<div style="height: -webkit-fill-available; color: ${
    SCHEDULE_COLOR_TYPE.APPOIMENT
  };"><h1>${svgAppoiment} Confirm with customer</h1><h6>Name: ${
    data.name
  }</h6><h6>Phone: ${data.phone}</h6><h5 style="color: ${
    SCHEDULE_COLOR_TYPE.APPOIMENT
  };">Time: ${formatDateTime(data.time)}</h5>
  </div>`;
};

export const convertTime = (dateString: string) => {
  const date = new Date(dateString);

  const year = date.getFullYear();
  const month = (date.getMonth() + 1).toString().padStart(2, "0"); // Months are zero-based
  const day = date.getDate().toString().padStart(2, "0");
  const hours = date.getHours().toString().padStart(2, "0");
  const minutes = date.getMinutes().toString().padStart(2, "0");
  const seconds = date.getSeconds().toString().padStart(2, "0");

  return `${year}-${month}-${day}T${hours}:${minutes}:${seconds}`;
};

export const generateStartEndTime = (start: string) => {
  const startTime = new Date(start);

  const endTime = new Date(startTime.getTime() + 4 * 60 * 60 * 1000);

  return {
    start: convertTime(startTime.toISOString()),
    end: convertTime(endTime.toISOString()),
  };
};

export const convertScheduleToEvent = (input: ScheduleItemType[]) => {
  const result: EventType[] = input.map((schedule) => ({
    id: schedule.id || "",
    text: schedule.name,
    start: convertTime(schedule.start),
    end: convertTime(schedule.end),
    html: schedule.html,
    details: schedule.details,
    barColor: schedule.bar_color,
  }));
  return result;
};
