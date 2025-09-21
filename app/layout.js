import Script from "next/script";
import "./globals.css";
import LoadingScreen from "@/components/common/loader";
import Cursor from "@/components/common/cusor";
import ProgressScroll from "@/components/common/ProgressScroll";
import Lines from "@/components/common/Lines";
import Footer from "@/components/common/Footer";
import { getGeneralSetting, getHeaderSetting } from "@/lib/strapi";
import Navbar from "@/components/common/Navbar";

export default async function RootLayout({ children }) {
  // get general setting form strapi
  const { data } = await getGeneralSetting();
  // get header setting form strapi
  const { data: headerData } = await getHeaderSetting();
  const favIconUrl = data?.favIcon?.url;

  return (
    <html lang="en">
      <head>
        {favIconUrl && (
          <link rel="icon" href={favIconUrl} type="image/x-icon" />
        )}
      </head>
      <body>
        <LoadingScreen />
        <Cursor />
        <ProgressScroll />
        <Lines />
        <Navbar data={headerData} />
        <div id="smooth-wrapper">
          <div id="smooth-content">
            <main className="main-bg o-hidden">{children}</main>
            <Footer data={data} />
          </div>
        </div>

        <Script
          src="/assets/js/ScrollTrigger.min.js"
          strategy="beforeInteractive"
        />
        <Script
          src="/assets/js/ScrollSmoother.min.js"
          strategy="beforeInteractive"
        />

        <Script
          strategy="beforeInteractive"
          src="/assets/js/plugins.js"
        ></Script>
        <Script
          strategy="beforeInteractive"
          src="/assets/js/TweenMax.min.js"
        ></Script>
        <Script
          strategy="beforeInteractive"
          src="/assets/js/charming.min.js"
        ></Script>
        <Script
          strategy="beforeInteractive"
          src="/assets/js/countdown.js"
        ></Script>

        <Script
          strategy="beforeInteractive"
          src="/assets/js/gsap.min.js"
        ></Script>
        <Script
          strategy="beforeInteractive"
          src="/assets/js/splitting.min.js"
        ></Script>
        <Script
          strategy="beforeInteractive"
          src="/assets/js/isotope.pkgd.min.js"
        ></Script>
        <Script
          strategy="beforeInteractive"
          src="/assets/js/imgReveal/imagesloaded.pkgd.min.js"
        ></Script>

        {/* <Script src="/assets/js/smoother-script.js" strategy="lazyOnload" /> */}

        <Script src="/assets/js/scripts.js"></Script>
      </body>
    </html>
  );
}
