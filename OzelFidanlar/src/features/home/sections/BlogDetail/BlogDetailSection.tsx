import React from "react";
import heroDefault from "../../../../assets/images/home/hero/slide-9.jpg";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getBlogs } from "../../service/blog/blogService";
import type { Blog } from "../../data/Blog/blog";
import { Container } from "../../../../shared/components/container/Container";
import Dateicon from "../../../../assets/icons/date.svg";

const BlogDetailSection = () => {
  const { slug } = useParams<{ slug: string }>();

  const [blog, setBlog] = useState<Blog | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchBlog = async () => {
      try {
        const blogs = await getBlogs();

        const foundBlog = blogs.find((item) => item.slug === slug);

        if (!foundBlog) {
          setError("Blog yazısı bulunamadı.");
          return;
        }

        setBlog(foundBlog);
      } catch (err) {
        console.error("Blog detayı alınamadı:", err);
        setError("Blog detayı yüklenirken bir hata oluştu.");
      } finally {
        setLoading(false);
      }
    };

    fetchBlog();
  }, [slug]);

  if (loading) {
    return (
      <section className="py-24 text-center">
        <p className="text-gray-500">Blog yükleniyor...</p>
      </section>
    );
  }

  if (error) {
    return (
      <section className="py-24 text-center">
        <p className="text-red-500 font-medium">{error}</p>
      </section>
    );
  }

  if (!blog) return null;

  return (
    <section className="w-full">
      {blog.coverUrl && (
        <div className="mb-12">
          <img
            src={heroDefault}
            alt={blog.title}
            className="h-72 w-full object-cover"
          />
        </div>
      )}

      <div className="flex items-center justify-center">
        <Container>
          <article className="mx-auto max-w-3xl">
            <h1 className="inline-block border-l-4 border-amber-300 bg-[#001064]/10 pl-1 text-3xl font-bold tracking-tight text-gray-900">
              {blog.title}
            </h1>

            <div className="flex items-center gap-3 my-6">
              <img src={Dateicon} alt="date" className="h-10 w-10" />

              <p className="text-lg text-gray-500 leading-none">
                {new Date(blog.date).toLocaleDateString("tr-TR", {
                  day: "numeric",
                  month: "long",
                  year: "numeric",
                })}
              </p>
            </div>

            {blog.excerpt && (
              <p className="mb-8 text-lg text-gray-600">{blog.excerpt}</p>
            )}

            {blog.coverUrl && (
              <div className="my-10 overflow-hidden rounded-xl">
                <img
                  src={blog.coverUrl}
                  alt={blog.title}
                  className="w-full h-84 object-cover"
                />
              </div>
            )}

            <div className="mt-10 space-y-6 text-lg leading-relaxed text-gray-700">
              {blog.content
                .split("\n")
                .filter(Boolean)
                .map((line, index) => {
                  if (line.startsWith("## ")) {
                    return (
                      <h4
                        key={index}
                        className="mt-10 text-2xl font-bold text-gray-900"
                      >
                        {line.replace("## ", "")}
                      </h4>
                    );
                  }

                  if (line.startsWith("### ")) {
                    return (
                      <h5
                        key={index}
                        className="mt-8 text-xl font-semibold text-gray-900"
                      >
                        {line.replace("### ", "")}
                      </h5>
                    );
                  }

                  return <p key={index}>{line}</p>;
                })}
            </div>
          </article>
        </Container>
      </div>
    </section>
  );
};

export default BlogDetailSection;
