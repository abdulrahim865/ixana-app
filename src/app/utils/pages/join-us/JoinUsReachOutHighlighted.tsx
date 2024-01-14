import { Pbutton, ToprightArrow } from "@/app/utils/components/Pbutton";
import Image from "next/image";
import Link from "next/link";

export default function JoinUsReachOutHighlighted() {
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
        <h2 className="flex text-xl lg:text-4xl font-light max-w-[800px] text-center">Feel Free to Reach out!</h2>
        <span className="flex text-sm font-light max-w-[800px] text-center">
          Even if the ideal position is not currently available, please feel free to reach out to us. We welcome your
          contact and will ensure to notify you promptly as soon as a suitable position becomes open. Your interest in
          our organization is valued, and we look forward to the possibility of working together in the future. Thank
          you for considering us as part of your career journey.
        </span>
        <Link href="/contact">
          <Pbutton text="Contact us" icon={<ToprightArrow />} />
        </Link>
      </div>
    </div>
  );
}
