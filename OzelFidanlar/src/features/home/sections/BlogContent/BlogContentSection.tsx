import { useEffect, useState } from "react";
import heroDefault from "../../../../assets/images/home/hero/slide-9.jpg";
import { getBlogs } from "../../service/blog/blogService";
import type { Blog } from "../../data/Blog/blog";
import BlogCard from "../../components/Blog/BlogCard";
import { Container } from "../../../../shared/components/container/Container";

const BlogContentSection = () => {
  const [blogs, setBlogs] = useState<Blog[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const data = await getBlogs();

        const sortedBlogs = [...data].sort(
          (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime(),
        );

        setBlogs(sortedBlogs);
      } catch (err) {
        console.error("Bloglar alınamadı:", err);
        setError("Blog yazıları yüklenirken bir hata oluştu.");
      } finally {
        setLoading(false);
      }
    };

    fetchBlogs();
  }, []);

  if (error) {
    return (
      <section className="py-24 text-center">
        <p className="font-medium text-red-500">{error}</p>
      </section>
    );
  }

  if (loading) {
    return (
      <section className="py-24 text-center">
        <p className="text-gray-500">Yazılar yükleniyor...</p>
      </section>
    );
  }

  return (
    <section className="w-full">
      <div className="mb-10">
        <img
          src={heroDefault}
          alt="Blog hero"
          className="h-72 w-full object-cover"
        />
      </div>

      <div className="flex items-center justify-center">
        <Container>
          <div className="flex flex-col items-center">
            <h1 className="inline-block border-l-4 border-amber-300 bg-[#001064]/10 pl-1 text-3xl font-bold tracking-tight text-gray-900">
              Blog
            </h1>

            <h3 className="my-5 text-center text-xl font-bold">Tüm Yazılar</h3>

            <div className="w-full border-t border-gray-300">
              {blogs.length === 0 && (
                <p className="py-10 text-center text-gray-500">
                  Henüz yayınlanmış blog bulunmuyor.
                </p>
              )}

              {blogs.map((blog) => (
                <BlogCard key={blog.id} blog={blog} />
              ))}
            </div>
          </div>
        </Container>
      </div>
    </section>
  );
};

export default BlogContentSection;
