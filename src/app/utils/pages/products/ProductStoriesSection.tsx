"use client";
import Image from "next/image";
import { useRef } from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Chip from "../../components/Chip";

export default function ProductStoriesSection() {
  const stories = [
    {
      image: "/assets/products/apps/app1.png",
      title: "Charging-free wearables",
      text: "Wi-R's low power, high-speed operation enables distributed computing i.e. every wearable doesn't need it's own processor. Removing power hungry processing and low power communication means most wearables such as health monitors can be charging-free.",
    },
    {
      image: "/assets/products/apps/app2.png",
      title: "All-day battery-life smartglasses",
      text: "Smartglasses in the market today have 1 hr active battery life. Part of the reason is that processing video on your head requires a heavy-duty processor that consumes battery and generates heat. Wi-R enables smartglasses to compute using the smartphone's processor.",
    },
    {
      image: "/assets/products/apps/app3.png",
      title: "Pairing-free wearables",
      text: "Imagine you pick up a headphone and it automatically starts working since it gets paired the moment you touch it.",
    },
  ];

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
      <div className="  flex  flex-col w-full lg:w-[calc(100%-6rem)] grow bg-contain bg-no-repeat lg:ml-24 bg-left-top py-12 gap-14 relative overflow-hidden px-12">
        <div className="flex flex-col justify-between md:flex-row">
          <Chip title="Use Cases" bgColor="gray" textColor="white" />
          <h2 className="flex text-4xl ">A few applications</h2>
          <div className="flex gap-3">
            <button
              onClick={(e) => {
                carousel.current?.previous(1);
              }}
              className="bg-transparent border-none bg-[rgba(230, 230, 230, 1)]"
            >
              <Image src="/assets/arrow-right.svg" alt="Arrow right" width={50} height={50} priority />
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
          {stories.map((item, index) => (
            <div key={index} className="flex flex-col gap-3 w-[280px]">
              <Image src={item.image} alt="Arrow right" width={500} height={500} priority />
              <span className="text-sm ">{item.title}</span>

              <p className="text-xs text-[rgba(0,0,0,0.7)] ">{item.text}</p>
            </div>
          ))}
        </Carousel>
      </div>
    </div>
  );
}
