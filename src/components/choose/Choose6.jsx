import Link from "next/link";
import React from "react";
import { useTranslation } from "next-i18next";

function Choose6() {
  const { t } = useTranslation("common"); // ili "choose" ako želiš poseban namespace

  return (
    <div className="home6-choose-section sec-mar">
      <div className="container">
        <div className="row">
          <div className="choose-top">
            <div className="row">
              <div
                className="col-lg-6 wow animate fadeInUp"
                data-wow-delay="200ms"
                data-wow-duration="1500ms"
              >
                <div className="choose-title">
                  <span>{t("choose6_why_digital_artefakt")}</span>
                  <h2>{t("choose6_we_grow_your_business")}</h2>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="choose-right-img magnetic-item">
                  <img
                    className="img-fluid"
                    src="../../assets/img/about3.png"
                    alt={t("choose6_img_alt")}
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="choose-btm">
            <div className="row g-lg-4 gy-5">
              <div className="col-lg-7">
                <div className="choose-left-content">
                  <div className="vectors">
                    <img
                      className="choose-vec-top-r"
                      src="../../assets/img/home-6/choose-vec-top-r.svg"
                      alt={t("choose6_vec_top_r_alt")}
                    />
                    <img
                      className="choose-vec-btm-l"
                      src="../../assets/img/home-6/choose-vec-btm-l.svg"
                      alt={t("choose6_vec_btm_l_alt")}
                    />
                  </div>
                  <div className="icon">
                    <img src="../../assets/img/logo.svg" alt={t("choose6_logo_alt")} />
                  </div>
                  <h4>
                    {t("choose6_modern_it_solutions")}
                    <br />
                    <span>{t("choose6_we_drive_growth_since_2020")}</span>
                  </h4>
                  <p>
                    {t("choose6_paragraph1")}
                    <br />
                    {t("choose6_paragraph2")}
                  </p>
                  <div className="sl">
                    <h2>#1</h2>
                  </div>
                  <div className="about-btn">
                    <Link href="/kontakt">
                      <a>
                        <svg
                          width={7}
                          height={7}
                          viewBox="0 0 13 13"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path d="M0 1H12M12 1V13M12 1L0.5 12" />
                        </svg>
                        {t("choose6_contact_us")}
                      </a>
                    </Link>
                  </div>
                </div>
              </div>

              <div className="col-lg-5">
                <div className="choose-feature">
                  <ul>
                    <li>
                      <div className="single-feature">
                        <div className="progress">
                          <h3>
                            <span className="counter">100</span>%
                          </h3>
                        </div>
                        <div className="content">
                          <h4>{t("choose6_feature_software_development")}</h4>
                          <p>{t("choose6_feature_software_development_text")}</p>
                        </div>
                      </div>
                    </li>
                    <li>
                      <div className="single-feature">
                        <div className="progress">
                          <h3>
                            <span className="counter">100</span>%
                          </h3>
                        </div>
                        <div className="content">
                          <h4>{t("choose6_feature_digital_marketing")}</h4>
                          <p>{t("choose6_feature_digital_marketing_text")}</p>
                        </div>
                      </div>
                    </li>
                    <li>
                      <div className="single-feature">
                        <div className="progress">
                          <h3>
                            <span className="counter">100</span>%
                          </h3>
                        </div>
                        <div className="content">
                          <h4>{t("choose6_feature_design_ux")}</h4>
                          <p>{t("choose6_feature_design_ux_text")}</p>
                        </div>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Choose6;
