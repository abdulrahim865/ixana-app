import { Pbutton, ToprightArrow } from "@/app/utils/components/Pbutton";
import Image from "next/image";

export default function ProductSpecSection() {
  return (
    <div className="flex flex-col w-full ">
      <div className="  flex  flex-col md:flex-row  w-full min-h-[90vh] grow py-5 justify-between items-center gap-3 md:gap-0 ">
        <div className="flex px-12 lg:pl-24 flex-col items-start basis-[50%] lg:basis-[40%] justify-center gap-3">
          <span className="primary-chip">Technology</span>
          <Image
            src="/assets/home/icons/icon-product.svg"
            alt="Product Ixana"
            width={20}
            height={20}
            priority
          />
          <h2 className="text-4xl w-[400px]">
            Silicon Chip for Body Area Network
          </h2>
          <p className="text-xs font-light w-[400px]">
            Our 4Mbit/s silicon chip is faster than Bluetooth, yet 100x lower
            power, lower latency and more reliable. Integrate it inside
            wearables, smartphones and other devices similar to how you’d
            integrate a wireless chip.
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
      <div className="  flex  flex-col md:flex-row  w-full min-h-[90vh] grow py-5 justify-between items-center gap-3 md:gap-0 ">
        <Image
          src="/assets/home/ixana-headset.png"
          alt="Chip Ixana"
          className="flex flex-col lg:basis-[40%] h-auto w-[400px] lg:w-fit"
          width={500}
          height={300}
          priority
        />
        <div className="flex px-12 flex-col items-start basis-[50%] lg:basis-[50%] justify-center gap-3">
          <span className="primary-chip">Technology</span>
          <Image
            src="/assets/home/icons/icon-product.svg"
            alt="Product Ixana"
            width={20}
            height={20}
            priority
          />
          <h2 className="text-4xl w-[400px]">
            Stream audio and data with touch
          </h2>
          <p className="text-xs font-light w-[400px]">
            Experience the next frontier in connectivity with Ixana&apos;s Wi-R
            technology. A touch is all it takes to seamlessly stream audio and
            data, creating a world where interaction becomes instant and
            intuitive. Elevate your tech experience with Ixana.&quot;
          </p>
          <Pbutton text="Learn More" icon={<ToprightArrow />} />
        </div>
      </div>
      <div className="  flex  flex-col md:flex-row  w-full min-h-[90vh] grow py-5 justify-between items-center gap-3 md:gap-0 ">
        <div className="flex px-12 lg:pl-24 flex-col items-start basis-[50%] lg:basis-[40%] justify-center gap-3">
          <span className="primary-chip">Technology</span>
          <Image
            src="/assets/home/icons/icon-chip.svg"
            alt="Product Ixana"
            width={20}
            height={20}
            priority
          />
          <h2 className="text-4xl w-[400px]">
            Silicon Chip for Body Area Network
          </h2>
          <p className="text-xs font-light w-[400px]">
            Our 4Mbit/s silicon chip is faster than Bluetooth, yet 100x lower
            power, lower latency and more reliable. Integrate it inside
            wearables, smartphones and other devices similar to how you&apos;d
            integrate a wireless chip.
          </p>
          <Pbutton text="Learn More" icon={<ToprightArrow />} />
        </div>
        <Image
          src="/assets/home/ixana-parts.png"
          alt="Chip Ixana"
          className="flex flex-col basis-[50%] lg:basis-[40%] h-auto w-[400px] lg:w-fit"
          width={500}
          height={300}
          priority
        />
      </div>
    </div>
  );
}
