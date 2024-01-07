import { Pbutton, ToprightArrow } from "@/app/utils/components/Pbutton";
import Image from "next/image";

export default function AboutUsJoinTeam() {
  return (
    <div
      className="flex flex-col items-center justify-center w-full py-16 text-white bg-no-repeat bg-contain bg-ibtnorange"
      style={{
        backgroundImage:
          "url(/assets/home/icons/quote-pattern-left.svg), url(/assets/home/icons/quote-pattern-right.svg) ",
        backgroundPosition: "right top, left bottom",
        backgroundSize: "30%, 20%",
      }}
    >
      <div className="flex flex-col items-center gap-5 max-w-[550px]  px-12">
        <h2 className="flex text-xl font-light text-center lg:text-3xl">
          Embark on the Future with Ixana: Join Our Team of Innovators
        </h2>

        <p className="flex text-xs text-sm font-light text-center">
          Explore exciting opportunities to shape the next frontier of
          technology. At Ixana, we are more than a team; we&apos;re a community
          of visionaries, collaborators, and pioneers. Join us in pushing the
          boundaries of what&apos;s possible and crafting a future where
          connectivity knows no limits. Discover your potential at Ixana.
        </p>
        <Pbutton text="Contact Us" icon={<ToprightArrow />} />
      </div>
    </div>
  );
}
