"use client";
import { PFooter } from "@/app/utils/components/PFooter";
import { PNavBar } from "@/app/utils/components/PNavBar";
import type { InferGetStaticPropsType, GetStaticProps, GetStaticPaths } from "next";
import { useParams } from "next/navigation";
import Link from "next/link";
import { Pbutton } from "@/app/utils/components/Pbutton";
import { ToprightArrow } from "@/app/utils/components/Pbutton";
import Image from "next/image";
import Error from "next/error";

export const getStaticPaths = (async () => {
  return {
    paths: [
      {
        params: {
          name: "wi-r-chip",
        },
      },
      {
        params: {
          name: "wi-r-module",
        },
      },
      {
        params: {
          name: "wi-r-evaluation-kit",
        },
      },
    ],
    fallback: true, // false or "blocking"
  };
}) satisfies GetStaticPaths;

const pageProps = [
  {
    name: "wi-r-chip",
    image: "/assets/technology/products/chip.png",
    title: "Wi-R Chip",
    subtitle: "YR22 (4Mbit/s)",
    desc: "The Ixana Wi-R Chip YR22 represents a monumental leap in wireless communication technology. Engineered for precision and efficiency, the YR22 is designed to seamlessly integrate into a range of devices, revolutionizing how we interact with our technology.",
    spec: [
      {
        icon: "location.svg",
        text: "2mm x 2mm die",
      },
      {
        icon: "extra.svg",
        text: "Ships worldwide",
      },
    ],
  },
  {
    name: "wi-r-module",
    image: "/assets/technology/products/board.png",
    title: "Wi-R Module",
    subtitle: "YR22 (4Mbit/s) based",
    desc: "Introducing the Ixana Wi-R Module YR22, a state-of-the-art board designed to redefine the standards of wireless connectivity in a range of applications. This module seamlessly integrates Ixana's groundbreaking Wi-R technology, offering unparalleled performance and versatility.",
    spec: [
      {
        icon: "location.svg",
        text: "1.5cm x 2cm",
      },
      {
        icon: "extra.svg",
        text: "Ships worldwide",
      },
    ],
  },
  {
    name: "wi-r-evaluation-kit",
    image: "/assets/technology/products/headset.png",
    title: "YR21 Evaluation Kit",
    subtitle: "Test YR22 (4Mbit/s) Wi-R",
    desc: "The Ixana YR21 Evaluation Kit is a comprehensive toolkit designed for developers, engineers, and innovators to explore, test, and understand the capabilities of the groundbreaking YR21 Wi-R chip. This kit is your gateway to experimenting with and implementing Ixana's advanced wireless technology in various applications.",
    spec: [
      {
        icon: "location.svg",
        text: "Includes Wi-R USB-C Smartphone Plugin",
      },
      {
        icon: "extra.svg",
        text: "Ships worldwide",
      },
    ],
  },
];

export default function IndividualProductPage() {
  const { name } = useParams();

  const data: any = pageProps.find((item) => item.name === name);

  if (!data) {
    return <Error statusCode={404} />;
  }

  return (
    <div className="flex flex-col items-center min-h-screen grow">
      <PNavBar isProductView />

      <div className="container mx-auto py-12 pt-20">
        <div className="grid grid-cols-1 lg:grid-cols-2">
          <div className="flex flex-col justify-center">
            <div className="flex flex-col gap-10">
              <div className="flex flex-col gap-5">
                <h3 className="text-7xl">{data.title}</h3>
                <h4 className="text-2xl font-light">{data.subtitle}</h4>
                <p className="text-sm max-w-prose leading-6">{data.desc}</p>
              </div>
              <div className="flex flex-col">
                {data.spec.map((spec: any) => (
                  <span key={spec.text} className="text-xs flex items-center gap-3 text=[rgba(0, 0, 0, 0.67)]">
                    <Image src={`/assets/home/icons/${spec.icon}`} alt={spec.text} width={20} height={20} priority />
                    {spec.text}
                  </span>
                ))}
              </div>
              <div>
                <Link href="/contact">
                  <Pbutton text="Order Now" icon={<ToprightArrow />} />
                </Link>
              </div>
            </div>
          </div>
          <div className="flex justify-center items-center">
            <div className="relative w-full min-h-screen">
              <Image src={data.image} fill={true} alt="Product Image" style={{ objectFit: "contain" }} />
            </div>
          </div>
        </div>
      </div>

      <PFooter />
    </div>
  );
}
