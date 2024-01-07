import { Pbutton, ToprightArrow } from "@/app/utils/components/Pbutton";
import Image from "next/image";

export default function AboutsHighlitedSection() {
  return (
    <div
      className="container relative flex justify-center w-full px-3 overflow-hidden grow bg-iblack md:px-12 min-h-[60vh] lg:min-h-[90vh] rounded-3xl"
      style={{
        backgroundImage: 'url("/assets/aboutus/about-cover.png")',
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="z-10 flex flex-col items-center justify-between w-full gap-5 my-12 text-center text-white">
        <div className="flex flex-col items-center gap-5 w-full lg:w-[50%]">
          <span className="primary-chip dotted white">Technology</span>
          <h1 className="text-4xl font-light ">
            Ushering high-speed human computer interfaces with distributed
            computing
          </h1>
          <span className="text-xs font-extralight text-[#BFBDBD] max-w-[400px]">
            Solving the problems of power, data rate, latency, and signal
            reliability that limit today&apos;s wearables
          </span>
        </div>
        <div className="flex items-center justify-between w-full gap-3">
          <div className="flex flex-col items-start">
            <h3 className="text-md ">Touch selectivity</h3>
            <span className="text-xs font-light ">Touch selectivity</span>
          </div>
          <div className="flex flex-col items-start">
            <h3 className="text-md ">Touch selectivity</h3>
            <span className="text-xs font-light ">Touch selectivity</span>
          </div>
          <div className="flex flex-col items-start">
            <h3 className="text-md ">Touch selectivity</h3>
            <span className="text-xs font-light ">Touch selectivity</span>
          </div>
          <div className="flex flex-col items-start">
            <h3 className="text-md ">Touch selectivity</h3>
            <span className="text-xs font-light ">Touch selectivity</span>
          </div>
        </div>
      </div>
    </div>
  );
}
