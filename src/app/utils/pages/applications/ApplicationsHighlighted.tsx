import { Pbutton, ToprightArrow } from "@/app/utils/components/Pbutton";
import Image from "next/image";
import Link from "next/link";

export default function ApplicationsHighlighted() {
  return (
    <div
      className="flex flex-col items-center justify-center w-full py-12 text-white bg-no-repeat bg-contain bg-ibtnorange"
      style={{
        backgroundImage:
          "url(/assets/home/icons/quote-pattern-left.svg), url(/assets/home/icons/quote-pattern-right.svg) ",
        backgroundPosition: "right top, left bottom",
        backgroundSize: "30%, 20%",
      }}
    >
      <div className="flex flex-col items-center gap-5 lg:w-[700px]  px-12">
        <h2 className="flex text-xl lg:text-5xl font-light max-w-[800px] text-center">
          Explore Our Revolutionary Products
        </h2>

        <p className="flex text-sm font-light max-w-[800px] text-center">
          {`Embrace the next level of connectivity with Ixana's advanced solutions. Our technology sets new standards for efficiency and ease of use. Be at the forefront of the digital revolution.`}
        </p>
        <Link href="/products">
          <Pbutton text="Visit Product Page" icon={<ToprightArrow />} />
        </Link>
      </div>
    </div>
  );
}
