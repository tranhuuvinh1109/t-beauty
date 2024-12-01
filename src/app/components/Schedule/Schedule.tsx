"use client";

import React, { useState, useMemo, useCallback } from "react";
import { DayPilot, DayPilotCalendar } from "@daypilot/daypilot-lite-react";
import Modal from "../Modal/Modal";
import { EVENTS } from "./Schedule.const";
import { MdOutlineNavigateNext } from "react-icons/md";
import { GrFormPrevious } from "react-icons/gr";
import { formatDate } from "@/app/ultil/common";
import { GrFormNextLink } from "react-icons/gr";

const Schedule = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [itemSelected, setItemSelected] = useState<
    DayPilot.EventData & { details: string }
  >();

  const [currentWeek, setCurrentWeek] = useState(() => {
    const today = new Date();
    const dayOfWeek = today.getDay();
    const sundayOffset = -dayOfWeek;
    const sunday = new Date(today);
    sunday.setDate(today.getDate() + sundayOffset);

    const saturday = new Date(sunday);
    saturday.setDate(sunday.getDate() + 6);

    return {
      start: sunday,
      end: saturday,
    };
  });

  const goToNextWeek = useCallback(() => {
    const nextSunday = new Date(currentWeek.start);
    nextSunday.setDate(currentWeek.start.getDate() + 7);

    const nextSaturday = new Date(nextSunday);
    nextSaturday.setDate(nextSunday.getDate() + 6);

    setCurrentWeek({
      start: nextSunday,
      end: nextSaturday,
    });
  }, [currentWeek]);

  const goToPreviousWeek = useCallback(() => {
    const previousSunday = new Date(currentWeek.start);
    previousSunday.setDate(currentWeek.start.getDate() - 7);

    const previousSaturday = new Date(previousSunday);
    previousSaturday.setDate(previousSunday.getDate() + 6);

    setCurrentWeek({
      start: previousSunday,
      end: previousSaturday,
    });
  }, [currentWeek]);

  const onEventClick = useCallback((args: DayPilot.CalendarEventClickArgs) => {
    setIsOpen(true);
    setItemSelected(args.e.data);
  }, []);
  const renderCalendar = useMemo(() => {
    return (
      <DayPilotCalendar
        viewType={"Week"}
        startDate={formatDate(currentWeek.start)}
        timeRangeSelectedHandling={"Enabled"}
        events={EVENTS}
        onEventClick={onEventClick}
        headerDateFormat="dd-MM-yyyy"
      />
    );
  }, [currentWeek.start, onEventClick]);

  return (
    <>
      <div className=" flex justify-end items-center gap-6 mb-2">
        <button
          className="flex items-center gap-2 bg-gray-700 hover:bg-slate-900 rounded p-1 text-white"
          onClick={goToPreviousWeek}
        >
          <GrFormPrevious />
        </button>
        <span className="flex items-center gap-2">
          {formatDate(currentWeek.start, "dd-mm-yyy")} <GrFormNextLink />
          {formatDate(currentWeek.end, "dd-mm-yyy")}
        </span>
        <button
          className="flex items-center gap-2 bg-gray-700 hover:bg-slate-900 rounded p-1 text-white"
          onClick={goToNextWeek}
        >
          <MdOutlineNavigateNext />
        </button>
      </div>
      {renderCalendar}
      <Modal isOpen={isOpen} handleClose={(value) => setIsOpen(value)}>
        <div>
          <h1
            className="text-xl font-semibold"
            style={{ color: itemSelected?.barColor }}
          >
            {itemSelected?.text}
          </h1>
          <div>
            <p>{itemSelected?.details}</p>
          </div>
        </div>
      </Modal>
    </>
  );
};

export default Schedule;
