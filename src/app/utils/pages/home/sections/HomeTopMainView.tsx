"use client";
import { Pbutton, ToprightArrow } from "@/app/utils/components/Pbutton";
import Image from "next/image";
import { useRouter } from "next/navigation";

export default function HomeTopMainView() {
  const router = useRouter();
  return (
    <div className="flex flex-col-reverse  gap-5 p-3 md:p-12 md:flex-row min-h-[600px] md:min-h-[100vh]  mt-14 lg:mt-0 bg-[#F1F1F1] md:w-full ">
      <div
        className=" bg-center bg-no-repeat bg-cover basis-[40%] grow rounded-2xl min-h-[30vh] hidden md:flex"
        style={{ backgroundImage: `url('/assets/home/headphonesremoved.png')` }}
      ></div>

      <div className="flex flex-col items-center justify-center gap-5 md:items-start grow basis-[60%]">
        <div
          className="flex justify-center w-full rounded-2xl h-[100px] md:h-initial overflow-hidden md:grow"
          style={{ backgroundImage: "linear-gradient(115deg, #FD611F 31.81%, #FFCFBA 115.67%, #FFEFE9 142.09%)" }}
        >
          <Image
            src="/assets/home/ixana-drawing.svg"
            className="flex "
            alt="Play Button"
            width={500}
            height={300}
            priority
          />
        </div>

        <div
          className=" bg-center bg-no-repeat bg-cover basis-[40%] grow rounded-2xl min-h-[30vh] flex md:hidden w-full"
          style={{ backgroundImage: `url('/assets/home/headphonesremoved.png')` }}
        ></div>

        <h1 className="flex flex-col items-start justify-end gap-3 text-5xl md:text-5xl basis-1/3 ">
          <span className="text-black">Body-Internet Platform</span>
          <a onClick={() => router.push("/#demo")} className="flex gap-3 text-sm cursor-pointer Pbutton">
            <span>Get a demo</span>
            <ToprightArrow size={32} />
          </a>
        </h1>
      </div>
    </div>
  );
}
