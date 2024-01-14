import { Pbutton, ToprightArrow } from "@/app/utils/components/Pbutton";
import Image from "next/image";
import Link from "next/link";

export default function HomeBlogSection() {
  return (
    <div className="flex min-h-[70vh] w-full flex-col items-center container justify-center my-24 px-12 lg:px-0">
      <div className="flex flex-col items-center gap-12">
        <span className="primary-chip">Resources to Get Started</span>
        <div className="flex flex-col items-center gap-3">
          <h2 className="flex text-4xl font-light max-w-[800px] text-center">
            Insights from ours Blogs, Papers and News
          </h2>
          <span className="text-sm text-center text-iblack">
            {`Dive in to learn more about Ixana's technology and progress`}
          </span>
        </div>
        <div className="grid grid-cols-3 items-center gap-5">
          <div className="flex flex-col items-center gap-3">
            <div className="h-72 w-72 flex relative">
              <Image
                src="/assets/home/blog1.png"
                alt="Blog Ixana"
                className=""
                fill={true}
                priority
                style={{
                  objectFit: "contain",
                }}
              />
            </div>
            <h3 className="p-3 font-light text-md">
              Wi-R enables wearables to harness AI capabilities via distributed computation
            </h3>
            <Link href="/blog/123">
              <Pbutton text="Read more" icon={<ToprightArrow />} />
            </Link>
          </div>
          <div className="flex flex-col items-center gap-3">
            <div className="h-72 w-72 flex relative">
              <Image
                src="/assets/home/blog2.png"
                alt="Blog Ixana"
                className=""
                fill={true}
                priority
                style={{
                  objectFit: "contain",
                }}
              />
            </div>
            <h3 className="p-3 font-light text-md">All-day Augmented Reality, now possible courtesy of Wi-R</h3>
            <Link href="/blog/123">
              <Pbutton text="Read more" icon={<ToprightArrow />} />
            </Link>
          </div>
          <div className="flex flex-col items-center gap-3">
            <div className="h-72 w-72 flex relative">
              <Image
                src="/assets/home/blog3.png"
                alt="Blog Ixana"
                className=""
                fill={true}
                priority
                style={{
                  objectFit: "contain",
                }}
              />
            </div>
            <h3 className="p-3 font-light text-md">Wi-R technology White Paper</h3>
            <Link href="/blog/123">
              <Pbutton text="Read more" icon={<ToprightArrow />} />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
