import Image from "next/image";

export default function AboutUsTopHeader() {
  return (
    <div className=" overflow-hidden relative flex flex-col w-full min-h-[100vh] grow bg-iblack  ">
      <div className="absolute top-0 bottom-0 -left-[5%] -right-[5%] flex items-end  gap-5 justify-end">
        <Image
          src="/assets/aboutus/hand.png"
          alt="Head Phones Ixana"
          className="flex max-h-full lg:max-w-[100%] w-full h-auto"
          width={1500}
          height={1500}
          priority
        />
      </div>
      <div className="absolute flex flex-col items-start gap-5 left-10 bottom-10">
        <div className="primary-chip">Company overview</div>
        <h1 className="flex text-5xl text-white max-w-[1000px] ">
          Unveiling Ixana: Pioneering Tomorrow&apos;s Connectivity Landscape
        </h1>
      </div>
    </div>
  );
}
