import { Pbutton, ToprightArrow } from "@/app/utils/components/Pbutton";
import Image from "next/image";

export default function HomeOurClients() {
  return (
    <div className="flex min-h-[80vh] w-full flex-col  items-center container justify-center my-12  px-12 lg:px-0">
      <div className="flex flex-col items-center gap-12">
        <div className="flex flex-col items-center gap-3">
          <h2 className="flex text-4xl font-light max-w-[800px] text-center">
            Our clients
          </h2>
        </div>
        <div className="flex flex-col items-center gap-5 lg:flex-row">
          {Array(3)
            .fill(1)
            .map((item: number, index: number) => (
              <div
                className="flex flex-col items-center gap-5 basis-1/3"
                key={index}
              >
                <Image
                  src="/assets/home/google.png"
                  alt="Booth Button"
                  width={62}
                  height={62}
                  priority
                />
                <div className="flex flex-col items-start gap-3 p-10 border border-solid border-[rgba(204, 204, 204, 1)] rounded-2xl ">
                  <h3 className="text-xl font-light ">IBM</h3>
                  <span className="text-sm font-light ">
                    Real-time, wearable AI
                  </span>
                  <span className="text-sm font-light ">
                    &quot;In the healthcare sector, precision and reliability
                    are paramount. Ixana&apos;s Wi-R has transformed the way we
                    communicate between medical devices, ensuring real-time data
                    transfer without interference. A game-changer in
                    patient-centric connectivity.&quot;
                  </span>
                </div>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
}
