import generateStylesheetObject from "@/common/generateStylesheetsObject";
import Header from "@/components/project-details/Header";
import Challenge from "@/components/project-details/Challenge";
import Works from "@/components/project-details/Works";
import Solution from "@/components/project-details/Solution";
import Wroks2 from "@/components/project-details/Wroks2";
import Next from "@/components/project-details/Next";

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
      {/* <Header />
      <Challenge />
      <Works />
      <Solution />
      <Wroks2 />
      <Next /> */}
    </div>
  );
}
