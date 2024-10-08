import { Pbutton, ToprightArrow } from "@/app/utils/components/Pbutton";
import Image from "next/image";

export default function TechnologyTopHeader() {
  return (
    <div className="bg-iblack w-full">
      <div className="container mx-auto overflow-hidden relative flex flex-col w-full min-h-[600px] lg:min-h-[80vh] grow">
        <div className="absolute top-0 bottom-0 -left-[5%] -right-[5%] flex items-end  gap-5 justify-end">
          <Image
            src="/assets/home/ixana-headset-pattern.png"
            alt="Head Phones Ixana"
            className="flex w-auto max-h-full lg:max-w-[100%]"
            width={500}
            height={500}
            priority
          />
        </div>
        <div className="absolute flex flex-col items-start gap-5 left-10 bottom-10">
          <div className="primary-chip">Wi-R</div>
          <h1 className="flex text-5xl text-white ">
            {/* Wireless for Human-Computer Network */}
            {`Wireless for Body Area Network`}
          </h1>
          {/* <h3 className="text-sm text-white font-light">{`AI Copilot for physical world`}</h3> */}
        </div>
      </div>
    </div>
  );
}
