/* eslint-disable @next/next/no-img-element */
import React from 'react';

function Works({ data }) {
  return (
    <div className="img-column">
      <div className="container">
        <div className="row">
          {
            data?.images?.map((img, i) => (
              <div className="col-lg-6" key={i}>
                <div className="img md-mb30">
                  <img src={img.url} alt={img.alternativeText} />
                </div>
              </div>
            ))
          }
        </div>
      </div>
    </div>
  );
}

export default Works;
