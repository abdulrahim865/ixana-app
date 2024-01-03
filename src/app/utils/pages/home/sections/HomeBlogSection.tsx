import { Pbutton, ToprightArrow } from "@/app/utils/components/Pbutton";
import Image from "next/image";

export default function HomeBlogSection() {
  return (
    <div className="flex min-h-[80vh] w-full flex-col  items-center container justify-center my-24  px-12 lg:px-0">
      <div className="flex flex-col items-center gap-12">
        <span className="primary-chip">Our mission</span>
        <div className="flex flex-col items-center">
          <h2 className="flex text-4xl font-light max-w-[800px] text-center">
            Insights from ours Blogs, Papers and News
          </h2>
          <span className="text-sm text-iblack">
            Dive in to learn more about Ixana’s technology and progress
          </span>
        </div>
        <div className="flex flex-col items-center gap-5 lg:flex-row">
          <div className="flex flex-col items-center gap-3">
            <Image
              src="/assets/home/blog1.png"
              alt="Blog Ixana"
              className="flex w-full max-h-full max-w-[100%]"
              width={100}
              height={100}
              priority
            />
            <h3 className="p-3 font-light text-md">
              Wi-R enables wereables to harness AI capabilities via distributed
              computation
            </h3>
            <Pbutton text="Read more" icon={<ToprightArrow />} />
          </div>
          <div className="flex flex-col items-center gap-3">
            <Image
              src="/assets/home/blog2.png"
              alt="Blog Ixana"
              className="flex w-full max-h-full max-w-[100%]"
              width={100}
              height={100}
              priority
            />
            <h3 className="p-3 font-light text-md">
              Wi-R enables wereables to harness AI capabilities via distributed
              computation
            </h3>
            <Pbutton text="Read more" icon={<ToprightArrow />} />
          </div>
          <div className="flex flex-col items-center gap-3">
            <Image
              src="/assets/home/blog3.png"
              alt="Blog Ixana"
              className="flex w-full max-h-full max-w-[100%]"
              width={100}
              height={100}
              priority
            />
            <h3 className="p-3 font-light text-md">
              Wi-R enables wereables to harness AI capabilities via distributed
              computation
            </h3>
            <Pbutton text="Read more" icon={<ToprightArrow />} />
          </div>
        </div>
      </div>
    </div>
  );
}
