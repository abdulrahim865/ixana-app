"use client";
import Image from "next/image";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

export default function HomeFeaturedIn() {
  // TODO: Add Featured in logos and links
  const peoples = [
    {
      image: "/assets/aboutus/support/hack_vc.svg",
      link: "",
    },
  ];

  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 5,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 2,
    },
  };

  const contentStyle: React.CSSProperties = {
    margin: 0,
    height: "160px",
    color: "#fff",
    lineHeight: "160px",
    textAlign: "center",
    background: "#364d79",
  };

  return (
    <div className="flex flex-col w-full md:gap-24 md:py-12 justify-center">
      <div className="flex items-center justify-center w-full ">
        <h2 className="text-xl font-light text-center md:text-4xl">Early supporters we are grateful to</h2>
      </div>
      <Carousel responsive={responsive} arrows={false}>
        {peoples.map((item, index) => (
          <div
            className="flex items-center justify-center border border-[#BFBDBD] p-5 md:py-7 md:px-9 m-5 md:m-7 rounded-2xl"
            key={index}
          >
            <Image src={item.image} alt="Featured In" className=" h-[50px] " width={300} height={300} priority />
          </div>
        ))}
      </Carousel>
    </div>
  );
}
