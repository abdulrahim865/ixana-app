import Image from "next/image";

export default function HomeOurMission() {
  return (
    <div className="flex min-h-[50vh] w-full flex-col  items-center container justify-center">
      <div className="flex flex-col items-center gap-12">
        <span className="primary-chip bg-[#6A6665] text-white w-fit">Our mission</span>
        <h2 className="flex text-4xl font-light max-w-[800px] text-center">
          Create an electronic analog of human nervous system to 10x battery life of personal electronics today and
          unlock real-time brain-AI communication tomorrow
        </h2>
        <div className="flex flex-col items-center gap-3">
          <div className="flex items-center gap-1.5 ">
            <span className="font-normal text-md">
              100x Lower energy <span className="text-sm font-light ">compared to</span>
            </span>
            <Image
              src="/assets/home/icons/bluetooth.svg"
              alt="Bluetooth"
              className="flex w-4 h-4 "
              width={14}
              height={14}
              priority
            />
            <Image
              src="/assets/home/icons/wifi.svg"
              alt="Wifi"
              className="flex w-4 h-4 "
              width={14}
              height={14}
              priority
            />
          </div>
          <span className="font-normal text-md">
            10x faster <span className="text-sm font-light ">compared to</span>
          </span>
        </div>
      </div>
    </div>
  );
}
