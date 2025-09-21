import generateStylesheetObject from "@/common/generateStylesheetsObject";
import Marq2 from "@/components/common/Marq2";
import Header from "@/components/page-services-details/Header";
import Intro from "@/components/page-services-details/Intro";
import Feat from "@/components/page-services-details/Feat";
import Intro2 from "@/components/home-digital-agency/Intro2";

export const metadata = {
  title: "webfolio",
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

export default function Home() {
  return (
    <div>
      <Header />
      <Intro />
      <Feat />
      <Intro2 />
      <Marq2 />
    </div>
  );
}
