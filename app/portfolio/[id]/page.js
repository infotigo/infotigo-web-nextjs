import generateStylesheetObject from "@/common/generateStylesheetsObject";
import Header from "@/components/project-details/Header";
import Challenge from "@/components/project-details/Challenge";
import Works from "@/components/project-details/Works";
import { getPortfolio } from "@/lib/strapi";

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

// Generate static params for all portfolio items
export async function generateStaticParams() {
  const { data } = await getPortfolio();
  return data.map((item) => ({
    id: String(item.id),
  }));
}

export default async function PortfolioDetail({ params }) {
  // Fetch the specific portfolio item
  const { data } = await getPortfolio();
  const portfolio = data.find((item) => String(item.id) === params.id);
  console.log("portfolio", portfolio);
  return (
    <div>
      <Header data={portfolio} />
      <Challenge data={portfolio} />
      <Works data={portfolio} />
      {/* <Solution />
      <Wroks2 />
      <Next /> */}
    </div>
  );
}
