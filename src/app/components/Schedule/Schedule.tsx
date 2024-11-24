"use client";

import React, { useState, useEffect } from "react";
import { DayPilot, DayPilotCalendar } from "@daypilot/daypilot-lite-react";

const Schedule = () => {
  const [calendar, setCalendar] = useState(null);
  const [events, setEvents] = useState<DayPilot.EventData[]>([]);

  useEffect(() => {
    setEvents([
      {
        id: 1,
        text: "Event 1",
        start: "2024-09-07T10:30:00",
        end: "2024-09-07T13:00:00",
        html: "<p>aaaa</p>",
      },
      {
        id: 2,
        text: "Event 2",
        start: "2024-09-08T09:30:00",
        end: "2024-09-08T11:30:00",
        barColor: "#6aa84f",
      },
    ]);
  }, []);

  const onEventClick = async (args: DayPilot.CalendarEventClickArgs) => {
    if (!calendar) return; // Ensure calendar is set

    console.log("args", args);
    const modal = await DayPilot.Modal.prompt(
      "Update event text:",
      args.e.text()
    );
    if (!modal.result) {
      return;
    }
    const e = args.e;
    e.data.text = modal.result;
    // calendar.events.update(e);
  };

  return (
    <DayPilotCalendar
      viewType={"Week"}
      startDate={"2024-09-07"}
      timeRangeSelectedHandling={"Enabled"}
      events={events}
      onEventClick={onEventClick}
      controlRef={setCalendar}
    />
  );
};

export default Schedule;
