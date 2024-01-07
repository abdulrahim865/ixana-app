import { Pbutton, ToprightArrow } from "@/app/utils/components/Pbutton";
import Image from "next/image";

export default function TechnologyHeadPhoneReview() {
  return (
    <div className=" overflow-hidden relative flex flex-col w-full min-h-[600px] lg:min-h-[100vh] grow bg-iblack  ">
      <div className="absolute top-0 bottom-0 -left-[5%] -right-[5%] flex items-end  gap-5 justify-end">
        <Image
          src="/assets/technology/headset-preview.png"
          alt="Head Phones Ixana"
          className="flex w-auto h-full max-h-full lg:max-w-[100%]"
          width={500}
          height={500}
          priority
        />
      </div>
      <div className="absolute flex flex-col items-start gap-5 text-white left-10 bottom-10">
        <Image
          src="/assets/technology/tech-wireless.svg"
          alt="svg tech wireless"
          className="flex w-5 h-5"
          width={22}
          height={22}
        />{" "}
        <h1 className="flex pt-5 text-5xl font-light ">Headphones</h1>
        <span className=" text-xs font-light max-w-[400px]">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.{" "}
        </span>
        <a href="" className="pt-5 text-xs font-light ">
          Skip This Section
        </a>
      </div>
    </div>
  );
}
