"use client";
import { Pbutton, ToprightArrow } from "@/app/utils/components/Pbutton";
import Image from "next/image";
import { useRouter } from "next/navigation";

export default function HomeTopMainView() {
  const router = useRouter();
  return (
    <div className="bg-[#F1F1F1] w-full">
      <div className="container mx-auto">
        <div className="flex flex-col-reverse gap-5 p-3 md:p-12 md:flex-row min-h-[600px] md:min-h-[80vh]  mt-14 lg:mt-0  md:w-full ">
          <div className="flex flex-col items-center justify-center gap-5 md:items-start grow basis-[30%]">
            <h1 className="flex flex-col items-start justify-end gap-3 text-5xl md:text-5xl lg:basis-3/4 order-3">
              <span className="text-black">Body-Internet Platform</span>
              <a onClick={() => router.push("/#demo")} className="flex gap-3 text-sm cursor-pointer Pbutton">
                <span>Get a demo</span>
                <ToprightArrow size={32} />
              </a>
            </h1>

            <div
              className=" bg-center bg-no-repeat bg-cover basis-[40%] grow rounded-2xl min-h-[30vh] flex lg:hidden w-full order-2"
              style={{ backgroundImage: `url('/assets/home/headphonesremoved.png')` }}
            ></div>

            <div className="flex justify-center w-full rounded-2xl h-[100px] lg:min-h-fit overflow-hidden md:grow order-1 bg-gradient-to-r from-[#312F2F] to-[#74706F]">
              <Image
                src="/assets/home/ixana-header-chip.png"
                className="flex "
                alt="Play Button"
                width={500}
                height={300}
                priority
                style={{ objectFit: "contain" }}
              />
            </div>
          </div>

          <div
            className=" bg-center bg-no-repeat bg-cover basis-[40%] grow rounded-2xl min-h-[30vh] hidden lg:flex"
            style={{ backgroundImage: `url('/assets/home/headphonesremoved.png')` }}
          ></div>
        </div>
      </div>
    </div>
  );
}
