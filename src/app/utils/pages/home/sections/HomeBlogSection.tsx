import { Pbutton, ToprightArrow } from "@/app/utils/components/Pbutton";
import Image from "next/image";
import Link from "next/link";

export default function HomeBlogSection() {
  const posts = [
    {
      image: "https://ixana-blog.s3.us-east-1.amazonaws.com/2024/01/body-wearable-headset-3.png",
      title: "Wi-R Technology White Paper",
      link: "/blog/wi-r-technology-white-paper",
    },
    {
      image: "https://ixana-blog.s3.us-east-1.amazonaws.com/2024/02/AR_headset_v1.png",
      title: "All-day Augmented Reality, now possible courtesy of Wi-R",
      link: "/blog/all-day-augmented-reality-now-possible-courtesy-of-wi-r",
    },
    {
      image: "https://ixana-blog.s3.us-east-1.amazonaws.com/2024/01/CES2024_InnovationAwardHonoree.png",
      title: "Ixana's Wi-R Chip Wins Coveted CES®2024 Innovation Award",
      link: "/blog/ixanas-wi-r-chip-wins-coveted-ces2024-innovation-award",
    },
  ];

  return (
    <div className="container flex flex-col items-center justify-center w-full px-12 my-24 lg:px-0">
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
        <div className="grid items-center grid-cols-1 gap-5 lg:grid-cols-3">
          {posts.map((post, index) => {
            return (
              <div key={index} className="flex flex-col items-center gap-3">
                <div className="relative flex h-72 w-72">
                  <Image
                    src={post.image}
                    alt="Blog Ixana"
                    className=""
                    fill={true}
                    priority
                    style={{
                      objectFit: "contain",
                    }}
                  />
                </div>
                <h3 className="p-3 font-light text-md">{post.title}</h3>
                <Link href={post.link}>
                  <Pbutton text="Read more" icon={<ToprightArrow />} />
                </Link>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
