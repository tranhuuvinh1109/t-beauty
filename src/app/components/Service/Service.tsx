import Image from "next/image";
import Animation from "../Animation/Animation";
import { SERVICE_DESKTOP } from "@/app/constanst";
import Link from "next/link";

const Service = () => {
  return (
    <Animation animateIn="fadeIn" animateOut="fadeOut">
      <h5 className="text-center text-text-primary text-3xl font-semibold my-6">
        Featured services
      </h5>
      <div className="grid  grid-cols-2 md:grid-cols-2 md:gap-8 gap-4">
        {SERVICE_DESKTOP.map((item, index) => {
          return (
            <div
              key={index}
              className="rounded-lg md:rounded-2xl bg-orange md:bg-white hover:bg-orange md:pt-4"
            >
              <div className="w-full h-[100px] md:h-[350px] flex justify-center relative rounded-lg md:rounded-2xl">
                <Image
                  src={item.image}
                  alt={item.service}
                  objectFit="cover"
                  className=" rounded-lg md:rounded-2xl"
                  width={500}
                  height={300}
                />
              </div>
              <div className="text-center py-2 md:py-4">
                <Link
                  href={item.href}
                  className=" font-semibold text-text-primary text-sm md:text-lg"
                >
                  {item.service}
                </Link>
              </div>
            </div>
          );
        })}
      </div>
    </Animation>
  );
};

export default Service;
