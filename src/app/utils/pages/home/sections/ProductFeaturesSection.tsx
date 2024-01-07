import Image from "next/image";

export default function ProductFeaturesSection() {
  return (
    <div className="  flex  flex-col w-full min-h-[70vh] grow justify-center items-center">
      <div className="flex flex-col items-center gap-12 px-12 py-5 ">
        <span className="primary-chip">Impact</span>
        <h2 className="text-4xl text-center ">100x efficient, 10x faster than Bluetooth, Wi-Fi</h2>
        <div className="flex flex-col gap-5 md:flex-row">
          <div className="flex flex-col items-center gap-5 p-10 border border-solid border-ibtnorange rounded-2xl ">
            <Image
              src="/assets/home/icons/realtime.svg"
              alt="Booth Button"
              width={22}
              height={22}
              priority
            />
            <span>Real-time, wearable AI</span>
          </div>
          <div className="flex flex-col items-center gap-5 p-10 border border-solid border-ibtnorange rounded-2xl ">
            <Image
              src="/assets/home/icons/allday.svg"
              alt="Booth Button"
              width={22}
              height={22}
              priority
            />
            <span>All-day battery Smartglass</span>
          </div>
          <div className="flex flex-col items-center gap-5 p-10 border border-solid border-ibtnorange rounded-2xl ">
            <Image
              src="/assets/home/icons/charging.svg"
              alt="Booth Button"
              width={22}
              height={22}
              priority
            />
            <span>Charging-free wearables</span>
          </div>
          <div className="flex flex-col items-center gap-5 p-10 border border-solid border-ibtnorange rounded-2xl ">
            <Image
              src="/assets/home/icons/charging.svg"
              alt="Booth Button"
              width={22}
              height={22}
              priority
            />
            <span>Physical data security</span>
          </div>
          <div className="flex flex-col items-center gap-5 p-10 border border-solid border-ibtnorange rounded-2xl ">
            <Image
              src="/assets/home/icons/charging.svg"
              alt="Booth Button"
              width={22}
              height={22}
              priority
            />
            <span>Automatic device pairing</span>
          </div>
          <div className="flex flex-col items-center gap-5 p-10 border border-solid border-ibtnorange rounded-2xl ">
            <Image
              src="/assets/home/icons/charging.svg"
              alt="Booth Button"
              width={22}
              height={22}
              priority
            />
            <span>Exchange data through touch</span>
          </div>
        </div>
      </div>
    </div>
  );
}
