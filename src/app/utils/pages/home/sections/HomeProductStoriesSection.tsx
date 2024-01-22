"use client";
import Image from "next/image";
import { useRef } from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

export default function HomeProductStoriesSection() {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 2,
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
  const carousel = useRef<Carousel>(null);

  const testimonials = [
    {
      text: "Having seen the demo of an early prototype, I see the intriguing potential for the technology to play a key role in the future evolution of wearables.",
      picture: "/assets/home/testimonials/rory-moore-evonexus-headshot.jpeg",
      name: "Rory Moore",
      bio: "Co-Founder, Evonexus; Co-Founder, Peregrine Semiconductor",
    },
    {
      text: "The unique combination of a high-speed wire-free personal network faster and lower power than Bluetooth or Wi-Fi, and the all-day wearable AR headset is nothing short of mind-blowing. It has the potential to fundamentally change the future of personal computing.",
      picture: "/assets/home/testimonials/salil-deshpande.jpg",
      name: "Salil Deshpande",
      bio: "General Partner, Uncorrelated Ventures",
    },
    {
      text: "Ixana has created a platform technology with the potential to change how we connect to machines and to each other.",
      picture: "/assets/home/testimonials/tchiweb2.png",
      name: "Tom Chi",
      bio: "Ex-Tech Lead, Google Glass; Managing Partner, At One Ventures",
    },
    {
      text: "I was fascinated by the experience of Ixana's headset prototype. When they launch the ultra-light headset that's on the roadmap, it'll be a game-changer.",
      picture: "/assets/home/testimonials/ed_roman.jpg",
      name: "Ed Roman",
      bio: "Managing Director, Hack VC",
    },
  ];

  return (
    <div className="flex flex-col w-full py-12 ">
      <div className="  flex  flex-col w-full lg:w-[calc(100%-6rem)] grow bg-contain bg-no-repeat lg:ml-24 bg-left-top py-12 gap-4 relative overflow-hidden px-12 ">
        <div className="primary-chip bg-[#6A6665] text-white w-fit">Testimonials</div>

        <div className="flex flex-col justify-between w-full md:flex-row">
          <h2 className="flex text-4xl ">{`Stories from the Ixana Experience`}</h2>
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

        <Carousel ref={carousel} responsive={responsive} arrows={false}>
          {testimonials.map((item, index) => (
            <div key={index} className="flex flex-col gap-3 md:max-w-[480px]">
              <p className="text-xs text-[rgba(0,0,0,0.7)] ">“ {item.text} “</p>
              <span className="text-sm ">{item.name}</span>
              <span className="text-md ">{item.bio}</span>
            </div>
          ))}
        </Carousel>
      </div>
    </div>
  );
}
