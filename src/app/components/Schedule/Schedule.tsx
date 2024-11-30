"use client";

import React, { useState, useMemo, useCallback } from "react";
import { DayPilot, DayPilotCalendar } from "@daypilot/daypilot-lite-react";
import Modal from "../Modal/Modal";
import { EVENTS } from "./Schedule.const";

const Schedule = () => {
  // const [events, setEvents] = useState<DayPilot.EventData[]>(EVENTS);

  // const today = new Date();
  // const todayString = today.toISOString().split("T")[0];

  const [isOpen, setIsOpen] = useState(false);
  const [itemSelected, setItemSelected] = useState<
    DayPilot.EventData & { details: string }
  >();

  const onEventClick = useCallback((args: DayPilot.CalendarEventClickArgs) => {
    setIsOpen(true);
    setItemSelected(args.e.data);
  }, []);
  const renderCalendar = useMemo(() => {
    return (
      <DayPilotCalendar
        viewType={"Week"}
        startDate={"2024-12-01"}
        timeRangeSelectedHandling={"Enabled"}
        events={EVENTS}
        onEventClick={onEventClick}
      />
    );
  }, [onEventClick]);

  return (
    <>
      {renderCalendar}
      <Modal isOpen={isOpen} handleClose={(value) => setIsOpen(value)}>
        <div>
          <h1>{itemSelected?.text}</h1>
          <p>{itemSelected?.details}</p>
        </div>
      </Modal>
    </>
  );
};

export default Schedule;
