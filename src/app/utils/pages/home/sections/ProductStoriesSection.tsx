"use client";
import Image from "next/image";
import { useRef } from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

export default function ProductStoriesSection() {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };
  const carousel = useRef<Carousel>(null);
  return (
    <div
      className="  flex  flex-col w-full lg:w-[calc(100%-6rem)] min-h-[100vh] grow bg-cover bg-no-repeat lg:ml-24 bg-left-top px-12 py-12 gap-20"
      style={{
        backgroundImage: "url(/assets/home/stories-lines.svg)",
      }}
    >
      <div className="flex justify-between">
        <h2 className="pt-5 text-4xl ">Stories from the Ixana Experience</h2>
        <div className="flex gap-3">
          <button
            onClick={(e) => {
              carousel.current?.previous(1);
            }}
            className="bg-transparent border-none bg-[rgba(230, 230, 230, 1)]"
          >
            <Image
              src="/assets/arrow-right.svg"
              alt="Arrow right"
              width={50}
              height={50}
              priority
            />
          </button>
          <button
            onClick={(e) => {
              carousel.current?.next(1);
            }}
            className="bg-transparent border-none bg-[rgba(230, 230, 230, 1)]"
          >
            <Image
              src="/assets/arrow-right.svg"
              className="flex rotate-180 "
              alt="Arrow right"
              width={50}
              height={50}
              priority
            />
          </button>
        </div>
      </div>

      <Carousel ref={carousel} responsive={responsive} arrows={false}>
        {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((item) => (
          <div key={item} className="flex flex-col gap-3">
            <p className="text-sm ">
              “ The unique combination of a high-speed wire-free personal
              network faster and lower power than Bluetooth or Wi-Fi, and all
              day wereable AR headset is nothing short of mind-blowing. It has
              the potential to fundamentally change the future of personal
              computing. “
            </p>
            <span className="text-md ">Ed Roman</span>
            <span className="text-lg ">Managing director, Hack VC</span>
          </div>
        ))}
      </Carousel>
    </div>
  );
}
