import axios from "axios";
import type { Blog } from "../../data/Blog/blog";

const API_URL = "http://localhost:1337/api/blogs?populate=cover";

export const getBlogs = async (): Promise<Blog[]> => {
  const res = await axios.get(API_URL);

  return res.data.data.map(
    (item: any): Blog => ({
      id: item.id,
      title: item.title,
      slug: item.slug,
      excerpt: item.excerpt,
      content: item.content,
      date: item.date,
      publishedAt: item.publishedAt,
      coverUrl: item.cover?.formats?.medium?.url
        ? `http://localhost:1337${item.cover.formats.medium.url}`
        : item.cover?.url
        ? `http://localhost:1337${item.cover.url}`
        : undefined,
    })
  );
};
