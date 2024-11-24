import Image from "next/image";
import Container from "../Container/Container";
import { FaPhoneAlt } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";
import { FaLocationDot } from "react-icons/fa6";
import { COLOR } from "@/app/enum/common";
import { SOCIAL_MEDIA } from "@/app/constanst";

const Footer = () => {
  return (
    <footer className=" bg-footer py-8 font-[family-name:var(--font-geist-mono)] mt-10">
      <Container className="md:grid grid-cols-3 gap-4">
        <div>
          <div className="flex items-center justify-center md:justify-start gap-2">
            <div className="relative w-[100px] h-[100px]">
              <Image
                src="/Logo.png"
                fill={true}
                alt={"Logo"}
                style={{
                  objectFit: "cover",
                }}
              />
            </div>
            <h1 className="text-2xl  font-semibold text-gold font-[family-name:var(--font-edu)] ">
              T Beauty Center
            </h1>
          </div>
          <h5 className=" text-sm mt-4 font-medium pr-0 md:pr-10 md:text-left text-center">
            T Beauty Beauty Institute always strives relentlessly to provide the
            best service for customers.
          </h5>
        </div>
        <div className="pt-[36px]">
          <h5 className="mt-4 font-semibold text-xl border-b pb-2 border-gold text-center md:text-left">
            Contact information
          </h5>
          <div className="flex flex-col gap-3 px-2 mt-6">
            <div className="flex items-center gap-3">
              <FaPhoneAlt fontSize={18} fill={COLOR.gold} />
              <h6 className=" font-semibold">408 646 6147</h6>
            </div>
            <div className="flex items-center gap-3">
              <FaLocationDot fontSize={18} fill={COLOR.gold} />
              <h6 className=" font-semibold">
                2114 Senter Rd Ste 12 San Jose, CA 95112
              </h6>
            </div>
            <div className="flex items-center gap-3">
              <IoMdMail fontSize={18} fill={COLOR.gold} />
              <h6 className=" font-semibold">tbeautycenterskin@gmail.com</h6>
            </div>
          </div>
        </div>
        <div className="pt-[36px] pb-9 md:pb-0">
          <h5 className="mt-4 font-semibold text-xl border-b pb-2 border-gold text-center md:text-left">
            Follow us
          </h5>
          <div className="grid grid-cols-3 grid-rows-2 gap-3 px-2 mt-6">
            {SOCIAL_MEDIA.map((media, index) => {
              const Icon = media.icon;
              return (
                <div key={index}>
                  <a
                    href={media.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`${
                      media.link === "" ? "pointer-events-none" : ""
                    }`}
                  >
                    <Icon />
                  </a>
                </div>
              );
            })}
          </div>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
