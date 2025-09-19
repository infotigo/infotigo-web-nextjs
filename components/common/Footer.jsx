/* eslint-disable @next/next/no-img-element */
import { getFooterSetting } from '@/lib/strapi';
import React from 'react';
import SocialIcon from './SocialIcon';
import Link from 'next/link';

async function Footer({ data }) {
  // console.log("Footer data", data);
  const { siteDescription, companyName, companyPhone, companyEmail, companyAddress } = data;

  const footerCopyright = `Copyright © ${new Date().getFullYear()} ${companyName}. All Rights Reserved.`;

  // gat footer settings
  const { data: footerData } = await getFooterSetting();

  return (
    <footer className="clean-footer crev">
      <div className="container pb-40 pt-40 ontop">
        <div className="row justify-content-between">
          <div className="col-lg-3">
            <div className="logo icon-img-200 md-mb80">
              <img src={footerData?.logo?.url || "/assets/imgs/logo-light.png"} alt="" />
            </div>
            <p className="fz-14 opacity-7 mt-20">
              {siteDescription}
            </p>
          </div>
          <div className="col-lg-3">
            <div className="column md-mb50">
              <h6 className="sub-title mb-30">Contact</h6>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                <div className="p-color fw-400 fz-14">
                  {companyAddress}
                </div>
                <div className='p-color fw-400 fz-14'>
                  <a href={`mailto:${companyEmail}`}>{companyEmail}</a>
                </div>
                <a href="#0" className="underline p-color fw-400 fz-14">
                  <span className="">{companyPhone}</span>
                </a>
              </div>
            </div>
          </div>
          <div className="col-lg-2">
            <div className="column md-mb50">
              <h6 className="sub-title mb-30">Useful Links</h6>
              <ul className="rest fz-14 opacity-7">
                {footerData?.impLinks?.map((link, index) => (
                  <li className="mb-15" key={index}>
                    <a href={link?.url}>{link?.title}</a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="col-lg-3">
            <div className="column subscribe-minimal">
              <h6 className="sub-title mb-30">Follow Us</h6>

              <ul className="rest social-icon d-flex align-items-center">
                {footerData?.socialLinks?.map((link, index) => (
                  <li className="hover-this cursor-pointer" key={index}>
                    <Link href={link?.link} className="hover-anim">
                      <SocialIcon name={link?.platform} />
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
        <div className="pt-30 pb-30 mt-80 bord-thin-top">
          <div className="text-center">
            <p className="fz-14">
              {footerCopyright}
              <span className="underline main-color"> </span>
            </p>
          </div>
        </div>
      </div>
      <div className="circle-blur">
        <img src="/assets/imgs/patterns/blur1.png" alt="" />
      </div>
    </footer>
  );
}

export default Footer;
