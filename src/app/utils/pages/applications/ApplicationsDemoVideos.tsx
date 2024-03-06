"use client";
import Image from "next/image";
import { useRef } from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import ReactPlayer from "react-player/vimeo";

export default function ApplicationsDemoVideos() {
  const videos = [
    "https://vimeo.com/798066601",
    "https://vimeo.com/786426496",
    "https://vimeo.com/786426197",
    "https://vimeo.com/786424550",
    "https://vimeo.com/785792262",
  ];

  const carousel = useRef<Carousel>(null);

  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 3,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
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
    <div className="container mx-auto px-0 md:px-12">
      <div className="flex flex-col w-full md:py-12 justify-center">
        <div className="flex items-center justify-start w-full ">
          <div className="flex flex-col justify-center items-center md:justify-between w-full md:flex-row">
            <h2 className="flex text-xl font-light md:text-4xl">Ixana demo videos</h2>
            <div className="flex gap-3 pt-6">
              <button
                onClick={(e) => {
                  carousel.current?.previous(1);
                }}
                className="bg-transparent border-none bg-[rgba(230, 230, 230, 1)]"
              >
                <Image src="/assets/arrow-right.svg" alt="Arrow right" width={50} height={50} priority />
              </button>
              <button
                onClick={(e) => {
                  carousel.current?.next(1);
                }}
                className="bg-transparent border-none bg-[rgba(230, 230, 230, 1)]"
              >
                <Image
                  src="/assets/arrow-right.svg"
                  className="flex rotate-180 "
                  alt="Arrow right"
                  width={50}
                  height={50}
                  priority
                />
              </button>
            </div>
          </div>
        </div>
        <Carousel ref={carousel} responsive={responsive} arrows={false}>
          {videos.map((item, index) => (
            <div className="px-5 md:py-5 rounded-md" key={index}>
              <ReactPlayer url={item} controls width="100%" pip={false} />
            </div>
          ))}
        </Carousel>
      </div>
    </div>
  );
}
