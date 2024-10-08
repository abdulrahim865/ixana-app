import { Pbutton, ToprightArrow } from "@/app/utils/components/Pbutton";
import Image from "next/image";
import Link from "next/link";

export default function ApplicationsTopHeader() {
  return (
    <div
      className=" overflow-hidden relative flex flex-col w-full min-h-[100vh] grow bg-no-repeat bg-right-bottom ApplicationsTopHeader "
      style={{
        backgroundImage:
          'url("/assets/applications/application-header.png"), linear-gradient(180deg, #D4D3D2 0%, rgba(255, 255, 255, 0.49) 56.97%, rgba(212, 211, 210, 0.38) 104.41%)',
      }}
    >
      {/* <div
        className="flex bg-no-repeat bg-contain grow md:basis-1/2 w-[50%]"
        style={{
          backgroundImage: "url(/assets/products/pattern.svg)",
          backgroundPositionY: "100%",
        }}
      ></div> */}
      <div className="absolute flex flex-col items-start gap-3 top-20 lg:top-auto left-5 lg:left-20 lg:bottom-20 w-[70%] lg:w-[50%] md:w-full">
        <h1 className="flex text-2xl md:text-6xl ">AI co-pilot for the physical world</h1>
        <Link href="/blog/wi-r-enables-wearables-to-harness-ai-capabilities-via-distributed-computation">
          <Pbutton text="How?" icon={<ToprightArrow />} />
        </Link>
      </div>
    </div>
  );
}
