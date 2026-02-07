import React from "react";
import BlogContentSection from "../../sections/BlogContent/BlogContentSection";

const BlogPage: React.FC = () => {
  return (
    <>
      <BlogContentSection />
      <section aria-hidden className="h-10 lg:h-24" />
    </>
  );
};

export default BlogPage;
