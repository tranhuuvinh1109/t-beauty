import Image from "next/image";

import { IoMdCall } from "react-icons/io";
import { FaCalendarAlt } from "react-icons/fa";
import Container from "../Container/Container";

const Award = () => {
  return (
    <div className="relative min-h-[640px] md:min-h-[500px] mt-10">
      <Image
        src="/images/background.webp"
        alt="background"
        fill
        className="z-0 hidden md:block"
        objectFit="cover"
      />
      <Image
        src="/images/background-mb.webp"
        alt="background-mb"
        fill
        className="z-0 block md:hidden"
        objectFit="cover"
      />
      <div className="z-10 absolute top-0 bottom-0 left-0 right-0 flex items-center">
        <Container className="md:grid md:grid-cols-2 md:gap-4 flex flex-col gap-6">
          <div className="col-span-1 flex gap-4 items-center">
            <div className="w-fit bg-gold-hover max-w-[300px] h-[220px] md:h-fit rounded-xl py-4 text-center border border-gold">
              <div className="pb-6 border-b border-fill flex md:flex-col gap-2 justify-center items-center">
                <div className="p-2 rounded-full hidden md:block border-2 text-gold border-gold w-fit mx-0 md:mx-auto h-fit">
                  <IoMdCall fontSize={40} />
                </div>
                <div className="p-2 rounded-full block md:hidden border-2 text-gold border-gold w-fit mx-0 md:mx-auto h-fit">
                  <IoMdCall fontSize={18} />
                </div>
                <div className="text-left md:text-center">
                  <h2 className="mt-0 md:mt-8 text-fill text-sm  md:text-xl font-semibold">
                    HOTLINE
                  </h2>
                  <h1 className="text-base md:text-2xl font-semibold text-gold">
                    1900 1900
                  </h1>
                </div>
              </div>
              <h2 className="pt-4 pb-0 md:pb-4 text-sm md:text-base text-fill px-1 md:px-2">
                Ready to serve and answer all customer inquiries 24/7.
              </h2>
            </div>
            <div className="w-fit bg-gold-hover max-w-[300px] h-[220px] md:h-fit rounded-xl py-4 text-center border border-gold">
              <div className="pb-6 border-b border-fill flex md:flex-col gap-2 justify-center items-center">
                <div className="p-2 rounded-full hidden md:block border-2 text-gold border-gold w-fit mx-0 md:mx-auto h-fit">
                  <FaCalendarAlt fontSize={40} />
                </div>
                <div className="p-2 rounded-full block md:hidden border-2 text-gold border-gold w-fit mx-0 md:mx-auto h-fit">
                  <FaCalendarAlt fontSize={18} />
                </div>
                <div className="text-left md:text-center">
                  <h2 className="mt-0 md:mt-8 text-fill text-sm  md:text-xl font-semibold">
                    APPOINTMENT
                  </h2>
                  <h1 className="text-base md:text-2xl font-semibold text-gold">
                    GET OFFER
                  </h1>
                </div>
              </div>
              <h2 className="pt-4 pb-0 md:pb-4 text-sm md:text-base text-fill px-1 md:px-2">
                Book an appointment today to receive thousands of offers.
              </h2>
            </div>
          </div>
          <div className="col-span-1  rounded-xl text-center text-white">
            <div className="flex flex-col gap-2">
              <h3 className="text-xl font-semibold">Register now</h3>
              <h1 className="text-4xl font-semibold uppercase">Instant gift</h1>
              <h5>Please fill in your information to receive consultation</h5>
            </div>
            <form className="flex flex-col gap-6 px-10 mt-6 text-gold">
              <input
                placeholder="Name"
                className="px-4 py-2 rounded-full border border-gold"
              />
              <input
                placeholder="Phone number"
                className="px-4 py-2 rounded-full border border-gold"
              />
              <button
                type="submit"
                className="px-10 py-2 bg-white w-fit mx-auto rounded-full font-semibold hover:bg-gold-hover hover:text-white"
              >
                Submit
              </button>
            </form>
          </div>
        </Container>
      </div>
    </div>
  );
};

export default Award;
