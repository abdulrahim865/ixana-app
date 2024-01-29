import Image from "next/image";
import { PFooter } from "../utils/components/PFooter";
import { PNavBar } from "../utils/components/PNavBar";
import BlogCard from "../utils/pages/blog/BlogPrimaryCard";
import { Pagination } from "antd";
import { getAllBlogPosts } from "../utils/api/blog";

export default function Blog({ params }: { params: any }) {
  const { posts } = params;

  console.log({ posts });

  return (
    <main className="flex flex-col items-center min-h-screen grow">
      <PNavBar />
      <div className="flex flex-col items-center gap-24 py-5 md:py-24">
        <div className="flex flex-col items-start gap-24 px-6 pt-24 md:flex-row md:px-24 ">
          <div className="container flex flex-col gap-3 grow">
            <h2 className="flex items-start text-4xl font-light">Explore Our Cutting-Edge Product Lineup</h2>
            <select className="flex font-light w-max">
              <option value="date">Date</option>
              <option value="relevance">Relevance</option>
              <option value="updated">Updated</option>
            </select>
            <div className="flex flex-col items-center ">
              {Array(3)
                .fill(1)
                .map((item, index) => (
                  <BlogCard key={index} />
                ))}
            </div>
          </div>
          <div className="flex flex-col items-start gap-5 md:basis-[30%]">
            <div className="relative flex">
              <input
                type="text"
                className="p-1.5 px-4 rounded-full basis-2/3 border-[#BFBDBD] border font-light text-xs"
                placeholder="Your email address"
              />
              <button className="absolute top-0 bottom-0 right-0 flex items-center justify-center w-8 h-8 bg-black rounded-full">
                <Image src="/assets/blog/search.svg" alt="Search Button" width={12} height={12} priority />
              </button>
            </div>
            <div className="flex flex-col gap-12">
              <div className="flex flex-col gap-7">
                <div className="flex flex-col gap-3">
                  <h2 className="text-2xl ">Categories</h2>
                  <div className="flex flex-col gap-5">
                    <a className="flex items-center gap-3 font-light" href="/">
                      <div className="flex w-1 h-1 bg-black rounded "></div>
                      Augmented Reality
                    </a>
                    <a className="font-light " href="/">
                      Augmented Reality
                    </a>
                    <a className="font-light " href="/">
                      Augmented Reality
                    </a>
                    <a className="font-light " href="/">
                      Augmented Reality
                    </a>
                    <a className="font-light " href="/">
                      Augmented Reality
                    </a>
                    <a className="font-light " href="/">
                      Augmented Reality
                    </a>
                  </div>
                </div>
                <div className="flex flex-col gap-5">
                  <h2 className="text-2xl ">Tags</h2>
                  <div className="flex flex-wrap gap-5">
                    <a className="font-bold flex bg-[#F1F1F1] px-2 p-1 text-xs rounded-full" href="/">
                      Augmented Reality
                    </a>
                    <a className="font-bold flex bg-[#F1F1F1] px-2 p-1 text-xs rounded-full " href="/">
                      Augmented Reality
                    </a>
                    <a className="font-bold flex bg-[#F1F1F1] px-2 p-1 text-xs rounded-full " href="/">
                      Augmented Reality
                    </a>
                    <a className="font-bold flex bg-[#F1F1F1] px-2 p-1 text-xs rounded-full " href="/">
                      Augmented Reality
                    </a>
                    <a className="font-bold flex bg-[#F1F1F1] px-2 p-1 text-xs rounded-full " href="/">
                      Augmented Reality
                    </a>
                    <a className="font-bold flex bg-[#F1F1F1] px-2 p-1 text-xs rounded-full " href="/">
                      Augmented Reality
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Pagination defaultCurrent={1} total={50} />
      </div>

      <PFooter />
    </main>
  );
}
