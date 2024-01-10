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
    <div className="relative flex flex-col w-full md:pt-24 min-h-[500px] mb-[100px] md:mb-[250px] ">
      <div
        className="absolute bottom-0 left-5 md:left-12 w-[1px] top-[90px] "
        style={{
          backgroundImage: 'url("/assets/lines-top-bottom.svg")',
          backgroundSize: "100%",
          backgroundRepeat: "repeat",
          backgroundPosition: "top right",
        }}
      ></div>

      <div
        className="absolute left-5 md:left-12 h-[250px] -bottom-[250px] w-[50%] "
        style={{
          backgroundImage: 'url("/assets/products/product-line-bottom.svg")',
          backgroundSize: "100%",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "top right",
        }}
      ></div>

      <div className="  flex  flex-col w-full lg:w-[calc(100%-6rem)] grow bg-contain bg-no-repeat lg:ml-24 bg-left-top py-12 gap-14 relative overflow-hidden px-12">
        <div className="flex flex-col justify-between md:flex-row">
          <h2 className="flex text-4xl ">A few applications</h2>
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
              <Image
                src="/assets/products/product1.png"
                alt="Arrow right"
                width={500}
                height={500}
                priority
              />
              <span className="text-sm ">Charging-free wearables</span>

              <p className="text-xs text-[rgba(0,0,0,0.7)] ">
                Wi-R’s low power, high-speed operation enables distributed
                computing i.e. every wearable doesn’t need it’s own processor.
                Removing power hungry processing and low power communication
                means most wearables such as health monitors can be
                charging-free.
              </p>
            </div>
          ))}
        </Carousel>
      </div>
    </div>
  );
}
