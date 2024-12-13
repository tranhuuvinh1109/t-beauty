"use client";
import { IMAGES } from "@/app/constanst";
import Image from "next/image";
import React, { useEffect, useRef } from "react";

const InfiniteScroll = () => {
  const scrollerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      addAnimation();
    }
  }, []);

  function addAnimation() {
    const scroller = scrollerRef.current;

    if (scroller) {
      scroller.setAttribute("data-animated", "true");

      const scrollerInner = scroller.querySelector(
        ".scroller__inner"
      ) as HTMLUListElement;
      const scrollerContent = Array.from(
        scrollerInner.children
      ) as HTMLElement[];

      scrollerContent.forEach((item) => {
        const duplicatedItem = item.cloneNode(true) as HTMLElement;
        duplicatedItem.setAttribute("aria-hidden", "true");
        scrollerInner.appendChild(duplicatedItem);
      });
    }
  }

  return (
    <div className="relative min-h-[500px]">
      <Image
        src="/images/bg-dot.png"
        alt="background"
        fill
        className="z-0"
        style={{ objectFit: "cover" }}
      />
      <div className="absolute flex justify-center items-center top-0 bottom-0 right-0 left-0 z-20	">
        <div
          ref={scrollerRef}
          className="scroller my-auto max-w-[1280px] mx-auto"
          data-speed="fast"
        >
          <ul className="tag-list scroller__inner">
            {IMAGES.map((item, index) => {
              return (
                <li key={index} className="min-h-[250px] w-[250px] relative">
                  <Image
                    src={item.href}
                    alt={item.name}
                    fill
                    className="z-10"
                    style={{ objectFit: "cover" }}
                  />
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default InfiniteScroll;
