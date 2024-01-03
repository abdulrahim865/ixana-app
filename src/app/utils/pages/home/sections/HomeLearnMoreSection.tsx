import { Pbutton, ToprightArrow } from "@/app/utils/components/Pbutton";
import Image from "next/image";

export default function HomeLearnMoreSection() {
  return (
    <div className=" container overflow-hidden relative flex justify-center w-full min-h-[90vh] grow bg-iblack rounded-3xl px-3 md:px-12">
      <div className="absolute top-0 bottom-0 -left-[5%] -right-[5%] flex items-end justify-between gap-5">
        <Image
          src="/assets/home/ixana-headset-pattern-2.png"
          alt="Head Phones Ixana"
          className=" hidden lg:flex w-auto max-h-full lg:max-w-[100%]"
          width={500}
          height={500}
          priority
        />
        <Image
          src="/assets/home/ixana-headset-pattern.png"
          alt="Head Phones Ixana"
          className="flex w-auto max-h-full lg:max-w-[100%]"
          width={500}
          height={500}
          priority
        />
      </div>

      <div className="flex flex-col items-center gap-5 my-12 text-center text-white basis-[80%] lg:basis-1/3 grow-0 z-10">
        <span className="primary-chip">Technology</span>
        <h1 className="text-4xl font-light ">
          Create an E-Field bubble <br /> around you to transfer data
        </h1>
        <span className="text-xs font-extralight text-[#BFBDBD]">
          Traditional wireless is absorbed by our body and radiates everywhere.
          Our groundbreaking innovation restricts the signal only in a E-field
          bubble around you, making it 100 times more efficient.
        </span>
        <Pbutton
          text="Learn more"
          icon={<ToprightArrow />}
          wrapperClass="text-sm bg-white text-iblack hover:bg-iblack transition1 hover:text-white"
        />
      </div>
    </div>
  );
}
