"use client";
import Image from "next/image";
import { useState } from "react";

export default function TechnologyProductSpecSection() {
  const [selected, setSelected] = useState(1);

  return (
    <div className="flex min-h-[80vh] w-full flex-col  items-center container justify-center py-12">
      <div className="flex flex-col items-center w-full gap-12">
        <div className="flex flex-col items-center justify-between w-full gap-12 py-5 md:flex-row grow">
          <div className="flex flex-col items-start basis-[50%] lg:basis-[60%] justify-center gap-3">
            <h2 className="text-4xl font-light">Wire-like wireless</h2>
            <p className="text-xs font-light max-w-[400px]">
              Traditional wireless signals radiate uniformly in every direction. The Bluetooth signal created on your
              phone can be accessed by anyone in a 5-10m radius. Wi-R on the other hand, confines the signal around the
              surface. Someone sitting on your next table doesn&apos;t even have access to the signal.
            </p>

            {selected == 0 ? (
              <div className="flex gap-3 lg:gap-12 ">
                <span className="border-b-4 border-solid text-iblack border-b-ibtnorange">Traditional Wireless</span>
                <span className="text-itextgrey" onClick={() => setSelected(1)}>
                  Wi-R™ Wireless
                </span>
              </div>
            ) : (
              <div className="flex gap-3 lg:gap-12 ">
                <span className="text-itextgrey" onClick={() => setSelected(0)}>
                  Traditional Wireless
                </span>
                <span className="border-b-4 border-solid text-iblack border-b-ibtnorange">Wi-R™ Wireless</span>
              </div>
            )}
          </div>
          <div className="flex basis-[50%] lg:basis-[50%] justify-start">
            <Image
              src={
                selected == 0
                  ? "/assets/technology/body-wearable-headset-traditional.png"
                  : "/assets/technology/body-wearable-headset.png"
              }
              alt="Wearable Ixana"
              className="flex  max-h-[500px] w-auto "
              width={300}
              height={300}
              priority
            />
          </div>
        </div>
      </div>
    </div>
  );
}
