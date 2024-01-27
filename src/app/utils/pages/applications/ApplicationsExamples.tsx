import { Pbutton, ToprightArrow } from "@/app/utils/components/Pbutton";
import Image from "next/image";
import Link from "next/link";

export default function ApplicationsExamples() {
  const examples = [
    {
      image: "/assets/applications/application-examples/1.png",
      title: "Smartphones",
      desc: "Revolutionize your mobile experience with seamless, high-speed connectivity.",
    },
    {
      image: "/assets/applications/application-examples/2.png",
      title: "AR/VR",
      desc: "Immerse in unparalleled AR/VR experiences with lag-free, ultra-responsive technology.",
    },
    {
      image: "/assets/applications/application-examples/3.png",
      title: "Wearables",
      desc: "Enhance your lifestyle with wearables that communicate effortlessly at your touch.",
    },
    {
      image: "/assets/applications/application-examples/4.png",
      title: "Automotive",
      desc: "Elevate automated functionalities in vehicles with cutting-edge, wireless precision.",
    },
    {
      image: "/assets/applications/application-examples/5.png",
      title: "Defence",
      desc: "Empower defense systems with ultra-secure, reliable wireless capabilities.",
    },
  ];

  return (
    <div className="py-12 px-5">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {examples.map((item, index) => (
          <div key={index} className="flex flex-col justify-center items-center min-w-60 max-w-60 min-h-60 py-5">
            <div className="flex relative w-full min-h-60">
              <Image src={item.image} alt="Example Image" fill={true} />
            </div>
            <div className="w-full py-3">
              <h3 className="text-2xl">{item.title}</h3>
            </div>
            <div className="w-full">
              <p className="text-sm">{item.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
