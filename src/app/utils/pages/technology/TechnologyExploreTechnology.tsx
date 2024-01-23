import { Pbutton, ToprightArrow } from "@/app/utils/components/Pbutton";
import Link from "next/link";

export default function TechnologyExploreTechnology() {
  return (
    <div
      className="flex flex-col items-center justify-center w-full py-24 text-white bg-no-repeat bg-contain bg-ibtnorange"
      style={{
        backgroundImage:
          "url(/assets/home/icons/quote-pattern-left.svg), url(/assets/home/icons/quote-pattern-right.svg) ",
        backgroundPosition: "right top, left bottom",
        backgroundSize: "30%, 20%",
      }}
    >
      <div className="flex flex-col items-center gap-5 lg:w-[800px]  px-12">
        <h2 className="flex text-xl lg:text-4xl font-light max-w-[800px] text-center">
          {`Explore Ixana's Transformative Technology`}
        </h2>
        <span className="flex text-sm font-light max-w-[800px] lg:w-[600px] text-center">
          {`Unlock the future of connectivity with Ixana. Our cutting-edge solutions redefine efficiency and precision in
          communication. From directed signals to touch interactions, our technology is the key to seamless
          connectivity.`}
        </span>
        <Link href="/products">
          <Pbutton text="Visit Product Page" icon={<ToprightArrow />} />
        </Link>
      </div>
    </div>
  );
}
