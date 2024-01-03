import Image from "next/image";
import { Pbutton, ToprightArrow } from "../../components/Pbutton";

export const TechnologyProducts = () => {
  return (
    <div
      className="relative container flex w-full min-h-[60vh] text-black bg-contain bg-no-repeat py-12 justify-center rounded-t-3xl  px-12 lg:px-0"
      style={{
        background:
          "url(/assets/technology/product-bg-1.svg) no-repeat left bottom, url(/assets/technology/product-bg-2.svg) no-repeat top right, linear-gradient(180deg, #E4E5E7 -45.62%, #FFF 100%)",
        backgroundSize: "500px, 500px",
      }}
    >
      <div className="flex flex-col items-center gap-3">
        <h2 className="flex text-4xl text-center max-w-[500px] ">
          Explore Our Cutting-Edge Product Lineup
        </h2>
        <span className="text-md text-itextgrey max-w-[500px] text-center">
          Ixana’s products solve the problems of power, data rate, and link
          robustness that limit today’s wearables
        </span>

        <div className="primary-chip bg-[#262727] text-white py-2">
          Learn more
        </div>

        <div className="flex flex-col gap-5 md:flex-row">
          <div className="flex flex-col items-center gap-9">
            <Image
              src="/assets/technology/products/chip.png"
              alt="Headset"
              width={200}
              height={200}
              priority
            />
            <h3 className="text-xl text-center">Wi-R Evaluation Board</h3>
            <span className="text-sm ">YR11 (1Mbit/s) based</span>
            <div className="flex flex-col">
              <span className="text-xs">Wi-R USB-C Smartphone Plugin</span>
              <span className="text-xs">Wi-R USB-C Smartphone Plugin</span>
              <span className="text-xs">Wi-R USB-C Smartphone Plugin</span>
            </div>
            <Pbutton text="Contact us" icon={<ToprightArrow />} />
          </div>
          <div className="flex flex-col items-center gap-9">
            <Image
              src="/assets/technology/products/chip.png"
              alt="Headset"
              width={200}
              height={200}
              priority
            />
            <h3 className="text-xl text-center">Wi-R Evaluation Board</h3>
            <span className="text-sm ">YR11 (1Mbit/s) based</span>
            <div className="flex flex-col">
              <span className="text-xs">Wi-R USB-C Smartphone Plugin</span>
              <span className="text-xs">Wi-R USB-C Smartphone Plugin</span>
              <span className="text-xs">Wi-R USB-C Smartphone Plugin</span>
            </div>
            <Pbutton text="Contact us" icon={<ToprightArrow />} />
          </div>
          <div className="flex flex-col items-center gap-9">
            <Image
              src="/assets/technology/products/chip.png"
              alt="Headset"
              width={200}
              height={200}
              priority
            />
            <h3 className="text-xl text-center">Wi-R Evaluation Board</h3>
            <span className="text-sm ">YR11 (1Mbit/s) based</span>
            <div className="flex flex-col">
              <span className="text-xs">Wi-R USB-C Smartphone Plugin</span>
              <span className="text-xs">Wi-R USB-C Smartphone Plugin</span>
              <span className="text-xs">Wi-R USB-C Smartphone Plugin</span>
            </div>
            <Pbutton text="Contact us" icon={<ToprightArrow />} />
          </div>
        </div>
      </div>
    </div>
  );
};
