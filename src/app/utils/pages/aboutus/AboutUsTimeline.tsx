"use client";
import { useState } from "react";

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

const Dot = ({ width }: { width: number }) => {
  return (
    <svg width={width} height="90" viewBox="0 0 91 90" fill="none" xmlns="http://www.w3.org/2000/svg">
      <g filter="url(#filter0_f_9_1814)">
        <circle cx="45.5945" cy="44.7614" r="26.761" transform="rotate(-180 45.5945 44.7614)" fill="#FF6320" />
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
  const [currentYear, setCurrentYear] = useState(2016);
  return (
    <div className="container flex flex-col items-center w-full gap-5 p-12 py-12 overflow-hidden text-white md:my-12 bg-iblack rounded-3xl">
      <div className="flex flex-col items-center w-full gap-12">
        <div className="flex flex-col items-center justify-between w-full gap-5 py-5 grow">
          <div className="flex gap-3">
            <button className="p-3 transform rotate-180 rounded-full bg-[rgba(64,62,61,1)]">
              <Arrow />
            </button>
            <button className="p-3 rounded-full bg-[rgba(64,62,61,1)]">
              <Arrow />
            </button>
          </div>
          <div className="bg-white primary-chip">Ixana’s timeline</div>
          <h2 className="text-2xl font-light text-center lg:text-4xl ">
            Ixana funded. Shovan joins. First Wi-R <br /> chip tapeout at Ixana
          </h2>

          <div className="relative flex items-center justify-between w-full mx-12">
            <div className="absolute left-7 right-7 bottom-11 grow h-0.5 bg-[rgba(49,47,47,1)] 5 z-0"></div>

            <div className="flex items-center justify-between w-full gap-5 md:mt-12">
              {Array(10)
                .fill(1)
                .map((_, i) => 2016 + i)
                .map((index) => (
                  <div key={index} className="z-10 flex flex-col items-center justify-between gap-3 ">
                    <h3
                      className={`${
                        currentYear === index ? "text-3xl" : "text-2xl"
                      }   text-ibtnorange transition-all duration-300 ease-in-out`}
                    >
                      {index}
                    </h3>
                    <button onClick={(e) => setCurrentYear(index)} className="transition-all duration-300 ease-in-out">
                      <Dot width={currentYear === index ? 91 : 48} />
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
