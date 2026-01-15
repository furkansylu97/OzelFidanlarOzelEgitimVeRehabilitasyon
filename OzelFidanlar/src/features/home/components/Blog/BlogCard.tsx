import type { Blog } from "../../data/Blog/blog";
import Dateicon from "../../../../assets/icons/date.svg";

interface Props {
  blog: Blog;
}

const BlogCard = ({ blog }: Props) => {
  const date = new Date(blog.date);
  const day = date.getDate().toString().padStart(2, "0");
  const month = date.toLocaleString("tr-Tr", { month: "short" });
  const year = date.getFullYear();

  return (
    <article className="border-b last:border-b-0">
      <a href={`/blog/${blog.slug}`} className="group block py-6">
        <div className="flex gap-10 items-start">
          <div className="w-[40%] shrink-0">
            <div className="relative overflow-hidden rounded-lg">
              {blog.coverUrl && (
                <img
                  src={blog.coverUrl}
                  alt={blog.title}
                  loading="lazy"
                  className="h-68 w-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
              )}
              <div className="absolute inset-0 flex items-center justify-center bg-black/40 opacity-0 transition group-hover:opacity-100">
                <span className="text-white font-semibold">Devamını Oku</span>
              </div>
            </div>
          </div>

          <div className="w-[10%] shrink-0 flex flex-col items-center text-center">
            <img src={Dateicon} alt="date" className="h-16 w-16" />
            <span className="text-2xl font-bold text-gray-900">{day}</span>
            <span className="text-sm text-gray-500">{month}</span>
            <span className="text-xs text-gray-400">{year}</span>
          </div>

          <div className="w-[50%] shrink-0 px-24 border-l border-gray-300">
            <h3 className="text-2xl font-bold mb-3 text-slate-900 group-hover:text-amber-300 transition leading-snug">
              {blog.title}
            </h3>

            <p className="mt-3 text-base font-medium text-slate-600 leading-relaxed">
              {blog.excerpt}
            </p>
            <div className="my-6 h-px w-full bg-slate-200"></div>
            <p className="text-base font-normal text-slate-700 leading-relaxed space-y-5 line-clamp-1">
              {blog.content}
            </p>
            <span className="mt-6 inline-flex items-center text-sm font-medium text-amber-400">
              Devamını Oku →
            </span>
          </div>
        </div>
      </a>
    </article>
  );
};

export default BlogCard;
