import Image from "next/image";
import { Pbutton, ToprightArrow } from "../../components/Pbutton";

export default function TechnologyProductSpecSection() {
  return (
    <div className="flex min-h-[80vh] w-full flex-col  items-center container justify-center py-12">
      <div className="flex flex-col items-center w-full gap-12">
        <div className="flex flex-col items-center justify-between w-full gap-12 py-5 md:flex-row grow">
          <div className="flex flex-col items-start basis-[50%] lg:basis-[30%] justify-center gap-3">
            <h2 className="text-4xl font-light ">Wire-like wireless</h2>
            <p className="text-xs font-light max-w-64">
              Traditional wireless signals radiate uniformly in every direction.
              The Bluetooth signal created on your phone can be accessed by
              anyone in a 5-10m radius. Wi-R on the other hand, confines the
              signal around the surface. Someone sitting on your next table
              doesn't even have access to the signal.
            </p>
            <div className="flex gap-12">
              <span className=" text-itextgrey">Traditional Wireless</span>
              <span className="border-b-4 border-solid text-iblack border-b-ibtnorange">
                Wi-R™ Wireless
              </span>
            </div>
          </div>
          <Image
            src="/assets/technology/body-wearable-headset.png"
            alt="Wearable Ixana"
            className="flex flex-col basis-[50%] lg:basis-[60%] h-auto "
            width={500}
            height={300}
            priority
          />
        </div>
      </div>
    </div>
  );
}
