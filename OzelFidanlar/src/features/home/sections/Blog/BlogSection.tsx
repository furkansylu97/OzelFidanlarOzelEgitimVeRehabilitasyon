import { useEffect, useState } from "react";
import { getBlogs } from "../../service/blog/blogService";
import type { Blog } from "../../data/Blog/blog";
import BlogCard from "../../components/Blog/BlogCard";
import { Container } from "../../../../shared/components/container/Container";

const shuffleArray = <T,>(array: T[]): T[] => {
  return [...array].sort(() => Math.random() - 0.5);
};

const BlogSection = () => {
  const [blogs, setBlogs] = useState<Blog[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getBlogs()
      .then((data) => {
        const randomThree = shuffleArray(data).slice(0, 3);
        setBlogs(randomThree);
      })
      .finally(() => setLoading(false));
  }, []);

  if (loading) {
    return (
      <section className="py-24 text-center">
        <p className="text-gray-500">Yazılar yükleniyor...</p>
      </section>
    );
  }

  return (
    <section>
      <div className="flex items-center justify-center">
        <Container>
          <div className="flex flex-col items-center">
            <h2 className="pl-1 inline-block border-l-4 border-amber-300 bg-[#001064]/10  text-3xl font-bold text-gray-900">
              Blog
            </h2>
            <div className="text-center">
              <h3 className="my-5 text-xl font-bold">Son Gelişmeler</h3>
            </div>

            <div className="border-t border-gray-300">
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

export default BlogSection;
