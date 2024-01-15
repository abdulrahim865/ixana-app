"use client";
import { Pbutton, ToprightArrow } from "@/app/utils/components/Pbutton";
import Image from "next/image";
import Link from "next/link";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

export default function HomeBreakThrough() {
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
      items: 1,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  const texts = [
    "Touch to securely pay, unlock doors and workstations",
    "Real-time dashboard of your health",
    "Continuous hardware 2FA everywhere",
    "Store infinite memories and retrieve at will",
    "Train a digital clone based on your physical world",
    "Indoor navigation systems for the visually impaired",
    "Charging-free diabetes management systems",
    "Give AI eyes, ears",
  ];

  return (
    <div>
      <div className="relative md:flex flex-col items-center w-full min-h-screen gap-5 px-12 py-24 text-white bg-iblack hidden">
        <Image
          src="/assets/home/breakthrough-pattern.svg"
          alt="Ixana Pattern"
          width={20}
          height={50}
          className="flex absolute left-[calc(50%-11px)] top-0"
          priority
        />
        <div className="container flex flex-col items-center w-full gap-5 ">
          <div className="flex flex-col items-center gap-3">
            <h2 className="flex text-4xl text-center ">
              {/* Breakthrough technology for high- speed <br /> human-computer
            interaction */}
              Ixana&apos;s roadmap for high- speed
              <br /> human-computer interaction
            </h2>

            {/* <Link href="/blog/123">
              <Pbutton text="Peek into the future" icon={<ToprightArrow />} />
            </Link> */}
          </div>
          <div className="flex flex-col items-center justify-between gap-5 lg:flex-row">
            <div className="flex flex-col items-center gap-12 basis-1/4">
              <span className="flex flex-col text-sm font-light w-[150px]">
                <Image
                  src="/assets/home/ixana-quote-pattern.svg"
                  alt="Ixana Pattern"
                  width={20}
                  height={20}
                  className="flex"
                  priority
                />
                <span>Touch to securely pay, unlock doors and workstations</span>
              </span>
              <span className="text-sm font-light w-[150px]">Real-time dashboard of your health</span>
              <span className="text-sm font-light w-[150px]">Continuous hardware 2FA everywhere</span>
            </div>
            <Image
              src="/assets/home/ixana-chip-full.png"
              alt="Ixana chip icon"
              width={500}
              height={300}
              className="flex w-[300px]"
              priority
            />
            <div className="flex flex-col items-center gap-12 basis-1/4">
              <span className="text-sm font-light w-[150px]">Store infinite memories and retrieve at will</span>
              <span className="text-sm font-light w-[150px]">Train a digital clone based on your physical world</span>
              <span className="text-sm font-light w-[150px]">Indoor navigation systems for the visually impaired</span>
            </div>
          </div>
        </div>
        <div className="flex flex-col items-center gap-12 md:flex-row basis-1/2">
          <span className="text-sm font-light lg:w-[200px] text-center ">
            Charging-free diabetes management systems
          </span>
          <span className="text-sm font-light lg:w-[200px] text-center ">Give AI eyes, ears</span>
        </div>
      </div>
      {/* For Mobile */}
      <div className="relative flex flex-col items-center w-full min-h-screen gap-5 px-6 pt-24 pb-10 text-white bg-iblack md:hidden">
        <Image
          src="/assets/home/breakthrough-pattern.svg"
          alt="Ixana Pattern"
          width={20}
          height={50}
          className="flex absolute left-[calc(50%-11px)] top-0"
          priority
        />
        <div className="container flex flex-col items-center w-full gap-5 ">
          <div className="flex flex-col items-center gap-3">
            <h2 className="flex text-xl text-center">
              {/* Breakthrough technology for high- speed <br /> human-computer
            interaction */}
              Ixana&apos;s roadmap for high- speed
              <br /> human-computer interaction
            </h2>

            {/* <Link href="/blog/123">
              <Pbutton text="Peek into the future" icon={<ToprightArrow />} />
            </Link> */}
          </div>
          <div className="flex flex-col items-center justify-between gap-5 lg:flex-row">
            <Image
              src="/assets/home/ixana-chip-full.png"
              alt="Ixana chip icon"
              width={500}
              height={300}
              className="flex w-[300px]"
              priority
            />
          </div>
          <div className="max-w-[90vw]">
            <Carousel
              autoPlay={true}
              infiniteLoop={true}
              interval={2000}
              showStatus={false}
              showArrows={false}
              showThumbs={false}
            >
              {texts.map((text, index) => (
                <div className="flex items-center justify-center w-full py-6" key={index}>
                  <h3 className="text-sm font-light min-h-[50px] text-white">{text}</h3>
                </div>
              ))}
            </Carousel>
          </div>
        </div>
      </div>
    </div>
  );
}
