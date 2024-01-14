import Image from "next/image";

export default function ProductFeaturesSection() {
  const features = [
    {
      name: "Real-time, wearable AI",
      icon: "realtime.svg",
    },
    {
      name: "All-day battery Smartglass",
      icon: "allday.svg",
    },
    {
      name: "Charging-free wearables",
      icon: "charging.svg",
    },
    {
      name: "Secure data privacy",
      icon: "securedata.svg",
    },
    {
      name: "Eliminates device pairing",
      icon: "devicepairing.svg",
    },
    {
      name: "Exchange data through touch",
      icon: "exchangedata.svg",
    },
  ];
  return (
    <div className="  flex  flex-col w-full min-h-[70vh] grow justify-center items-center">
      <div className="flex flex-col items-center gap-12 px-12 py-20 ">
        <span className="primary-chip">Impact</span>
        <h2 className="text-4xl text-center ">100X lower energy, 10x lower latency, 10x faster than BTLE and WI-Fi</h2>
        <div className="flex flex-col flex-wrap justify-center gap-5 md:flex-row">
          {features.map((item) => (
            <div
              key={item.name}
              className="flex flex-col items-center gap-5 p-10 border border-solid border-ibtnorange rounded-2xl basis-[25%] "
            >
              <Image src={`/assets/home/icons/${item.icon}`} alt={item.name} width={33} height={33} priority />
              <span className="text-center">{item.name}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
