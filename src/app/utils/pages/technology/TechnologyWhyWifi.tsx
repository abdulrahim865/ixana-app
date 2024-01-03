import Image from "next/image";
import { Pbutton, ToprightArrow } from "../../components/Pbutton";

export default function TechnologyWhyWifi() {
  return (
    <div className="container flex flex-col items-center w-full gap-5 p-12 py-12 text-white bg-iblack rounded-3xl">
      <div className="flex flex-col items-center w-full gap-12">
        <div className="flex flex-col items-center justify-between w-full gap-5 py-5 md:flex-row grow">
          <Image
            src="/assets/technology/why-graph.png"
            alt="Wearable Ixana"
            className="flex flex-col basis-[50%] lg:basis-[50%] h-auto "
            width={500}
            height={300}
            priority
          />
          <div className="flex flex-col items-start basis-[50%] lg:basis-[40%] justify-center gap-8">
            <h2 className="text-4xl font-light ">
              A Quantum Leap in Energy Efficiency over Bluetooth and Wi-Fi
            </h2>
            <p className="text-xs font-light max-w-96">
              Discover the game-changing advantage of Wi-R: a remarkable 100x
              increase in energy efficiency compared to traditional technologies
              like Bluetooth and Wi-Fi. This unparalleled efficiency not only
              extends device longevity but also aligns with a sustainable
              future, setting Wi-R apart as a beacon of innovation in the
              connectivity landscape.
            </p>
            <Pbutton text="Try Wi-R" icon={<ToprightArrow />} />
          </div>
        </div>
      </div>
    </div>
  );
}
