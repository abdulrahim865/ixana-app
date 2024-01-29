import axios from "axios";

const instance = axios.create({
  baseURL: "https://wordpress.ixana.ai/wp-json/wp/v2/",
  timeout: 5000,
});

export async function getAllBlogPosts() {
  console.log("Fetching All Blog Posts");
  const { data } = await instance.get(`posts?categories=3&status=publish`);
  return data;
}

export async function getBlogPostById(id: Number) {
  const { data } = await instance.get(`posts/${id}`);
  console.log({ data });
  return data;
}

export async function getBlogPostBySlug(slug: String) {
  const { data } = await instance.get(`posts?slug=${slug}`);
  return data;
}

export async function getTagsByIds(ids: Array<Number>) {
  const { data } = await instance.get(`tags?${ids.map((n, index) => `include[${index}]=${n}`).join("&")}`);
  const tags = data.map((item: any) => item.name);
  return tags;
}

export async function getMediaUrlById(id: Number) {
  const { data } = await instance.get(`media/${id}`);
  return data.guid.rendered;
}
