"use client";
import Image from "next/image";
import { useState } from "react";

export default function TechnologyProductSpecSection() {
  const [selected, setSelected] = useState(1);

  return (
    <div className="flex min-h-[80vh] w-full flex-col  items-center container justify-center py-12">
      <div className="flex flex-col items-center w-full gap-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
          <div className="flex flex-col items-start justify-center gap-3 order-2 lg:order-1">
            <div className="flex gap-3 flex-col order-2 lg:order-1">
              <h2 className="text-4xl font-light">Wire-like wireless</h2>
              <p className="text-xs font-light max-w-[400px]">
                Traditional wireless signals radiate uniformly in every direction. The Bluetooth signal created on your
                phone can be accessed by anyone in a 5-10m radius. Alternatively, Wi-R<sup>TM</sup> confines the signal
                around the wearer`s E-Field surface. Your data signal is private from someone sitting at the next table.
              </p>
            </div>

            <div className="order-1 lg:order-2">
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
          </div>
          <div className="flex justify-center order-1 lg:order-2">
            {selected == 0 ? (
              <Image
                src={
                  selected == 0
                    ? "/assets/technology/body-wearable-headset-traditional.png"
                    : "/assets/technology/body-wearable-headset.png"
                }
                alt="Wearable Ixana"
                className="transition ease-in-out flex  max-h-[500px] w-auto delay-300"
                width={300}
                height={300}
                priority
              />
            ) : (
              <Image
                src={
                  selected == 0
                    ? "/assets/technology/body-wearable-headset-traditional.png"
                    : "/assets/technology/body-wearable-headset.png"
                }
                alt="Wearable Ixana"
                className="transition ease-in-out flex  max-h-[500px] w-auto delay-300"
                width={300}
                height={300}
                priority
              />
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
