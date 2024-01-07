import { Pbutton, ToprightArrow } from "@/app/utils/components/Pbutton";
import Image from "next/image";

export default function HomeTopMainView() {
  return (
    <div
      className=" overflow-hidden relative flex flex-col w-full min-h-[600px] md:min-h-[100vh] grow mt-14 lg:mt-0  "
      style={{
        backgroundImage:
          "linear-gradient(180deg, #D4D3D2 0%, rgba(255, 255, 255, 0.49) 56.97%, rgba(212, 211, 210, 0.38) 104.41%)",
      }}
    >
      <div className="absolute top-0 bottom-0 left-0 right-0 flex flex-col-reverse items-start gap-5 md:items-center md:flex-row ">
        <Image
          src="/assets/home/headphonesremoved.png"
          alt="Human-Computer Network"
          className="flex basis-1/2 scale-x-[-1] md:scale-x-[initial]"
          width={500}
          height={300}
          priority
        />

        <div className="relative flex flex-col-reverse items-center justify-center h-full md:h-auto md:items-start basis-1/2 md:flex-col">
          <Image
            src="/assets/home/ixana-drawing.svg"
            className="absolute -bottom-32 md:bottom-[initial] left-0 md:top-0 md:-left-28 -z-10"
            alt="Play Button"
            width={500}
            height={300}
            priority
          />
          <h1 className="flex flex-col gap-3 px-5 pt-40 text-5xl md:text-7xl">
            <span className="text-black">Body-internet</span>
            <span className="flex flex-col items-start gap-3 text-black md:items-center lg:flex-row md:gap-0">
              <span>Platform</span>
              <Pbutton
                wrapperClass="md:ml-5 flex"
                text="Demo"
                icon={<ToprightArrow size={32} />}
                size="lg"
              />
            </span>
          </h1>
        </div>
      </div>
    </div>
  );
}
