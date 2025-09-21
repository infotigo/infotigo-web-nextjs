/* eslint-disable @next/next/no-img-element */
'use client';
import { useWhyChooseUs } from '@/hooks/useWhyChooseUs';
import React from 'react';

function WhyChooseUs() {
  function openAccordion(event) {
    document.querySelectorAll('.accordion-info').forEach((element) => {
      element.classList.remove('active');
      element.style.maxHeight = 0;
      element.parentElement.classList.remove('active');
    });
    event.currentTarget.parentElement.classList.add('active');
    event.currentTarget.nextElementSibling.style.maxHeight = '300px';
    event.currentTarget.nextElementSibling.classList.add('active');
  }

  const { whyChooseUs: data, loading } = useWhyChooseUs();

  if (loading) {
    return <div>Loading...</div>;
  }

  console.log("whyChooseUs", data);
  return (
    <section className="intro-accord section-padding sub-bg o-hidden">
      <div className="container ontop">
        <div className="row xlg-marg">
          <div className="col-lg-6">
            <div className="img md-mb50">
              <img src={data?.whyChooseUs?.image?.url} alt="Why Choose Us Image" />
            </div>
          </div>
          <div className="col-lg-6 valign">
            <div>
              <div className="sec-head mb-50">
                <h6 className="sub-title main-color mb-15">{data?.whyChooseUs?.subTitle}</h6>
                <h3>
                  {data?.whyChooseUs?.title}
                </h3>
              </div>
              <div className="accordion bord">
                {data?.whyChooseUs?.list?.map((item, index) => (
                  <div className={`item ${index === 0 ? 'active' : ''} wow fadeInUp`} data-wow-delay={`.${index}s`} key={item.id}>
                    <div onClick={openAccordion} className="title">
                      <h6>{item.title}</h6>
                      <span className="ico ti-plus"></span>
                    </div>
                    <div className="accordion-info" style={{ maxHeight: index === 0 ? '300px' : '0' }}>
                      <p className="">
                        {item.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="circle-blur">
        <img src="/assets/imgs/patterns/blur1.png" alt="" />
      </div>
    </section>
  );
}

export default WhyChooseUs;
