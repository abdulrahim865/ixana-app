import Image from "next/image";
import { PFooter } from "../utils/components/PFooter";
import { PNavBar } from "../utils/components/PNavBar";
import BlogCard from "../utils/pages/blog/BlogPrimaryCard";
import { Pagination } from "antd";
import { getAllBlogPosts } from "../utils/api/blog";

export default async function Blog({ params }: { params: any }) {
  const posts = await getAllBlogPosts();

  return (
    <main className="flex flex-col min-h-screen">
      <PNavBar isProductView />
      <div className="container mx-auto pt-28 pb-12 px-5 lg:px-0">
        <div className="flex">
          <h2 className="flex items-start text-3xl lg:text-7xl font-light w-full">
            Explore the Ixana Blog for <br />
            Cutting-Edge Perspectives
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {posts.map((post: any, index: number) => {
            return <BlogCard key={index} post={post} />;
          })}
        </div>
      </div>

      <PFooter />
    </main>
  );
}
