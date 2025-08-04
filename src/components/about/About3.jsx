import { useRouter } from 'next/router'
import React from 'react'

function About3() {
  const currentRoute = useRouter().pathname
  return (
    <div className={`home3-about-section ${currentRoute === "/onama"? "sec-mar":""}`}>
  <div className="container-fluid">
    <div className="row g-lg-4 gy-5">
      <div className="col-lg-9">
        <div className="section-title-3  wow animate fadeInUp" data-wow-delay="200ms" data-wow-duration="1500ms">
          <h2>Naš Pristup</h2>
          <p>Vjerujemo u izgradnju rješenja koja su precizno prilagođena potrebama svakog klijenta. Svaki projekat tretiramo kao jedinstven izazov i ulažemo vrijeme da razumijemo vaše ciljeve, procese i tržište.</p>
        </div>
        <div className="about-left">
          <div className="about-img  wow animate fadeInUp" data-wow-delay="300ms" data-wow-duration="1500ms">
            <img className="img-fluid magnetic-item" src="assets/img/home-3/onama2.png" alt="" />
          </div>
          <div className="about-content wow animate fadeInUp" data-wow-delay="400ms" data-wow-duration="1500ms">
            <h2>Otključajte Potencijal Vašeg Poslovanja.</h2>
            <p>Naš tim razvija digitalna rješenja koja nisu univerzalna – već precizno skrojena za vas. Fokusiramo se na konkretne ciljeve i pravimo plan koji donosi mjerljive rezultate.</p>
            <div className="devider" />
            <ul className="about-feature">
              <li>
                <h5>Prilagođena rješenja</h5>
                <p>Svako rješenje kreiramo u skladu s vašim poslovnim modelom i dugoročnim ciljevima.</p>
              </li>
              <li>
                <h5>Provjeren kvalitet</h5>
                <p>Naš rad se temelji na pouzdanoj tehnologiji, preciznoj implementaciji i pažljivoj kontroli kvaliteta.</p>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="col-lg-3">
        <div className="about-right">
          <div className="about-img wow animate fadeInUp" data-wow-delay="200ms" data-wow-duration="1500ms">
            <img className="img-fluid magnetic-item" src="assets/img/home-3/onama1.png" alt="" />
          </div>
          <div className="about-exprience d-flex align-items-center justify-content-center wow animate fadeInUp" data-wow-delay="300ms" data-wow-duration="1500ms">
            <div className="exp-text">
              <img src="assets/img/home-3/rotate-text.png" alt="" />
            </div>
            <div className="years">
              <h2>10<br /><span>Godina</span></h2>
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
