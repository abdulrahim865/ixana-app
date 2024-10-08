import Image from "next/image";
import { Pbutton, ToprightArrow } from "../../components/Pbutton";

export default function TechnologyImpact() {
  return (
    <div className="flex min-h-[80vh] w-full flex-col  items-center container justify-center py-12">
      <div className="flex flex-col items-center w-full gap-3">
        <span className="primary-chip">Impact</span>

        <h2 className="text-4xl font-light text-center">
          Breakthrough technology for high- <br /> speed human-computer interaction
        </h2>
        <p className="text-xs font-light text-center">
          Our patented Wi-R technology delivers unique benefits over existing wireless <br /> solutions.
        </p>
        <Image
          src="/assets/technology/technology-chip.png"
          alt="Wearable Ixana"
          className="flex flex-col "
          width={500}
          height={500}
          priority
        />
        <div className="flex flex-col items-center justify-between gap-3 lg:flex-row">
          <span className="flex items-center gap-1.5 text-xs text-itextgrey ">
            <Image src="/assets/technology/check.svg" alt="Checkbox" width={20} height={20} priority />
            Touch Selectivity leading to touch detection
          </span>
          <span className="flex items-center gap-1.5 text-xs text-itextgrey ">
            <Image src="/assets/technology/check.svg" alt="Checkbox" width={20} height={20} priority />
            High-speed, Low-power
          </span>
          <span className="flex items-center gap-1.5 text-xs text-itextgrey ">
            <Image src="/assets/technology/check.svg" alt="Checkbox" width={20} height={20} priority />
            Touch Selectivity leading to touch detection
          </span>
        </div>
      </div>
    </div>
  );
}
