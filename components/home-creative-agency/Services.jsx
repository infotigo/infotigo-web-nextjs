"use client";

import { useServices } from '@/hooks/useServices';
import Image from 'next/image';
import Link from 'next/link';

function Services() {
  const { services, loading } = useServices();
  if (loading) return <div>Loading...</div>;

  console.log("services", services);

  return (
    <section className="services-crev section-padding">
      <div className="container">
        <div className="sec-head mb-80">
          <div className="mb-30">
            <h2 className="fw-600 fz-70 text-u d-rotate wow">
              <span className="rotate-text">
                Featured <span className="fw-200">Services.</span>
              </span>
            </h2>
          </div>
          <h6 className="sub-title main-color d-flex align-items-center">
            <span>Our Specialize</span>
            <span className="thin"></span>
          </h6>
        </div>
        <div className="row sm-marg">
          {
            services?.map((item, i) => (
              <div key={i} className="col-lg-4 col-md-6 mb-3">
                <div className="item-box radius-15 md-mb30">
                  <h5 className="mb-80 text-u">
                    <span className="mr-40 fz-14 main-color">{i + 1}</span>
                    {item.title}
                  </h5>
                  <div className="icon mb-20 opacity-5">
                    <Image src={item?.image?.url} alt="" width={50} height={50} />
                  </div>
                  <p>{item?.description.slice(0, 50)} </p>
                </div>
              </div>
            ))
          }

        </div>
        <div className="sec-bottom mt-100">
          <div className="main-bg d-flex align-items-center">
            <p>Here are some select projects that showcase.</p>
            <Link

              href="/services"
              className="butn main-color ml-40 underline"
            >
              <span>View All</span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Services;
