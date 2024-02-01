import Image from "next/image";
import { PFooter } from "../utils/components/PFooter";
import { PNavBar } from "../utils/components/PNavBar";
import BlogCard from "../utils/pages/blog/BlogPrimaryCard";
import { Pagination } from "antd";
import { getAllBlogPosts, getAllNews } from "../utils/api/blog";
import NewsCard from "../utils/pages/news/NewsCard";

export default async function Blog({ params }: { params: any }) {
  const posts = await getAllNews();

  return (
    <main className="flex flex-col min-h-screen">
      <PNavBar />
      <div className="bg-iblack pt-14 md:pt-28">
        <div className="container mx-auto">
          <div className="flex w-full py-12">
            <h2 className="text-3xl lg:text-7xl font-light text-white text-left lg:text-center lg:w-full px-6 lg:px-0">
              Ixana News
            </h2>
          </div>
        </div>
      </div>
      <div className="container mx-auto pb-12 px-5 lg:px-0">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {posts.map((post: any, index: number) => {
            return <NewsCard key={index} post={post} />;
          })}
        </div>
      </div>

      <PFooter />
    </main>
  );
}
