"use client";

import React, { useState, useMemo, useCallback } from "react";
import { DayPilot, DayPilotCalendar } from "@daypilot/daypilot-lite-react";
import Modal from "../Modal/Modal";
import { DEFAULT_EVENT, EVENTS, EventType } from "./Schedule.const";
import { MdOutlineNavigateNext } from "react-icons/md";
import { GrFormPrevious, GrFormNextLink } from "react-icons/gr";
import {
  formatDate,
  formatDateTime,
  generateHTMLEvent,
} from "@/app/ultil/common";
import Loading from "../Loading/Loading";

const Schedule = () => {
  const [isOpenCreate, setIsOpenCreate] = useState(false);
  const [formData, setFormData] = useState<EventType>(DEFAULT_EVENT);
  const [events, setEvents] = useState<EventType[]>(EVENTS);

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
    setIsOpenCreate(true);
    setFormData(args.e.data);
  }, []);

  const handleCloseModalCreate = useCallback(() => {
    setIsOpenCreate(false);
    setFormData(DEFAULT_EVENT);
  }, []);

  const handleChangeFormData = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      setFormData((pre) => ({
        ...pre,
        [e.target.name]: e.target.value,
      }));
    },
    []
  );

  const onTimeRangeSelected = useCallback(
    (args: DayPilot.CalendarTimeRangeSelectedArgs) => {
      setIsOpenCreate(true);
      setFormData((pre) => ({
        ...pre,
        start: args.start,
        end: args.end,
      }));
    },
    []
  );

  const handleCreateEvent = useCallback(() => {
    if (formData.id) {
      setEvents((pre) => {
        const origin = [...pre];
        const index = origin.findIndex((item) => +item.id === +formData.id);
        origin[index] = {
          ...formData,
          html: generateHTMLEvent(formData),
        };
        return origin;
      });
    } else {
      const newItem = {
        ...formData,
        html: generateHTMLEvent(formData),
      };
      setEvents((pre) => [...pre, newItem]);
    }
    setIsOpenCreate(false);
  }, [formData]);

  const renderCalendar = useMemo(() => {
    return (
      <DayPilotCalendar
        viewType={"Week"}
        startDate={formatDate(currentWeek.start)}
        timeRangeSelectedHandling={"Enabled"}
        events={events}
        onEventClick={onEventClick}
        headerDateFormat="dd-MM-yyyy"
        onTimeRangeSelected={onTimeRangeSelected}
      />
    );
  }, [currentWeek.start, events, onEventClick, onTimeRangeSelected]);

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
      <Modal
        isOpen={isOpenCreate}
        handleClose={(value) => {
          setIsOpenCreate(value);
          setFormData(DEFAULT_EVENT);
        }}
      >
        <div>
          <h1 className="text-xl font-semibold text-center">
            {formData.id ? "Edit event" : "Create new event"}
          </h1>
          <div className="mt-10 flex flex-col gap-2">
            <div className="flex items-center gap-2 justify-between">
              <span className="min-w-[120px] font-semibold">Time: </span>
              <div className="flex-1 flex justify-end items-center gap-2 font-semibold text-red-600">
                <span>{formatDateTime(formData.start.toString())}</span>
                <GrFormNextLink fontSize={24} />
                <span>{formatDateTime(formData.end.toString())}</span>
              </div>
            </div>
            <div className="flex gap-4 items-center">
              <label htmlFor="text" className="min-w-[120px] font-semibold">
                Title:
              </label>
              <input
                placeholder="Enter the title"
                value={formData.text}
                onChange={handleChangeFormData}
                name="text"
                id="text"
                className="flex-1 px-4 py-2 rounded-xl border border-gray-500"
              />
            </div>
            <div className="flex gap-4 items-center">
              <label htmlFor="details" className="min-w-[120px] font-semibold">
                Details:
              </label>
              <input
                placeholder="Enter the detail"
                value={formData.details}
                onChange={handleChangeFormData}
                name="details"
                id="details"
                className="flex-1 px-4 py-2 rounded-xl border border-gray-500"
              />
            </div>
            <div className=" flex w-2/3 mx-auto gap-4 pt-12">
              <button
                onClick={handleCloseModalCreate}
                className="flex-1 py-1.5 rounded-lg  flex items-center justify-center gap-1 text-red-400 border border-red-400 hover:bg-red-400 hover:text-white"
              >
                Cancel
              </button>
              <button
                onClick={handleCreateEvent}
                className="flex-1 py-1.5 rounded-lg bg-green-500 flex items-center justify-center gap-1 text-white border hover:bg-green-700"
              >
                Create
              </button>
            </div>
          </div>
        </div>
      </Modal>
      <Loading isLoading={false} />
    </>
  );
};

export default Schedule;
