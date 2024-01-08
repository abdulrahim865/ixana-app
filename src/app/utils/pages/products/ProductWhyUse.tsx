import Image from "next/image";
import "react-multi-carousel/lib/styles.css";

export default function ProductWhyUse() {
  return (
    <div className="flex flex-col w-full min-h-[70vh] ">
      <div className="  flex  flex-col w-full lg:w-[calc(100%-6rem)] grow bg-contain bg-no-repeat lg:ml-24 bg-left-top py-12 gap-14 relative overflow-hidden px-12 justify-center">
        <div className=" flex w-[calc(50%-3rem)] absolute right-[4%] top-0 bottom-0 justify-end">
          <Image
            src="/assets/home/stories-line-left.svg"
            alt=""
            className="flex object-contain w-auto transform rotate-180 "
            width={500}
            height={500}
            priority
          />
        </div>
        <div className=" w-full h-[0.5px] flex bg-black absolute right-[10%] top-0"></div>
        <div className="flex flex-col justify-center md:flex-row">
          <h2 className="flex text-4xl ">Why use Wi-R? </h2>
        </div>
        <div className="flex flex-col flex-wrap items-center justify-center gap-5 md:flex-row">
          <div className="flex flex-col p-3 rounded-xl basis-[calc(40%-3rem)]">
            <span className="flex items-center gap-3 text-md">
              <Image
                src="/assets/products/bullet-icon.svg"
                alt="Search Button"
                width={24}
                height={24}
                priority
              />
              <span>100x Lower energy</span>
            </span>
            <span className="text-xs font-light max-w-[300px]">
              Wi-R is 100x lower energy compared to Bluetooth/Wi-Fi leading to
              long battery-life
            </span>
          </div>
          <div className="flex flex-col p-3 rounded-xl basis-[calc(40%-3rem)]">
            <span className="flex items-center gap-3 text-md">
              <Image
                src="/assets/products/bullet-icon.svg"
                alt="Search Button"
                width={24}
                height={24}
                priority
              />
              <span>100x Lower energy</span>
            </span>
            <span className="text-xs font-light max-w-[300px]">
              Wi-R is 100x lower energy compared to Bluetooth/Wi-Fi leading to
              long battery-life
            </span>
          </div>
          <div className="flex flex-col p-3 rounded-xl basis-[calc(40%-3rem)]">
            <span className="flex items-center gap-3 text-md">
              <Image
                src="/assets/products/bullet-icon.svg"
                alt="Search Button"
                width={24}
                height={24}
                priority
              />
              <span>100x Lower energy</span>
            </span>
            <span className="text-xs font-light max-w-[300px]">
              Wi-R is 100x lower energy compared to Bluetooth/Wi-Fi leading to
              long battery-life
            </span>
          </div>

          <div className="flex flex-col p-3 rounded-xl basis-[calc(40%-3rem)]">
            <span className="flex items-center gap-3 text-md">
              <Image
                src="/assets/products/bullet-icon.svg"
                alt="Search Button"
                width={24}
                height={24}
                priority
              />
              <span>100x Lower energy</span>
            </span>
            <span className="text-xs font-light max-w-[300px]">
              Wi-R is 100x lower energy compared to Bluetooth/Wi-Fi leading to
              long battery-life
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
