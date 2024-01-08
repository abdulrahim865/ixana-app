import { Pbutton, ToprightArrow } from "@/app/utils/components/Pbutton";
import Image from "next/image";

export default function HomeOurMissionHighlighted() {
  return (
    <div
      className="flex flex-col items-center justify-center w-full py-12 text-white bg-no-repeat bg-contain bg-ibtnorange"
      style={{
        backgroundImage:
          "url(/assets/home/icons/quote-pattern-left.svg), url(/assets/home/icons/quote-pattern-right.svg) ",
        backgroundPosition: "right top, left bottom",
        backgroundSize: "30%, 20%",
      }}
    >
      <div className="flex flex-col items-center gap-5 lg:w-[700px]  px-12">
        <h2 className="flex text-xl lg:text-5xl font-light max-w-[800px] text-center">
          Build the future of high-speed human-computer interaction with the
          world’s most prolific innovators
        </h2>

        <p className="flex text-sm font-light max-w-[800px] text-center">
          Developing human-computer interfaces is an interdisciplinary
          challenge. We are looking for the world’s best engineers, scientists
          and operations masters.
        </p>
        <Pbutton text="Join Us" icon={<ToprightArrow />} />
      </div>
    </div>
  );
}
