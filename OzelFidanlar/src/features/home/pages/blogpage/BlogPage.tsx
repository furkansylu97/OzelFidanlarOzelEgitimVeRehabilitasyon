import BlogContentSection from "../../sections/BlogContent/BlogContentSection";
import { Helmet } from "react-helmet-async";

const BlogPage: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>Blog | Özel Eğitim ve Gelişim Yazıları</title>
        <meta
          name="description"
          content="Özel eğitim, çocuk gelişimi ve terapi süreçleri hakkında uzman yazılarımızı keşfedin. Aileler için rehber niteliğinde güncel ve bilgilendirici blog içerikleri burada."
        />
      </Helmet>

      <BlogContentSection />
      <section aria-hidden className="h-10 lg:h-24" />
    </>
  );
};

export default BlogPage;
