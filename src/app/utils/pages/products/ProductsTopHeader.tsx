import { Pbutton, ToprightArrow } from "@/app/utils/components/Pbutton";
import Image from "next/image";
import Link from "next/link";

export default function ProductsTopHeader() {
  return (
    <div
      className=" overflow-hidden relative flex flex-col w-full min-h-[90vh] grow bg-right  "
      style={{
        backgroundImage: 'url("/assets/products/header.png")',
        backgroundSize: "cover",
      }}
    >
      {/* <div
        className="flex bg-no-repeat bg-contain grow md:basis-1/2 w-[50%]"
        style={{
          backgroundImage: "url(/assets/products/pattern.svg)",
          backgroundPositionY: "100%",
        }}
      ></div> */}
      <div className="absolute flex flex-col items-start gap-3 left-5 md:left-20 bottom-20 w-[80%] md:w-[50%]">
        <h1 className="flex text-6xl ">How to use Wi-R</h1>
        <span className="font-light ">{`Build unique smart devices with Ixana's Wi-R Body Internet Platform`}</span>
        <Link href="/contact">
          <Pbutton text="Order now" icon={<ToprightArrow />} />
        </Link>
      </div>
    </div>
  );
}
