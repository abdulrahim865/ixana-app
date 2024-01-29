import BlogTopHeader from "@/app/utils/pages/blog/BlogTopHeader";
import Image from "next/image";
import { PFooter } from "../../utils/components/PFooter";
import { PNavBar } from "../../utils/components/PNavBar";
import { Pbutton, ToprightArrow } from "@/app/utils/components/Pbutton";
import { getAllBlogPosts, getBlogPostBySlug, getMediaUrlById, getTagsByIds } from "@/app/utils/api/blog";
import dayjs from "dayjs";

export async function generateStaticParams() {
  const posts = await getAllBlogPosts();
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

  return (
    <main className="flex flex-col items-center min-h-screen grow">
      <PNavBar isProductView />
      {post.featured_media && <BlogTopHeader imageUrl={await getMediaUrlById(post.featured_media)} />}
      <div className="flex flex-col w-full px-6 md:px-0">
        <div className="flex flex-col gap-24 py-5 md:py-24">
          <div className="container mx-auto flex flex-col gap-3 grow max-w-[700px]">
            <div className="flex flex-wrap items-center gap-3">
              <h5 className="text-white primary-chip">{dayjs(post.date).format("MMM d, YYYY")}</h5>
              <h5 className="primary-chip bg-[rgba(241,241,241,1)]">Shreyas Sen, Angik Sarkar</h5>
              {/* <h5 className="primary-chip bg-[rgba(241,241,241,1)]">23 comments</h5> */}
            </div>

            <div className="flex">
              <h2 className="flex items-start pt-12 text-4xl font-light md:text-6xl">{post.title.rendered}</h2>
            </div>

            <div className="">
              <div dangerouslySetInnerHTML={{ __html: post.content.rendered }} className="blog-content-wrapper" />
            </div>

            {tags.length && (
              <div className="flex flex-wrap items-center gap-3 mt-12">
                {tags.map((item: any) => (
                  <h5 className="primary-chip bg-[rgba(241,241,241,1)]" key={item}>
                    {item}
                  </h5>
                ))}
              </div>
            )}

            <div className="flex flex-col gap-12">
              <div className="flex items-center w-full gap-3 grow">
                <Image
                  src="/assets/blog/profile.png"
                  className="flex w-16 h-16 rounded-full "
                  alt="Wearable Ixana"
                  width={100}
                  height={100}
                  priority
                />
                <div className="flex grow">
                  <div className="flex flex-col gap-3 max-w-[300px] ">
                    <h2 className="text-2xl ">Shreyas Sen</h2>
                    <span className="text-xs font-light ">
                      Elmore Associate Professor of ECE & BME at Purdue, Founder & CTO of Ixana, MIT TR35, TEDx, GT
                      40U40
                    </span>
                  </div>
                </div>
                <a className="text-sm " href="#">
                  Instagram
                </a>
              </div>
              <div className="flex w-full h-[1px] bg-black  grow"></div>
              <div className="flex flex-col items-start w-full gap-3">
                <h2 className="text-4xl font-light ">Leave a reply</h2>
                <span className="text-xs font-light ">
                  Your email address will not be published. Required fields are marked *
                </span>
                <div className="flex flex-col items-start w-full gap-3 pt-5">
                  <div className="flex w-full gap-5 grow">
                    <div className="flex flex-col gap-1 grow lg:basis-1/2">
                      <span className="pt-5 text-sm">Your email address</span>

                      <input
                        type="text"
                        className="p-1.5 px-4 rounded-full border-[#BFBDBD] border font-light text-xs"
                        placeholder="Your email address"
                      />
                    </div>
                    {/* <div className="flex flex-col gap-1 grow lg:basis-1/2">
                      <span className="pt-5 text-sm">Your email address</span>

                      <input
                        type="text"
                        className="p-1.5 px-4 rounded-full border-[#BFBDBD] border font-light text-xs"
                        placeholder="Your email address"
                      />
                    </div> */}
                  </div>
                  <div className="flex flex-col gap-1 w-full">
                    <span className="pt-5 text-sm">Your name</span>

                    <input
                      type="text"
                      className="p-1.5 px-4 rounded-full border-[#BFBDBD] border font-light text-xs"
                      placeholder="Your name"
                    />
                  </div>
                  <div className="flex flex-col w-full gap-1">
                    <span className="pt-5 text-sm">Your comment</span>

                    <textarea
                      className="p-1.5 px-4 rounded-2xl border-[#BFBDBD] border font-light text-xs"
                      placeholder="Your comment"
                      rows={10}
                    />
                  </div>
                </div>

                <button className="px-2 ml-auto text-xs Pbutton">Post comment</button>
              </div>
              <div className="flex w-full h-[1px] bg-black  grow"></div>
              <div className="flex flex-col items-start gap-12">
                <div className="flex flex-col gap-3">
                  <div className="flex items-center gap-3">
                    <h5 className="text-xs font-bold ">Jenny Wiliams</h5>
                    <span className="text-xs font-light ">3h</span>
                  </div>
                  <span className="text-xs ">neuralink.com</span>
                  <p className="text-xs font-light ">
                    We are happy to announce that we’ve received approval from the reviewing independent institutional
                    review board and our first hospital site to begin recruitment for our first-in-human clinical trial.
                    The PRIME Study (short for Precise Robotically Implanted Brain-Computer Interface) – a
                    groundbreaking investigational medical device trial for our fully-implantable, wireless
                    brain-computer interface (BCI) – aims to evaluate the safety of our implant (N1) and surgical robot
                    (R1) and assess the initial functionality of our BCI for enabling people with paralysis to control
                    external devices with their thoughts.
                  </p>
                </div>
                <div className="flex flex-col gap-3">
                  <div className="flex items-center gap-3">
                    <h5 className="text-xs font-bold ">Jenny Wiliams</h5>
                    <span className="text-xs font-light ">3h</span>
                  </div>
                  <span className="text-xs ">neuralink.com</span>
                  <p className="text-xs font-light ">
                    We are happy to announce that we’ve received approval from the reviewing independent institutional
                    review board and our first hospital site to begin recruitment for our first-in-human clinical trial.
                    The PRIME Study (short for Precise Robotically Implanted Brain-Computer Interface) – a
                    groundbreaking investigational medical device trial for our fully-implantable, wireless
                    brain-computer interface (BCI) – aims to evaluate the safety of our implant (N1) and surgical robot
                    (R1) and assess the initial functionality of our BCI for enabling people with paralysis to control
                    external devices with their thoughts.
                  </p>
                </div>
                <Pbutton
                  text="Read More"
                  wrapperClass=" bg-white text-black"
                  icon={
                    <div className="flex transform rotate-[135deg] ">
                      <ToprightArrow />
                    </div>
                  }
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <PFooter />
    </main>
  );
}
