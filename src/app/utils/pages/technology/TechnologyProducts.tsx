import Image from "next/image";
import { Pbutton, ToprightArrow } from "../../components/Pbutton";
import Link from "next/link";

export const TechnologyProducts = () => {
  return (
    <div
      className="relative container flex w-full min-h-[60vh] text-black bg-contain bg-no-repeat py-12 justify-center rounded-t-3xl  px-12 lg:px-0 mb-12"
      style={{
        background:
          "url(/assets/technology/product-bg-1.svg) no-repeat left bottom, url(/assets/technology/product-bg-2.svg) no-repeat top right, linear-gradient(180deg, #E4E5E7 -45.62%, #FFF 100%)",
        backgroundSize: "500px, 500px",
      }}
    >
      <div className="flex flex-col items-center gap-3">
        <h2 className="flex text-4xl text-center max-w-[500px] ">Explore Our Cutting-Edge Product Lineup</h2>
        <span className="text-md text-itextgrey max-w-[500px] text-center">
          {`Ixana's products solve the problems of power, data rate, and link robustness that limit today's wearables`}
        </span>

        {/* <div className="primary-chip bg-[#262727] text-white py-2">Learn more</div> */}

        <div className="flex flex-col gap-3 mt-9 md:flex-row">
          <div className="flex flex-col items-center gap-5">
            <Image src="/assets/technology/products/chip.png" alt="Headset" width={200} height={200} priority />
            <h3 className="text-xl text-center">Wi-R Chip</h3>
            <span className="text-sm ">YR11 (4Mbit/s)</span>
            <div className="flex flex-col">
              <span className="text-xs flex items-center gap-3 text=[rgba(0, 0, 0, 0.67)]">
                <Image src="/assets/home/icons/extra.svg" alt="Ixana icon" width={20} height={20} priority />
                2mm x 2mm die
              </span>
              <span className="text-xs flex items-center gap-3 text=[rgba(0, 0, 0, 0.67)]">
                <Image src="/assets/home/icons/location.svg" alt="Ixana icon" width={20} height={20} priority />
                Ships worldwide
              </span>
            </div>
            <Link href="/contact">
              <Pbutton text="Contact us" icon={<ToprightArrow />} />
            </Link>
          </div>
          <div className="flex flex-col items-center gap-5">
            <Image src="/assets/technology/products/board.png" alt="Headset" width={120} height={150} priority />
            <h3 className="text-xl text-center">Wi-R Module</h3>
            <span className="text-sm ">YR22 (4Mbit/s) based</span>
            <div className="flex flex-col">
              <span className="text-xs flex items-center gap-3 text=[rgba(0, 0, 0, 0.67)]">
                <Image src="/assets/home/icons/extra.svg" alt="Ixana icon" width={20} height={20} priority />
                1.5cm x 2cm
              </span>
              <span className="text-xs flex items-center gap-3 text=[rgba(0, 0, 0, 0.67)]">
                <Image src="/assets/home/icons/location.svg" alt="Ixana icon" width={20} height={20} priority />
                Ships worldwide
              </span>
            </div>
            <Link href="/contact">
              <Pbutton text="Contact us" icon={<ToprightArrow />} />
            </Link>
          </div>
          <div className="flex flex-col items-center gap-5">
            <Image src="/assets/technology/products/headset.png" alt="Headset" width={200} height={200} priority />
            <h3 className="text-xl text-center">YR21 Evaluation Kit</h3>
            <span className="text-sm ">Test YR22 (4Mbit/s) Wi-R</span>
            <div className="flex flex-col">
              <span className="text-xs flex items-center gap-3 text=[rgba(0, 0, 0, 0.67)]">
                <Image src="/assets/home/icons/extra.svg" alt="Ixana icon" width={20} height={20} priority />
                Wi-R USB-C Smartphone Plugin
              </span>
              <span className="text-xs flex items-center gap-3 text=[rgba(0, 0, 0, 0.67)]">
                <Image src="/assets/home/icons/location.svg" alt="Ixana icon" width={20} height={20} priority />
                Ships worldwide
              </span>
            </div>
            <Link href="/contact">
              <Pbutton text="Contact us" icon={<ToprightArrow />} />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
