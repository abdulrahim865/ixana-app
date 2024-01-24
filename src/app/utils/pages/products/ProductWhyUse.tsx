import Image from "next/image";
import "react-multi-carousel/lib/styles.css";
import Chip from "@/app/utils/components/Chip";

export default function ProductWhyUse() {
  const whys = [
    {
      image: "/assets/products/why-icons/1.png",
      title: "100x Lower energy",
      desc: "Wi-R is 100x lower energy compared to Bluetooth/Wi-Fi leading to long battery-life",
    },
    {
      image: "/assets/products/why-icons/2.png",
      title: "10x lower latency",
      desc: `Similar to any wired communication, Wi-R has <1ms latency.`,
    },
    {
      image: "/assets/products/why-icons/3.png",
      title: "10x faster vs Bluetooth",
      desc: `Product Wi-R chips operate at 5Mbit/s. 20 Mbit/s chips tested in lab.`,
    },
    {
      image: "/assets/products/why-icons/4.png",
      title: "Inbuilt physical security",
      desc: `Signal is only confined in a bubble around you. Someone next to you doesn't even have access to the signal`,
    },
  ];

  return (
    <div className="container w-full min-h-[70vh] relative px-0 md:px-12 mx-auto">
      <div className="w-full bg-left-top py-12 justify-center bg-[#FF6320] md:rounded-3xl text-white">
        <Chip title="Technology" bgColor="white" textColor="black" />
        <div className="flex flex-col justify-center">
          <h2 className="text-4xl text-center">Why use Wi-R?</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 pt-8">
          {whys.map((why, index) => (
            <div key={index} className="flex justify-center">
              <div className="flex flex-col p-3 rounded-xl">
                <span className="flex items-center gap-3 text-md">
                  <Image src={why.image} alt="Search Button" width={24} height={24} priority />
                  <span>{why.title}</span>
                </span>
                <span className="text-xs font-light md:max-w-[300px] pl-[36px] pt-2">{why.desc}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
