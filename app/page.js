import generateStylesheetObject from "@/common/generateStylesheetsObject";
import Clients from "@/components/common/Clients";
import Marq2 from "@/components/common/Marq2";
import Blog from "@/components/home-creative-agency/Blog";
import Header from "@/components/home-creative-agency/Header";
import Intro from "@/components/home-creative-agency/Intro";
import Intro2 from "@/components/home-creative-agency/Intro2";
import Numbers from "@/components/home-creative-agency/Numbers";
import Portfolio from "@/components/home-creative-agency/Portfolio";
import Services from "@/components/home-creative-agency/Services";
import Team from "@/components/home-creative-agency/Team";
import Testimonials from "@/components/home-creative-agency/Testimonials";

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

export default async function Home() {
  return (
    <div>
      <Header />
      <Services />
      <Intro />
      <Numbers />
      <Portfolio />
      <Intro2 />
      <Team />
      <Testimonials />
      <Clients />
      <Blog />
      <Marq2 />
    </div>
  );
}
