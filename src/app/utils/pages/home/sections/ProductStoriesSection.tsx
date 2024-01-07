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
    <div className="flex flex-col w-full pb-12 ">
      <div className="  flex  flex-col w-full lg:w-[calc(100%-6rem)] grow bg-contain bg-no-repeat lg:ml-24 bg-left-top py-12 gap-14 relative overflow-hidden px-12">
        <div className=" flex w-[calc(50%-3rem)] absolute left-0 top-0 bottom-0">
          <Image
            src="/assets/home/stories-line-left.svg"
            alt=""
            className="flex object-contain w-auto "
            width={500}
            height={500}
            priority
          />
        </div>
        <div className=" w-full h-[0.5px] flex bg-black absolute left-[4%] top-0"></div>
        <div className=" h-[0.5px] flex bg-black absolute left-[4%] bottom-0 w-[calc(46%-50px)]"></div>
        <div className="flex flex-col justify-between md:flex-row">
          <h2 className="flex text-4xl ">Stories from the Ixana Experience</h2>
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
            <div key={item} className="flex flex-col gap-3 w-[280px]">
              <p className="text-xs text-[rgba(0,0,0,0.7)] ">
                “ The unique combination of a high-speed wire-free personal
                network faster and lower power than Bluetooth or Wi-Fi, and all
                day wereable AR headset is nothing short of mind-blowing. It has
                the potential to fundamentally change the future of personal
                computing. “
              </p>
              <span className="text-sm ">Ed Roman</span>
              <span className="text-md ">Managing director, Hack VC</span>
            </div>
          ))}
        </Carousel>
      </div>
      <div className="relative flex w-full">
        <Image
          src="/assets/home/stories-line-right.svg"
          alt=""
          className="flex w-[50px] absolute left-[calc(50%-50px)] -top-[6px]  "
          width={500}
          height={500}
          priority
        />
      </div>
    </div>
  );
}
