import Image from "next/image";
import dayjs from "dayjs";
import Link from "next/link";
import { getMediaUrlById, getTagsByIds, getUserById } from "../../api/blog";

export default async function BlogCard({ post }: { post: any }) {
  const featured_image = post.featured_media ? await getMediaUrlById(post.featured_media) : "/assets/blog/blog1.png";

  let tags = [];
  if (post.tags.length) {
    tags = await getTagsByIds(post.tags);
  }

  let author;
  if (post.author) {
    author = await getUserById(post.author);
  }

  return (
    <Link className="flex flex-col gap-5 py-12" href={`/blog/${post.slug}`}>
      <div className="relative w-full h-80 bg-gray-50 rounded-2xl">
        <Image
          src={featured_image}
          alt="Wearable Ixana"
          className="flex w-full"
          fill={true}
          style={{ objectFit: "contain", objectPosition: "center" }}
          priority
        />
      </div>
      <h2 className="text-2xl lg:text-3xl font-light text-[rgba(26, 26, 26, 1)]">{post.title.rendered}</h2>
      {tags.length && (
        <div className="flex flex-wrap items-center gap-2">
          {tags.map((item: any) => (
            <h5 className="primary-chip bg-[rgba(241,241,241,1)]" key={item}>
              {item}
            </h5>
          ))}
        </div>
      )}
      <h3 className="text-xs lg:text-sm font-light text-[rgba(26, 26, 26, 1)]">
        <div dangerouslySetInnerHTML={{ __html: post.excerpt.rendered }} />
      </h3>
      <div className="grid grid-cols-2 md:grid-cols-1 text-[#6A6665]">
        <span className="flex text-xs">{dayjs(post.date).format("MMM d, YYYY")}</span>
        {author && <span className="flex text-xs text-right md:text-left">{author.name}</span>}
      </div>
    </Link>
  );
}
