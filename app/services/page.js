import generateStylesheetObject from "@/common/generateStylesheetsObject";
import Marq2 from "@/components/common/Marq2";
import Clients from "@/components/common/Clients";
import Intro2 from "@/components/home-digital-agency/Intro2";
import Testimonials from "@/components/home-digital-agency/Testimonials";
import Blog from "@/components/home-digital-agency/Blog";
import Header from "@/components/page-services/Header";
import Numbers from "@/components/page-services/Numbers";
import Services from "@/components/home-creative-agency/Services";

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

export default function Page() {
  return (
    <div>
      <Header />
      <Services />
      <Intro2 />
      <Numbers />
      <Testimonials />
      <Clients />
      <Blog />
      <Marq2 />
    </div>
  );
}
