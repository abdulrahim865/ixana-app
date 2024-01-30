import BlogTopHeader from "@/app/utils/pages/blog/BlogTopHeader";
import Image from "next/image";
import { PFooter } from "../../utils/components/PFooter";
import { PNavBar } from "../../utils/components/PNavBar";
import { Pbutton, ToprightArrow } from "@/app/utils/components/Pbutton";
import {
  getAllBlogPostSlugs,
  getBlogPostBySlug,
  getMediaUrlById,
  getTagsByIds,
  getUserById,
} from "@/app/utils/api/blog";
import dayjs from "dayjs";
import BlogComments from "@/app/utils/pages/blog/BlogComments";

export async function generateStaticParams() {
  const posts = await getAllBlogPostSlugs();
  return posts.map((post: any) => {
    return { slug: post.slug };
  });
}

export default async function BlogDetail({ params }: { params: any }) {
  const { slug } = params;

  const posts = await getBlogPostBySlug(slug);
  const post = posts[0];

  let tags = [];
  if (post.tags.length) {
    tags = await getTagsByIds(post.tags);
  }

  let author;
  if (post.author) {
    author = await getUserById(post.author);
  }

  return (
    <main className="flex flex-col items-center min-h-screen grow">
      <PNavBar isProductView />
      {post.featured_media && <BlogTopHeader imageUrl={await getMediaUrlById(post.featured_media)} />}
      <div className="flex flex-col w-full px-6 md:px-0">
        <div className="flex flex-col gap-24 py-5 md:py-24">
          <div className="container mx-auto flex flex-col gap-3 grow max-w-[700px]">
            <div className="flex flex-wrap items-center gap-3">
              <h5 className="text-white primary-chip">{dayjs(post.date).format("MMM d, YYYY")}</h5>
              {author && <h5 className="primary-chip bg-[rgba(241,241,241,1)]">{author.name}</h5>}
              {/* <h5 className="primary-chip bg-[rgba(241,241,241,1)]">23 comments</h5> */}
            </div>

            <div className="flex">
              <h2 className="flex items-start pt-12 text-4xl font-light md:text-6xl">{post.title.rendered}</h2>
            </div>

            <div className="">
              <div dangerouslySetInnerHTML={{ __html: post.content.rendered }} className="blog-content-wrapper" />
            </div>

            {tags.length && (
              <div className="flex flex-wrap items-center gap-3 mt-8 mb-12">
                {tags.map((item: any) => (
                  <h5 className="primary-chip bg-[rgba(241,241,241,1)]" key={item}>
                    {item}
                  </h5>
                ))}
              </div>
            )}

            {author && (
              <div className="flex flex-col gap-12">
                <div className="flex items-center w-full gap-3 grow">
                  <Image
                    src={author.image}
                    className="flex w-16 h-16 rounded-full "
                    alt="Wearable Ixana"
                    width={100}
                    height={100}
                    priority
                  />
                  <div className="flex grow">
                    <div className="flex flex-col gap-3 max-w-[300px] ">
                      <h2 className="text-2xl ">{author.name}</h2>
                      <span className="text-xs font-light ">{author.description}</span>
                    </div>
                  </div>
                  {author.link && (
                    <a className="text-sm " href={author.link}>
                      Link
                    </a>
                  )}
                </div>
              </div>
            )}

            <div className="py-12">
              <BlogComments slug={slug} title={post.title.rendered} />
            </div>
          </div>
        </div>
      </div>

      <PFooter />
    </main>
  );
}
