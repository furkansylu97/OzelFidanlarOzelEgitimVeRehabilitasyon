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
        <div className="flex flex-col lg:flex-row gap-6 lg:gap-10 items-start">
          <div className="w-full lg:w-[40%] shrink-0">
            <div className="relative overflow-hidden rounded-lg">
              {blog.coverUrl && (
                <img
                  src={blog.coverUrl}
                  alt={blog.title}
                  loading="lazy"
                  className="h-40 lg:h-68 w-full object-cover transition-transform duration-300 motion-safe:group-hover:scale-105"
                />
              )}
              <div className="absolute inset-0 flex items-center justify-center bg-black/40 opacity-0 transition motion-safe:group-hover:opacity-100">
                <span className="text-white font-semibold">Devamını Oku</span>
              </div>
            </div>
          </div>

          <div className="flex flex-col lg:flex-row w-full lg:w-[80%] gap-6">
            <div className="w-[10%] shrink-0 flex lg:flex-col items-center lg:text-center gap-3 lg:gap-1">
              <img
                src={Dateicon}
                alt="date"
                className="h-10 lg:h-16 w-10 lg:w-16"
              />
              <div className="hidden lg:flex flex-row lg:flex-col items-center lg:items-center text-center gap-1 lg:gap-0 text-gray-700 font-medium text-sm lg:text-base">
                <span>{day}</span>
                <span>{month}</span>
                <span>{year}</span>
              </div>

              <div className="lg:hidden flex text-gray-700 font-medium text-sm text-center">
                {day} <span className="mx-1">|</span> {month}{" "}
                <span className="mx-1">|</span> {year}
              </div>
            </div>

            <div className="flex-1 lg:px-10 lg:border-l border-gray-300">
              <h3 className="text-xl lg:text-2xl font-bold mb-2 lg:mb-3 text-slate-900 motion-safe:group-hover:text-amber-300 transition leading-snug">
                {blog.title}
              </h3>

              <div className="my-4 text-sm lg:text-base font-medium text-slate-600 leading-relaxed">
                {blog.excerpt}
              </div>

              <div className="hidden lg:block text-sm lg:text-base font-normal text-slate-700 leading-relaxed space-y-2">
                <p className="line-clamp-2">
                  {blog.content
                    .split("\n")
                    .filter(Boolean)
                    .map((line, index) => {
                      if (line.startsWith("## ")) {
                        return (
                          <h4 key={index} className="font-medium text-gray-900">
                            {line.replace("## ", "")}
                          </h4>
                        );
                      }
                      if (line.startsWith("### ")) {
                        return (
                          <h5 key={index} className="text-gray-900">
                            {line.replace("### ", "")}
                          </h5>
                        );
                      }
                      return <span key={index}>{line}</span>;
                    })}
                </p>
              </div>
              <span className="mt-4 lg:mt-6 inline-flex items-center text-sm font-medium text-amber-400">
                Devamını Oku →
              </span>
            </div>
          </div>
        </div>
      </a>
    </article>
  );
};

export default BlogCard;
