import generateStylesheetObject from "@/common/generateStylesheetsObject";
import Header from "@/components/blog-details/Header";
import Blog from "@/components/blog-details/Blog";
import { getArticle } from "@/lib/strapi";

export const metadata = {
  title: "Infotigo",
  icons: {
    icon: "/assets/imgs/favicon.ico",
    shortcut: "/assets/imgs/favicon.ico",
    other: generateStylesheetObject([
      "/assets/css/plugins.css",
      "/assets/css/style.css",
      "https://fonts.googleapis.com/css?family=Poppins:100,200,300,400,500,600,700,800,900&display=swap",
      "https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@200;300;400;500;600;700&display=swap",
    ]),
  },
};

export default async function BlogDetailsPage({ searchParams }) {
  const slug = searchParams?.slug;
  let article = null;

  if (slug) {
    article = await getArticle(slug);
  }

  return (
    <div>
      <Header article={article} />
      <Blog article={article} />
    </div>
  );
}
