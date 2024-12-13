"use client";

import { Carousel } from "react-responsive-carousel";
import { SLIDERS_DESKTOP, SLIDERS_MOBILE } from "../../constanst";
import Image from "next/image";
import "react-responsive-carousel/lib/styles/carousel.min.css";

const SliderContainer = () => {
  return (
    <div className="">
      <div className="hidden md:block">
        <Carousel
          autoPlay
          interval={3000}
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
          {SLIDERS_DESKTOP.map((item, index) => {
            return (
              <a key={index}>
                <div className="w-full h-[450px] md:h-[500px] relative">
                  <Image
                    src={item.href}
                    alt={item.name}
                    fill
                    quality={100}
                    style={{ objectFit: "cover" }}
                  />
                </div>
              </a>
            );
          })}
        </Carousel>
      </div>
      <div className="block md:hidden">
        <Carousel
          autoPlay
          interval={3000}
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
          {SLIDERS_MOBILE.map((item, index) => {
            return (
              <a key={index}>
                <div className="w-full h-[450px] md:h-[500px] relative">
                  <Image
                    src={item.href}
                    alt={item.name}
                    width={400}
                    height={300}
                    quality={100}
                    style={{ objectFit: "contain" }}
                  />
                </div>
              </a>
            );
          })}
        </Carousel>
      </div>
    </div>
  );
};

export default SliderContainer;
