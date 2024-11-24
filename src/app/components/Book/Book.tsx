"use client";
import { AiOutlineSchedule } from "react-icons/ai";
import { Dialog, DialogPanel } from "@headlessui/react";
import { useState } from "react";
import Image from "next/image";
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";

const Book = () => {
  const [isOpen, setIsOpen] = useState(false);
  const handleOpen = () => {
    setIsOpen(true);
    console.log("1");
  };
  const handleClose = () => setIsOpen(false);

  return (
    <>
      <div className=" flex justify-center mt-10">
        <button
          className="flex  items-center justify-center rounded-full bg-gold-hover hover:bg-gold-hover/70 text-white px-10 py-4 gap-4"
          onClick={handleOpen}
        >
          <AiOutlineSchedule fontSize={40} />
          <span className="text-base font-semibold">Make an appointment</span>
        </button>
      </div>
      <Dialog
        open={isOpen}
        as="div"
        className="relative z-50 focus:outline-none "
        onClose={handleClose}
      >
        <div className="fixed inset-0 z-50 w-screen overflow-y-auto bg-black/45">
          <div className="flex min-h-full items-center justify-center p-4">
            <DialogPanel
              transition
              className="w-full max-w-md rounded-xl bg-gold-hover/45 p-6 backdrop-blur-2xl duration-300 ease-out data-[closed]:transform-[scale(95%)] data-[closed]:opacity-0"
            >
              <form>
                <div className="flex justify-center">
                  <div className="relative w-[80px] h-[80px]">
                    <Image
                      src="/Logo.png"
                      fill={true}
                      alt={"Logo"}
                      style={{
                        objectFit: "cover",
                      }}
                    />
                  </div>
                </div>
                <div className="flex flex-col gap-4 mt-6">
                  <div className="grid grid-cols-4 items-center">
                    <label
                      htmlFor="name"
                      className=" col-span-1 font-semibold text-gold"
                    >
                      Name
                    </label>
                    <input
                      id="name"
                      placeholder="Enter your name"
                      className="col-span-3 px-4 py-2 rounded-full"
                    />
                  </div>
                  <div className="grid grid-cols-4 items-center">
                    <label
                      htmlFor="email"
                      className=" col-span-1 font-semibold text-gold"
                    >
                      Email
                    </label>
                    <input
                      id="email"
                      placeholder="Enter your email address"
                      className="col-span-3 px-4 py-2 rounded-full"
                    />
                  </div>
                  <div className="grid grid-cols-4 items-center">
                    <label
                      htmlFor="phone"
                      className=" col-span-1 font-semibold text-gold"
                    >
                      Phone
                    </label>
                    <input
                      id="phone"
                      placeholder="Enter your phone number"
                      className="col-span-3 px-4 py-2 rounded-full"
                    />
                  </div>
                  <div className="grid grid-cols-4 items-center">
                    <label
                      htmlFor="date"
                      className=" col-span-1 font-semibold text-gold"
                    >
                      Date
                    </label>
                    <DatePicker
                      showTimeSelect
                      selected={new Date()}
                      timeFormat="HH:mm"
                      className="col-span-3 px-4 py-2 rounded-full "
                    />
                  </div>
                  <button className="bg-gold py-2 rounded-full text-white font-semibold hover:opacity-80">
                    Submit
                  </button>
                </div>
              </form>
            </DialogPanel>
          </div>
        </div>
      </Dialog>
    </>
  );
};

export default Book;
