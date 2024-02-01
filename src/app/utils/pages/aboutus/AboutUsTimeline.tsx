"use client";
import { useState, useRef, useEffect } from "react";

const Arrow = () => {
  return (
    <svg width="15" height="16" viewBox="0 0 30 31" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M15.7765 29.7942L25.8672 18.8872C27.6486 16.9616 27.5318 13.9566 25.6063 12.1752L14.6992 2.08447"
        stroke="#FEFCFA"
        stroke-width="3.16643"
      />
      <path d="M26.1602 15.939L0.437863 15.9252" stroke="#FEFCFA" stroke-width="3.16643" />
    </svg>
  );
};

const Dot = ({ width, fillColor }: { width: number; fillColor: string }) => {
  return (
    <svg width={width} height="90" viewBox="0 0 91 90" fill="none" xmlns="http://www.w3.org/2000/svg">
      <g filter="url(#filter0_f_9_1814)">
        <circle cx="45.5945" cy="44.7614" r="26.761" transform="rotate(-180 45.5945 44.7614)" fill={fillColor} />
      </g>
      <defs>
        <filter
          id="filter0_f_9_1814"
          x="0.933985"
          y="0.100489"
          width="89.3215"
          height="89.322"
          filterUnits="userSpaceOnUse"
          color-interpolation-filters="sRGB"
        >
          <feFlood flood-opacity="0" result="BackgroundImageFix" />
          <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
          <feGaussianBlur stdDeviation="8.95" result="effect1_foregroundBlur_9_1814" />
        </filter>
      </defs>
    </svg>
  );
};

export default function AboutUsTimeline() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [displayTextIndex, setDisplayTextIndex] = useState(0);

  const timeline = [
    {
      year: "2016-20",
      text: "Wi-R Science de-risked by Prof. Shreyas Sen at Purdue University",
      ref: useRef(null),
    },
    {
      year: "2021",
      text: "Ixana funded. First Wi-R chip tapeout and demonstration",
      ref: useRef(null),
    },
    {
      year: "2022",
      text: "First wearable to wearable Wi-R communication demonstrated",
      ref: useRef(null),
    },
    {
      year: "2023",
      text: "1Mbit/s Wi-R chip launched at CES'23. Audio streaming demonstrated",
      ref: useRef(null),
    },
    {
      year: "2024",
      text: "4Mbit/s Wi-R chip launched at CES'24. SD video streaming demonstrated",
      ref: useRef(null),
    },
    {
      year: "2025",
      text: "20Mbit/s Wi-R chip launched at CES'24. HD video streaming demonstrated",
      ref: useRef(null),
    },
    {
      year: "2026-30",
      text: "Body internet platform for wearable AI realized with multiple charging-free Wi-R devices on body",
      ref: useRef(null),
    },
  ];

  const setYear = (index: number) => {
    setCurrentIndex(index);
    setDisplayTextIndex(index);
  };

  const clickArrow = (forward: boolean) => {
    if (forward) {
      if (currentIndex < timeline.length - 1) {
        setYear(currentIndex + 1);
        timeline[currentIndex + 1].ref.current?.scrollIntoView();
      }
    } else {
      if (currentIndex != 0) {
        setYear(currentIndex - 1);
      }
    }
  };

  return (
    <div className="container flex flex-col items-center w-full gap-5 px-0 md:px-12 py-12 overflow-hidden text-white md:my-12 bg-iblack rounded-3xl">
      <div className="flex flex-col items-center w-full gap-12">
        <div className="flex flex-col items-center justify-between w-full gap-5 py-5 grow">
          <div className="flex gap-3">
            <button
              className="p-3 transform rotate-180 rounded-full bg-[rgba(64,62,61,1)]"
              onClick={() => clickArrow(false)}
            >
              <Arrow />
            </button>
            <button className="p-3 rounded-full bg-[rgba(64,62,61,1)]" onClick={() => clickArrow(true)}>
              <Arrow />
            </button>
          </div>
          <div className="bg-white primary-chip">{`Ixana's timeline`}</div>
          <h2 className="text-2xl font-light text-center lg:text-4xl ">{timeline[displayTextIndex].text}</h2>

          <div className="relative flex items-center justify-between w-full mx-12">
            <div className="absolute left-0 right-0 bottom-11 grow h-0.5 bg-[rgba(49,47,47,1)] 5 z-0"></div>

            <div className="flex items-center justify-between w-full gap-5 md:mt-12 overflow-auto no-scrollbar">
              {timeline.map(({ year, text }, index) => (
                <div
                  key={index}
                  className="z-10 flex flex-col items-center justify-between gap-3"
                  ref={timeline[currentIndex].ref}
                >
                  <h3
                    className={`${currentIndex === index ? "text-xl md:text-3xl" : "text-lg md:text-2xl"}  ${
                      index <= currentIndex ? "text-ibtnorange" : "text-white"
                    } transition-all duration-300 ease-in-out text-nowrap px-1`}
                  >
                    {year}
                  </h3>
                  <button onClick={(e) => setYear(index)} className="transition-all duration-300 ease-in-out">
                    <Dot
                      width={currentIndex === index ? 91 : 48}
                      fillColor={index <= currentIndex ? "#FF6320" : "#FFFFFF"}
                    />
                  </button>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
