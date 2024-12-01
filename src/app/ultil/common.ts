import { InvoiceType } from "@/app/api/invoice/invoice.type";
import { EventType, svgAppoiment } from "../components/Schedule/Schedule.const";

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

export const formatDateTime = (dateString?: string) => {
  if (!dateString) return "-";

  const date = new Date(dateString);

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
