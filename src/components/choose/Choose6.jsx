import Link from "next/link";
import React from "react";

function Choose6() {
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
                  <span>Zašto Digital Artefakt?</span>
                  <h2>Omogućavamo rast vašem biznisu</h2>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="choose-right-img magnetic-item">
                  <img
                    className="img-fluid"
                    src="assets/img/about3.png"
                    alt=""
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="choose-btm">
            <div className="row  g-lg-4 gy-5">
              <div className="col-lg-7">
                <div className="choose-left-content">
                  <div className="vectors">
                    <img
                      className="choose-vec-top-r"
                      src="assets/img/home-6/choose-vec-top-r.svg"
                      alt=""
                    />
                    <img
                      className="choose-vec-btm-l"
                      src="assets/img/home-6/choose-vec-btm-l.svg"
                      alt=""
                    />
                  </div>
                  <div className="icon">
                    <img src="assets/img/logo.svg" alt="" />
                  </div>
                  <h4>
                    Savremena IT Rješenja<br />
                    <span>Mi pokrećemo vaš rast od 2020.
</span>
                  </h4>
                  <p>
                   Pomažemo kompanijama i fizičkim licima da digitalno napreduju kroz inovativni web dizajn, razvoj aplikacija i ciljane marketinške kampanje.
<br></br>Naš tim kombinuje kreativnost i tehnologiju kako bi vaše prisustvo na internetu bilo primjetno, pouzdano i funkcionalno.


                  </p>
                  <div className="sl">
                    <h2>#1</h2>
                  </div>
                  <div className="about-btn">
                    <Link legacyBehavior href="/kontakt">
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
Kontaktirajte nas                  </a>
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
                          <h4>Softverski razvoj</h4>
                          <p>
Razvijamo stabilna softverska rešenja koja rastu zajedno sa vašim poslovanjem — od internih sistema do modernih web i mobilnih aplikacija.



                          </p>
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
                          <h4>Digitalni marketing</h4>
                          <p>
Kreiramo strategije oglašavanja koje donose stvarne rezultate — SEO, društvene mreže, Google kampanje i više.



                          </p>
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
                          <h4>Dizajn i korisničko iskustvo
</h4>
                          <p>
                            Moderan dizajn i intuitivan korisnički interfejs za web sajtove i aplikacije koje ostavljaju profesionalan utisak.


                          </p>
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
