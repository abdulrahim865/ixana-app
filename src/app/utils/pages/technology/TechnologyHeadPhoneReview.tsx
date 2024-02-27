"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Mousewheel, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";

export default function TechnologyHeadPhoneReview() {
  return (
    <Swiper
      spaceBetween={50}
      slidesPerView={1}
      onSlideChange={() => console.log("slide change")}
      onSwiper={(swiper) => console.log(swiper)}
      className="w-full h-[50vh] bg-gray-200"
      direction="vertical"
      mousewheel={{ forceToAxis: true, sensitivity: 1, releaseOnEdges: true }}
      pagination={{
        clickable: true,
      }}
      modules={[Mousewheel, Pagination]}
    >
      <SwiperSlide>Slide 1</SwiperSlide>
      <SwiperSlide>Slide 2</SwiperSlide>
      <SwiperSlide>Slide 3</SwiperSlide>
      <SwiperSlide>Slide 4</SwiperSlide>
    </Swiper>
  );
}

// return (
//   <div className=" overflow-hidden relative flex flex-col w-full min-h-[600px] lg:min-h-[100vh] grow bg-iblack  ">
//     <div className="absolute top-0 bottom-0 -left-[5%] -right-[5%] flex items-end  gap-5 justify-end">
//       <Image
//         src="/assets/technology/headset-preview.png"
//         alt="Head Phones Ixana"
//         className="flex w-auto h-full max-h-full lg:max-w-[100%]"
//         width={500}
//         height={500}
//         priority
//       />
//     </div>
//     <div className="absolute flex flex-col items-start gap-5 text-white left-10 bottom-10">
//       <Image
//         src="/assets/technology/tech-wireless.svg"
//         alt="svg tech wireless"
//         className="flex w-5 h-5"
//         width={22}
//         height={22}
//       />{" "}
//       <h1 className="flex pt-5 text-5xl font-light ">Headphones</h1>
//       <span className=" text-xs font-light max-w-[400px]">
//         Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
//         eiusmod tempor incididunt ut labore et dolore magna aliqua.{" "}
//       </span>
//       <a href="" className="pt-5 text-xs font-light ">
//         Skip This Section
//       </a>
//     </div>
//   </div>
// );
