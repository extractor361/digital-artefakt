import Link from "next/link";
import React from "react";

function Breadcrumb({ title, pageName, pageList }) {
  return (
    <section className="breadcrumbs">
      <div className="breadcrumb-sm-images">
        <div className="inner-banner-1 magnetic-item">
          <img src="assets/img/breadcrumb1.png" alt="" />
        </div>
        <div className="inner-banner-2 magnetic-item">
          <img src="assets/img/breadcrumb2.png" alt="" />
        </div>
      </div>
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="breadcrumb-wrapper">
              <div className="breadcrumb-cnt">
                <span>{pageName}</span>
                <h1>"{title}"</h1>
                <div className="breadcrumb-list">
                  <Link legacyBehavior href="/"><a>Naslovna</a></Link>
                  <img
                    src="assets/img/inner-pages/breadcrumb-arrow.svg"
                    alt=""
                  />
                  {pageList}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Breadcrumb;
