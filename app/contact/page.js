import generateStylesheetObject from "@/common/generateStylesheetsObject";
import Contact from "@/components/page-contact/Contact";
import Header from "@/components/page-contact/Header";
import Map from "@/components/page-contact/Map";
import { getFooterSetting, getGeneralSetting } from "@/lib/strapi";

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

export default async function Page() {
  const { data } = await getGeneralSetting();
  const { data: footerData } = await getFooterSetting();
  const socialLinks = footerData?.socialLinks;

  const contactData = {
    phone: data?.companyPhone,
    email: data?.companyEmail,
    address: data?.companyAddress,
    socialLinks,
  };
  return (
    <div>
      <Header />
      <Contact data={contactData} />
      {/* <Map /> */}
    </div>
  );
}
