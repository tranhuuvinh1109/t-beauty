import Image from "next/image";
import Animation from "../Animation/Animation";
import { SERVICE } from "@/app/constanst";
import { Carousel } from "react-responsive-carousel";

const Service = () => {
  return (
    <Animation animateIn="fadeIn" animateOut="fadeOut">
      <h5 className="text-center text-text-primary text-3xl font-semibold my-6">
        Featured services
      </h5>
      <div>
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
          {SERVICE.map((item, index) => {
            return (
              <div
                key={index}
                className="rounded-lg md:rounded-2xl bg-orange md:bg-white hover:bg-orange"
              >
                <div className="w-full h-[200px] md:h-[250px] relative rounded-lg md:rounded-2xl">
                  <Image
                    src={item.image}
                    alt={item.service}
                    fill
                    objectFit="cover"
                    className=" rounded-lg md:rounded-2xl"
                  />
                </div>
              </div>
            );
          })}
        </Carousel>
      </div>
      {/* <div className="grid  grid-cols-2 md:grid-cols-3 md:gap-8 gap-4">
        {SERVICE.map((item, index) => {
          return (
            <div
              key={index}
              className="rounded-lg md:rounded-2xl bg-orange md:bg-white hover:bg-orange"
            >
              <div className="w-full h-[200px] md:h-[250px] relative rounded-lg md:rounded-2xl">
                <Image
                  src={item.image}
                  alt={item.service}
                  fill
                  objectFit="cover"
                  className=" rounded-lg md:rounded-2xl"
                />
              </div>
            </div>
          );
        })}
      </div> */}
    </Animation>
  );
};

export default Service;
