import generateStylesheetObject from "@/common/generateStylesheetsObject";
import Marq2 from "@/components/common/Marq2";
import Portfolio from "@/components/p-creative-carousel/Portfolio";
import Header from "@/components/p-grid/Header";
// import Portfolio from "@/components/p-gallery/Portfolio";
// import Portfolio from "@/components/p-creative/Portfolio";
// import Portfolio from "@/components/p-grid/Portfolio";

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
      <Portfolio />
      <Marq2 />
    </div>
  );
}
