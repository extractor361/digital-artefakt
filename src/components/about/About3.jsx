import { useRouter } from 'next/router'
import React from 'react'
import { useTranslation } from 'react-i18next'
import { useEffect, useState } from "react";

function About3() {
  const currentRoute = useRouter().pathname
 const { t, i18n } = useTranslation("common");
  const [ready, setReady] = useState(false);
useEffect(() => {
    if (i18n.isInitialized) setReady(true);
  }, [i18n.isInitialized]);

  if (!ready) return null;

  return (
    <div className={`home3-about-section ${currentRoute === "/onama" ? "sec-mar" : ""}`}>
      <div className="container-fluid">
        <div className="row g-lg-4 gy-5">
          <div className="col-lg-9">
            <div
              className="section-title-3 wow animate fadeInUp"
              data-wow-delay="200ms"
              data-wow-duration="1500ms"
            >
              <h2>{t('About3.title')}</h2>
              <p>{t('About3.subtitle')}</p>
            </div>
            <div className="about-left">
              <div
                className="about-img wow animate fadeInUp"
                data-wow-delay="300ms"
                data-wow-duration="1500ms"
              >
                <img
                  className="img-fluid magnetic-item"
                  src="../../assets/img/home-3/onama2.png"
                  alt={t('About3.imgAlt1')}
                />
              </div>
              <div
                className="about-content wow animate fadeInUp"
                data-wow-delay="400ms"
                data-wow-duration="1500ms"
              >
                <h2>{t('About3.heading')}</h2>
                <p>{t('About3.text')}</p>
                <div className="devider" />
                <ul className="about-feature">
                  <li>
                    <h5>{t('About3.feature1.title')}</h5>
                    <p>{t('About3.feature1.text')}</p>
                  </li>
                  <li>
                    <h5>{t('About3.feature2.title')}</h5>
                    <p>{t('About3.feature2.text')}</p>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="col-lg-3">
            <div className="about-right">
              <div
                className="about-img wow animate fadeInUp"
                data-wow-delay="200ms"
                data-wow-duration="1500ms"
              >
                <img
                  className="img-fluid magnetic-item"
                  src="../../assets/img/home-3/onama1.png"
                  alt={t('About3.imgAlt2')}
                />
              </div>
              <div
                className="about-exprience d-flex align-items-center justify-content-center wow animate fadeInUp"
                data-wow-delay="300ms"
                data-wow-duration="1500ms"
              >
                <div className="exp-text">
                  <img src="../../assets/img/home-3/rotate-text.png" alt={t('About3.experienceAlt')} />
                </div>
                <div className="years">
                  <h2>
                    10<br />
                    <span>{t('About3.years')}</span>
                  </h2>
                  <p>{t('About3.experienceText')}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div> 
    </div>
  )
}

export default About3
