"use client";
import { COLOR } from "@/app/enum/common";
import { CERTIFICATES } from "@/app/constanst";
import { Carousel } from "react-responsive-carousel";
import Image from "next/image";
import Animation from "../Animation/Animation";

const Certificate = () => {
  return (
    <Animation className="mt-10" animateIn="fadeIn" animateOut="fadeOut">
      <div>
        <h1 className="md:text-xl text-base text-center font-medium">
          Reasons Why Customers Choose{" "}
          <span className="text-gold font-semibold">Beauty Aesthetic </span>
          Clinic
        </h1>
        <div
          className="md:grid hidden mt-8"
          style={{
            gridTemplateColumns: "repeat(4, 1fr)",
            gridTemplateRows: "auto",
            gridGap: "16px",
          }}
        >
          {CERTIFICATES.map((certificate, index) => {
            const Icon = certificate.icon;
            return (
              <div
                key={index}
                className="certificate-item hover:bg-gold-hover px-8 py-6 rounded-lg cursor-pointer min-h-[268px]"
              >
                <Icon stroke={COLOR.gold} />
                <div className="flex flex-col gap-2 mt-3">
                  <h3 className="text-lg font-semibold">{certificate.title}</h3>
                  <p className="text-sm">{certificate.content}</p>
                </div>
              </div>
            );
          })}

          <div className="w-full h-[268px]  relative col-span-2 rounded-lg overflow-hidden">
            <Image
              src="/images/banner1.jpg"
              alt="beauty"
              fill
              quality={100}
              style={{ objectFit: "cover" }}
            />
          </div>
        </div>
        <div className=" block md:hidden mt-6">
          <Carousel
            autoPlay
            interval={1500}
            axis="horizontal"
            showIndicators={false}
            showThumbs={false}
            swipeable
            showStatus={false}
            showArrows
            infiniteLoop
            stopOnHover
            width="100%"
          >
            {CERTIFICATES.map((certificate, index) => {
              const Icon = certificate.icon;
              return (
                <div
                  key={index}
                  className=" bg-orange px-6 py-6 min-h-[240px] rounded-2xl cursor-pointer"
                >
                  <Icon stroke={COLOR.gold} className="mx-auto" />
                  <div className="flex flex-col gap-1 mt-2">
                    <h3 className=" text-base font-semibold">
                      {certificate.title}
                    </h3>
                    <p className=" text-sm">{certificate.content}</p>
                  </div>
                </div>
              );
            })}
          </Carousel>
          <div className="w-full h-[268px]  relative col-span-2 rounded-lg overflow-hidden">
            <Image
              src="/images/banner1.jpg"
              alt="beauty"
              fill
              quality={100}
              style={{ objectFit: "contain" }}
            />
          </div>
        </div>
      </div>
    </Animation>
  );
};

export default Certificate;
