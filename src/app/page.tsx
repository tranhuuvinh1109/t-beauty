import Image from "next/image";
import { SERVICE } from "./constanst";
import Link from "next/link";
import { Certificate, Container, Slider } from "./components";

export default function Home() {
  return (
    <div className=" font-[family-name:var(--font-geist-mono)]">
      <div>
        <Slider />
      </div>
      <Container>
        <h5 className="text-center text-text-primary text-3xl font-semibold my-6">
          Featured services
        </h5>
        <div className="grid  grid-cols-2 md:grid-cols-3 md:gap-8 gap-4">
          {SERVICE.map((item, index) => {
            return (
              <div
                key={index}
                className="rounded-lg md:rounded-2xl bg-orange md:bg-white hover:bg-orange"
              >
                <div className="w-full h-[100px] md:h-[250px] relative rounded-lg md:rounded-2xl">
                  <Image
                    src={item.image}
                    alt={item.service}
                    fill
                    style={{ objectFit: "cover" }}
                    className=" rounded-lg md:rounded-2xl"
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
      </Container>
      <Certificate />
    </div>
  );
}
