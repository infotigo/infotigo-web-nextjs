import generateStylesheetObject from "@/common/generateStylesheetsObject";
import Marq2 from "@/components/common/Marq2";
import Blog from "@/components/home-main/Blog";
import Clients from "@/components/common/Clients";
import Team from "@/components/home-modern-studio/Team";
import Testimonials from "@/components/home-modern-studio/Testimonials";
import Intro from "@/components/page-about/Intro";
import Numbers from "@/components/page-about/Numbers";
import Services from "@/components/page-about/Services";

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
      <Intro />
      <Numbers />
      <Services />
      <Team />
      <Testimonials />
      <Clients />
      <Blog />
      <Marq2 />
    </div>
  );
}
