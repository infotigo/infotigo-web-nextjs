/* eslint-disable @next/next/no-img-element */
'use client';
import isInView from '@/common/isInView';
import React, { useEffect } from 'react';

function Intro() {
  function handleShowProgressValues() {
    isInView({
      selector: '.skill-progress .progres',
      isElements: true,
      callback: (element) => {
        element.style.width = element.getAttribute('data-value');
      },
    });
  }
  useEffect(() => {
    window.addEventListener('scroll', handleShowProgressValues);
    return () => window.removeEventListener('scroll', handleShowProgressValues);
  }, []);
  return (
    <section className="intro-skill section-padding pt-0">
      <div className="container pt-80 pb-80">
        <div className="row md-marg">
          <div className="col-lg-6">
            <div className="cont">
              <h6 className="sub-title main-color mb-15">About Us</h6>
              <h2 className="mb-15">Empowering Businesses with Next-Gen Software & IT Solutions</h2>
              <p>
                At Infotigo, we blend creativity, technology, and expertise to deliver impactful digital solutions. From robust web and mobile applications to enterprise-grade IT systems, our team ensures efficiency, security, and innovation at every step. Whether you&apos;re a startup or an enterprise, we build the tools you need to transform your ideas into reality.
              </p>
              {/* <div className="skills-box row mt-80">
                <div className="col-md-6">
                  <div className="skill-item sm-mb30">
                    <h5 className="sub-title mb-15">UI / UX Design 90%</h5>
                    <div className="skill-progress">
                      <div className="progres" data-value="90%"></div>
                    </div>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="skill-item">
                    <h5 className="sub-title mb-15">Development 80%</h5>
                    <div className="skill-progress">
                      <div className="progres" data-value="80%"></div>
                    </div>
                  </div>
                </div>
              </div> */}
            </div>
          </div>
          <div className="col-lg-6">
            <div className="imgs">
              <div className="img1">
                <img src="/assets/imgs/intro/2.jpg" alt="" />
              </div>
              <div className="img2">
                <img src="/assets/imgs/intro/03.jpg" alt="" />
              </div>
              <div className="img3">
                <img src="/assets/imgs/intro/04.jpg" alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Intro;
