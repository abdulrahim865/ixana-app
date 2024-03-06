import Image from "next/image";
import "react-multi-carousel/lib/styles.css";

export default function ApplicationsWhyUse() {
  const applications = [
    {
      title: "Distributed Wearable AI",
      description: "High-speed, low power Wi-R enables distributed AI with a wearable hub device.",
    },
    {
      title: "All-day AR Headset",
      description: "Offloading video processing with Distributed AI enables all-day AR.",
    },
    {
      title: "5G Relayed Wearables",
      description: "High-speed distributed computation enables wearables to be empowered with 5G in the hub devices.",
    },
    {
      title: "Pairing-free Electronics",
      description:
        "Start using devices reliably as soon as you touch or wear them. No need to go through painful pairing each time.",
    },
    {
      title: "Charging-free Trackers",
      description:
        "Low power Wi-R enables ultra-light motion trackers for the Metaverse, that you never have to take off.",
    },
    {
      title: "Communicate With Touch",
      description:
        "New experiences leveraging data transfer with touch: share music with touch, protect valuables with tags.",
    },
  ];

  return (
    <div className="flex flex-col w-full min-h-[70vh] ">
      <div className="  flex  flex-col w-full lg:w-[calc(100%-6rem)] grow bg-contain bg-no-repeat lg:ml-24 bg-left-top py-24 gap-14 relative overflow-hidden justify-center">
        <div className="flex flex-col justify-center md:flex-row">
          <h2 className="flex text-4xl">Wi-R Applications</h2>
        </div>
        <div className="flex flex-col flex-wrap justify-center gap-5 md:flex-row">
          {applications.map((application) => (
            <div
              key={application.title}
              className="flex flex-col gap-3 p-3 rounded-xl basis-[calc(40%-3rem)] items-start"
            >
              <span className="flex items-center gap-1.5 text-md">
                <Image src="/assets/products/bullet-icon.svg" alt="Search Button" width={24} height={24} priority />
                <span className="text-2xl">{application.title}</span>
              </span>
              <span className="text-xs font-light md:max-w-[300px]">{application.description}</span>
              {/* <button className="primary-chip bg-[#262727] text-white">Read more</button> */}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
