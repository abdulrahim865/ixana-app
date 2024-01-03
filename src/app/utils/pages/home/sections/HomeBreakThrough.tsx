import { Pbutton, ToprightArrow } from "@/app/utils/components/Pbutton";
import Image from "next/image";

export default function HomeBreakThrough() {
  return (
    <div className="flex flex-col items-center w-full min-h-screen gap-5 px-12 py-12 text-white bg-iblack">
      <div className="container flex flex-col items-center w-full gap-5 ">
        <div className="flex flex-col items-center gap-3">
          <h2 className="flex text-4xl text-center ">
            Breakthrough technology for high- speed <br /> human-computer
            interaction
          </h2>

          <Pbutton text="Peek into the future" icon={<ToprightArrow />} />
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
            <span className="text-sm font-light w-[150px]">
              Real-time dashboard of your health
            </span>
            <span className="text-sm font-light w-[150px]">
              Continuous hardware 2FA everywhere
            </span>
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
            <span className="text-sm font-light w-[150px]">
              Store infinite memories and retrieve at will
            </span>
            <span className="text-sm font-light w-[150px]">
              Train a digital clone based on your physical world
            </span>
            <span className="text-sm font-light w-[150px]">
              Indoor navigation systems for the visually impaired
            </span>
          </div>
        </div>
      </div>
      <div className="flex flex-col items-center gap-12 md:flex-row basis-1/2">
        <span className="text-sm font-light lg:w-[200px] text-center ">
          Charging-free diabetes management systems
        </span>
        <span className="text-sm font-light lg:w-[200px] text-center ">
          Give AI eyes, ears
        </span>
      </div>
    </div>
  );
}
