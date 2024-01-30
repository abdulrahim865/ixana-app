"use client";
import { DiscussionEmbed } from "disqus-react";

export default function BlogComments({ slug, title }: { slug: string; title: string }) {
  return (
    <div>
      <DiscussionEmbed
        shortname="ixana"
        config={{
          url: `https://ixana.ai/blog/${slug}`,
          identifier: slug,
          title: title,
          language: "en_US",
        }}
      />
    </div>
  );
}
