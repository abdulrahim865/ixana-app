import Image from "next/image";
import { Pbutton, ToprightArrow } from "../../components/Pbutton";

export default function BlogCard() {
  return (
    <div className="flex flex-col gap-5 py-12 ">
      <Image
        src="/assets/blog/blog1.png"
        alt="Wearable Ixana"
        className="flex w-full"
        width={500}
        height={500}
        priority
      />
      <h2 className="text-3xl font-light text-[rgba(26, 26, 26, 1)]">
        Wi-R enables wearables to harness AI capabilities via distributed
        computation
      </h2>
      <div className="flex items-center justify-between gap-3">
        <div className="flex flex-col items-start gap1 md:gap-3 md:items-center md:flex-row">
          <span className="flex text-xs">Nov 1, 2022</span>
          <span className="flex text-xs">Shreyas Sen, Angik Sarkar</span>
        </div>
        <Pbutton text="Read More" icon={<ToprightArrow />} />
      </div>
    </div>
  );
}
