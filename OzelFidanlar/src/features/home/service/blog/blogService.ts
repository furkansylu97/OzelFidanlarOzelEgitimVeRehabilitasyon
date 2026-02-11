import axios from "axios";
import type { Blog } from "../../data/Blog/blog";

const API_URL = `${import.meta.env.VITE_STRAPI_URL}/api/blogs?populate=cover`;

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
        ? `${import.meta.env.VITE_STRAPI_URL}${item.cover.formats.medium.url}`
        : item.cover?.url
        ? `${import.meta.env.VITE_STRAPI_URL}${item.cover.url}`
        : undefined,
    })
  );
};
