import generateStylesheetObject from "@/common/generateStylesheetsObject";
import Footer from "@/components/common/Footer";
import Marq2 from "@/components/common/Marq2";
import Team from "@/components/home-modern-studio/Team";
import Numbers from "@/components/page-services/Numbers";
import Header from "@/components/page-team/Header";
import Intro from "@/components/page-team/Intro";

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
      <Numbers />
      <Team />
      <Marq2 />
    </div>
  );
}
