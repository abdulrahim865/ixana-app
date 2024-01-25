import { Pbutton, ToprightArrow } from "@/app/utils/components/Pbutton";
import Image from "next/image";
import Link from "next/link";

export default function ProductSpecSection() {
  const specs = [
    {
      tag: "Product",
      content:
        "Our 4Mbit/s silicon chip is faster than Bluetooth, yet 100x lower power, lower latency and more reliable. Integrate it inside wearables, smartphones and other devices similar to how you’d integrate a wireless chip.",
      name: "Ixana Silicon Chip for Human-computer Network",
      icon: "/assets/home/icons/icon-product.svg",
      image: "/assets/home/ixana-chip.png",
      link: "/",
    },
    /* {
      tag: "Why Wi-R",
      content: `Experience the next frontier in connectivity with Ixana's Wi-R technology. A touch is all it takes to seamlessly stream audio and data, creating a world where interaction becomes instant and intuitive. Elevate your tech experience with Ixana."`,
      name: "Stream audio and data with touch",
      icon: "/assets/home/icons/icon-audio.svg",
      image: "/assets/home/ixana-headset.png",
      link: "/",
    },
    {
      tag: "Why Wi-R",
      content: `Our innovative solutions allow users to test and experience a seamless blend of various communication modes. From touch interactions to voice commands, Ixana's commitment to redefining communication knows no bounds. Step into a new era of connectivity and test the possibilities with Ixana's multi-modal communication technology.`,
      name: "Test multi-modal communication",
      icon: "/assets/home/icons/icon-chip.svg",
      image: "/assets/home/ixana-parts.png",
      link: "/",
    }, */
  ];
  return (
    <>
      {specs.map((spec, index) => (
        <div key={index} className="container flex flex-col w-full px-6">
          <div className="flex  flex-col-reverse md:flex-row  w-full min-h-[70vh] grow py-5 justify-between items-center gap-5 md:gap-0 ">
            <div className="flex flex-col items-start basis-[50%] lg:basis-[40%] justify-center gap-3">
              <span className="primary-chip text-white bg-[#6A6665]">{spec.tag}</span>
              <Image src={spec.icon} alt="Product Ixana" width={20} height={20} priority />
              <h2 className="text-4xl lg:w-[400px]">{spec.name}</h2>
              <p className="text-xs font-light lg:w-[400px]">{spec.content}</p>
              <Link href={spec.link}>
                <Pbutton
                  text="Learn More"
                  wrapperClass="bg-transparent text-black p-0.5 pl-3"
                  icon={<ToprightArrow />}
                />
              </Link>
            </div>
            <Image
              src={spec.image}
              alt="Chip Ixana"
              className="flex flex-col basis-[50%] lg:basis-[40%] h-auto lg:w-[400px]"
              width={500}
              height={300}
              priority
            />
          </div>
        </div>
      ))}
    </>
  );
}
