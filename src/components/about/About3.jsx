import { useRouter } from 'next/router'
import React from 'react'

function About3() {
  const currentRoute = useRouter().pathname
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
              <h2>Naš pristup digitalnom marketingu</h2>
              <p>
                Uspjeh u digitalnom svijetu zahtijeva jasnu strategiju i mjerljive rezultate.
                Povezujemo vaš brend sa ciljnom publikom kroz SEO, Google Ads i društvene mreže.
              </p>
            </div>
            <div className="about-left">
              <div
                className="about-img wow animate fadeInUp"
                data-wow-delay="300ms"
                data-wow-duration="1500ms"
              >
                <img
                  className="img-fluid magnetic-item"
                  src="assets/img/home-3/onama2.png"
                  alt="Digitalni marketing Crna Gora"
                />
              </div>
              <div
                className="about-content wow animate fadeInUp"
                data-wow-delay="400ms"
                data-wow-duration="1500ms"
              >
                <h2>Rastite online uz Digital Artefakt</h2>
                <p>
                  Naš cilj je da vaše poslovanje bude vidljivo i konkurentno. 
                  SEO optimizacija, oglasi i moderni web sajtovi služe jednom cilju, većoj prodaji i rastu.
                </p>
                <div className="devider" />
                <ul className="about-feature">
                  <li>
                    <h5>Marketing strategije po mjeri</h5>
                    <p>
                      Razvijamo strategiju u skladu sa vašim ciljevima i publikom, bez šablona i generičkih rješenja.
                    </p>
                  </li>
                  <li>
                    <h5>Rezultati na prvom mjestu</h5>
                    <p>
                      Svaku kampanju pratimo i optimizujemo. Cilj je veća posjećenost, veća vidljivost i bolji povrat ulaganja.
                    </p>
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
                  src="assets/img/home-3/onama1.png"
                  alt="Digital Artefakt tim"
                />
              </div>
              <div
                className="about-exprience d-flex align-items-center justify-content-center wow animate fadeInUp"
                data-wow-delay="300ms"
                data-wow-duration="1500ms"
              >
                <div className="exp-text">
                  <img src="assets/img/home-3/rotate-text.png" alt="Iskustvo" />
                </div>
                <div className="years">
                  <h2>
                    10<br />
                    <span>Godina</span>
                  </h2>
                  <p>iskustva u digitalnom marketingu</p>
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
