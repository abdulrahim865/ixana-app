import { Pbutton, ToprightArrow } from "@/app/utils/components/Pbutton";
import Image from "next/image";

export default function ProductSpecSection() {
  return (
    <div className="  flex  flex-col md:flex-row  w-full min-h-[90vh] grow py-5 justify-between items-center gap-3 md:gap-0 ">
      <div className="flex px-12 lg:pl-24 flex-col items-start basis-[50%] lg:basis-[40%] justify-center gap-3">
        <span className="primary-chip">Technology</span>
        <h2 className="text-4xl ">Ixana Silicon Chip for Human-Computer Network</h2>
        <p>
          Our 4Mbit/s silicon chip is faster than Bluetooth, yet 100x lower
          power, lower latency and more reliable. Integrate it inside wearables,
          smartphones and other devices similar to how you’d integrate a
          wireless chip.
        </p>
        <Pbutton text="Learn More" icon={<ToprightArrow />} />
      </div>
      <Image
        src="/assets/home/ixana-chip.png"
        alt="Chip Ixana"
        className="flex flex-col basis-[50%] lg:basis-[40%] h-auto w-[400px] lg:w-fit"
        width={500}
        height={300}
        priority
      />
    </div>
  );
}
