"use client";

import { Carousel } from "react-responsive-carousel";
import { SLIDERS } from "../../constanst";
import Image from "next/image";
import "react-responsive-carousel/lib/styles/carousel.min.css";

const SliderContainer = () => {
  return (
    <div className="">
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
        {SLIDERS.map((item, index) => {
          return (
            <a key={index}>
              <div className="w-full h-[250px] md:h-[500px] relative">
                <Image
                  src={item.href}
                  alt={item.name}
                  fill
                  quality={100}
                  objectFit="container"
                />
              </div>
            </a>
          );
        })}
      </Carousel>
    </div>
  );
};

export default SliderContainer;
