import React from 'react'
import Link from 'next/link'

function PricingPlan3() {
  return (
    <div className="home3-pricing-plan-area sec-mar">
    <div className="container">
      <div className="row mb-55 wow animate fadeInUp" data-wow-delay="200ms" data-wow-duration="1500ms">
        <div className="col-lg-12 d-flex align-items-center justify-content-between gap-4 flex-wrap">
          <div className="section-title-3">
            <h2>Izaberite opciju koja vam najviše odgovara

</h2>
            <p>Usluge izrade web sajtova i aplikacija – od jednostavnih prezentacija do naprednih sistema. Odaberi paket koji odgovara tvojim potrebama.

</p>
          </div>
          <nav>
            <div className="nav nav-tabs" id="nav-tab" role="tablist">
              <button className="nav-link active" id="nav-home-tab" data-bs-toggle="tab" data-bs-target="#nav-home" type="button" role="tab" aria-controls="nav-home" aria-selected="true">Veb razvoj</button>
              <button className="nav-link" id="nav-profile-tab" data-bs-toggle="tab" data-bs-target="#nav-profile" type="button" role="tab" aria-controls="nav-profile" aria-selected="false">Održavanje sajta</button>
            </div>
          </nav>
        </div>
      </div>  
      <div className="row">
        <div className="col-lg-12">
          <div className="tab-content" id="nav-tabContent">
            <div className="tab-pane fade show active" id="nav-home" role="tabpanel" aria-labelledby="nav-home-tab" tabIndex={0}>
              <div className="row g-lg-0 g-4 align-items-center justify-content-center">
                <div className="col-xl-4 col-md-6 wow animate fadeInLeft" data-wow-delay="300ms" data-wow-duration="1500ms">
                  <div className="pricing-card">
                    <div className="pricing-top">
                      <div className="left">
                        <span>Osnovni paket
</span>
                        <h2><sup>€</sup>290<sub>/Jednokratno</sub></h2>
                      </div>
                      <div className="right">
                        <img src="assets/img/home-3/pricing-vec1.svg" alt="" />
                      </div>
                    </div>
                    <div className="pricing-content">
                      <ul>
                        <li>
                          <svg width={16} height={16} viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
                            <circle cx={8} cy={8} r={8} />
                            <path d="M6.34172 12.8L6.28743 12.6983C5.45809 11.1441 3.25425 7.84599 3.23199 7.81286L3.2002 7.76536L3.95103 6.94922L6.32778 8.77458C7.82424 6.63876 9.22034 5.17178 10.131 4.31512C11.1272 3.37803 12.7936 3.20415 12.8002 3.20001C9.6713 6.26525 6.42863 12.632 6.39485 12.6975L6.34172 12.8Z" />
                          </svg>
                          Jednostavan prezentacioni sajt (do 5 sekcija)
                        </li>
                        <li>
                          <svg width={16} height={16} viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
                            <circle cx={8} cy={8} r={8} />
                            <path d="M6.34172 12.8L6.28743 12.6983C5.45809 11.1441 3.25425 7.84599 3.23199 7.81286L3.2002 7.76536L3.95103 6.94922L6.32778 8.77458C7.82424 6.63876 9.22034 5.17178 10.131 4.31512C11.1272 3.37803 12.7936 3.20415 12.8002 3.20001C9.6713 6.26525 6.42863 12.632 6.39485 12.6975L6.34172 12.8Z" />
                          </svg>
                          Responzivan dizajn prilagođen mobilnim uređajima
                        </li>
                        <li>
                          <svg width={16} height={16} viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
                            <circle cx={8} cy={8} r={8} />
                            <path d="M6.34172 12.8L6.28743 12.6983C5.45809 11.1441 3.25425 7.84599 3.23199 7.81286L3.2002 7.76536L3.95103 6.94922L6.32778 8.77458C7.82424 6.63876 9.22034 5.17178 10.131 4.31512C11.1272 3.37803 12.7936 3.20415 12.8002 3.20001C9.6713 6.26525 6.42863 12.632 6.39485 12.6975L6.34172 12.8Z" />
                          </svg>
                          Osnovna kontakt forma
                        </li>
                        <li>
                          <svg width={16} height={16} viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
                            <circle cx={8} cy={8} r={8} />
                            <path d="M6.34172 12.8L6.28743 12.6983C5.45809 11.1441 3.25425 7.84599 3.23199 7.81286L3.2002 7.76536L3.95103 6.94922L6.32778 8.77458C7.82424 6.63876 9.22034 5.17178 10.131 4.31512C11.1272 3.37803 12.7936 3.20415 12.8002 3.20001C9.6713 6.26525 6.42863 12.632 6.39485 12.6975L6.34172 12.8Z" />
                          </svg>
                          Brza isporuka (do 5 dana)
                        </li>
                        <li>
                          <svg width={16} height={16} viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
                            <circle cx={8} cy={8} r={8} />
                            <path d="M6.34172 12.8L6.28743 12.6983C5.45809 11.1441 3.25425 7.84599 3.23199 7.81286L3.2002 7.76536L3.95103 6.94922L6.32778 8.77458C7.82424 6.63876 9.22034 5.17178 10.131 4.31512C11.1272 3.37803 12.7936 3.20415 12.8002 3.20001C9.6713 6.26525 6.42863 12.632 6.39485 12.6975L6.34172 12.8Z" />
                          </svg>
                          Podrška mjesec dana nakon isporuke
                        </li>
                        <li>
                          <svg width={16} height={16} viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
                            <circle cx={8} cy={8} r={8} />
                            <path d="M6.34172 12.8L6.28743 12.6983C5.45809 11.1441 3.25425 7.84599 3.23199 7.81286L3.2002 7.76536L3.95103 6.94922L6.32778 8.77458C7.82424 6.63876 9.22034 5.17178 10.131 4.31512C11.1272 3.37803 12.7936 3.20415 12.8002 3.20001C9.6713 6.26525 6.42863 12.632 6.39485 12.6975L6.34172 12.8Z" />
                          </svg>
                          Pogodno za frilensere i male firme
                        </li>
                        <li>
                          <svg width={16} height={16} viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
                            <circle cx={8} cy={8} r={8} />
                            <path d="M6.34172 12.8L6.28743 12.6983C5.45809 11.1441 3.25425 7.84599 3.23199 7.81286L3.2002 7.76536L3.95103 6.94922L6.32778 8.77458C7.82424 6.63876 9.22034 5.17178 10.131 4.31512C11.1272 3.37803 12.7936 3.20415 12.8002 3.20001C9.6713 6.26525 6.42863 12.632 6.39485 12.6975L6.34172 12.8Z" />
                          </svg>
                          Bez CMS-a i dinamičkog sadržaja
                        </li>
                      </ul>
                      <div className="pay-btn">
<Link className="primary-btn3" href="/kontakt">
                              Započni razvoj
                            </Link>                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-xl-4 col-md-6 wow animate fadeInUp" data-wow-delay="200ms" data-wow-duration="1500ms">
                  <div className="pricing-card two">
                    <div className="pricing-top">
                      <div className="left">
                        <span>Profesionalni paket</span>
                        <h2><sup>€</sup>599<sub>/Jednokratno</sub></h2>
                      </div>
                      <div className="right">
                        <div className="offer-tag">
                          <img src="assets/img/home-3/price-bg.svg" alt="" />
                          <h5>30% <br /><span>Popust</span></h5>
                        </div>
                      </div>
                    </div>
                    <div className="pricing-content">
                      <ul>
                        <li>
                          <svg width={16} height={16} viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
                            <circle cx={8} cy={8} r={8} />
                            <path d="M6.34172 12.8L6.28743 12.6983C5.45809 11.1441 3.25425 7.84599 3.23199 7.81286L3.2002 7.76536L3.95103 6.94922L6.32778 8.77458C7.82424 6.63876 9.22034 5.17178 10.131 4.31512C11.1272 3.37803 12.7936 3.20415 12.8002 3.20001C9.6713 6.26525 6.42863 12.632 6.39485 12.6975L6.34172 12.8Z" />
                          </svg>
 Web sajt sa do 10 stranica                        </li>
                        <li>
                          <svg width={16} height={16} viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
                            <circle cx={8} cy={8} r={8} />
                            <path d="M6.34172 12.8L6.28743 12.6983C5.45809 11.1441 3.25425 7.84599 3.23199 7.81286L3.2002 7.76536L3.95103 6.94922L6.32778 8.77458C7.82424 6.63876 9.22034 5.17178 10.131 4.31512C11.1272 3.37803 12.7936 3.20415 12.8002 3.20001C9.6713 6.26525 6.42863 12.632 6.39485 12.6975L6.34172 12.8Z" />
                          </svg>
                           CMS integracija (npr. WordPress)
                        </li>
                        <li>
                          <svg width={16} height={16} viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
                            <circle cx={8} cy={8} r={8} />
                            <path d="M6.34172 12.8L6.28743 12.6983C5.45809 11.1441 3.25425 7.84599 3.23199 7.81286L3.2002 7.76536L3.95103 6.94922L6.32778 8.77458C7.82424 6.63876 9.22034 5.17178 10.131 4.31512C11.1272 3.37803 12.7936 3.20415 12.8002 3.20001C9.6713 6.26525 6.42863 12.632 6.39485 12.6975L6.34172 12.8Z" />
                          </svg>
                          Napredne forme i galerije
                        </li>
                        <li>
                          <svg width={16} height={16} viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
                            <circle cx={8} cy={8} r={8} />
                            <path d="M6.34172 12.8L6.28743 12.6983C5.45809 11.1441 3.25425 7.84599 3.23199 7.81286L3.2002 7.76536L3.95103 6.94922L6.32778 8.77458C7.82424 6.63876 9.22034 5.17178 10.131 4.31512C11.1272 3.37803 12.7936 3.20415 12.8002 3.20001C9.6713 6.26525 6.42863 12.632 6.39485 12.6975L6.34172 12.8Z" />
                          </svg>
                           Osnovna SEO optimizacija
                        </li>
                        <li>
                          <svg width={16} height={16} viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
                            <circle cx={8} cy={8} r={8} />
                            <path d="M6.34172 12.8L6.28743 12.6983C5.45809 11.1441 3.25425 7.84599 3.23199 7.81286L3.2002 7.76536L3.95103 6.94922L6.32778 8.77458C7.82424 6.63876 9.22034 5.17178 10.131 4.31512C11.1272 3.37803 12.7936 3.20415 12.8002 3.20001C9.6713 6.26525 6.42863 12.632 6.39485 12.6975L6.34172 12.8Z" />
                          </svg>
                           Integracija sa društvenim mrežama
                        </li>
                        <li>
                          <svg width={16} height={16} viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
                            <circle cx={8} cy={8} r={8} />
                            <path d="M6.34172 12.8L6.28743 12.6983C5.45809 11.1441 3.25425 7.84599 3.23199 7.81286L3.2002 7.76536L3.95103 6.94922L6.32778 8.77458C7.82424 6.63876 9.22034 5.17178 10.131 4.31512C11.1272 3.37803 12.7936 3.20415 12.8002 3.20001C9.6713 6.26525 6.42863 12.632 6.39485 12.6975L6.34172 12.8Z" />
                          </svg>
                           Tehnička podrška 30 dana
                        </li>
                        <li>
                          <svg width={16} height={16} viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
                            <circle cx={8} cy={8} r={8} />
                            <path d="M6.34172 12.8L6.28743 12.6983C5.45809 11.1441 3.25425 7.84599 3.23199 7.81286L3.2002 7.76536L3.95103 6.94922L6.32778 8.77458C7.82424 6.63876 9.22034 5.17178 10.131 4.31512C11.1272 3.37803 12.7936 3.20415 12.8002 3.20001C9.6713 6.26525 6.42863 12.632 6.39485 12.6975L6.34172 12.8Z" />
                          </svg>
                           Pogodno za manje kompanije i brendove
                        </li>
                      </ul>
                      <div className="pay-btn">
<Link className="primary-btn3" href="/kontakt">
                              Započni razvoj
                            </Link>                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-xl-4 col-md-6 wow animate fadeInRight" data-wow-delay="400ms" data-wow-duration="1500ms">
                  <div className="pricing-card">
                    <div className="pricing-top">
                      <div className="left">
                        <span>koirporacijski paket</span>
                        <h2><sup>€</sup>1999<sub>/Jednokratno</sub></h2>
                      </div>
                      <div className="right">
                        <img src="assets/img/home-3/pricing-vec2.svg" alt="" />
                      </div>
                    </div>
                    <div className="pricing-content">
                      <ul>
                        <li>
                          <svg width={16} height={16} viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
                            <circle cx={8} cy={8} r={8} />
                            <path d="M6.34172 12.8L6.28743 12.6983C5.45809 11.1441 3.25425 7.84599 3.23199 7.81286L3.2002 7.76536L3.95103 6.94922L6.32778 8.77458C7.82424 6.63876 9.22034 5.17178 10.131 4.31512C11.1272 3.37803 12.7936 3.20415 12.8002 3.20001C9.6713 6.26525 6.42863 12.632 6.39485 12.6975L6.34172 12.8Z" />
                          </svg>
 Web aplikacija ili kompleksan sajt (custom development)
                        </li>
                        <li>
                          <svg width={16} height={16} viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
                            <circle cx={8} cy={8} r={8} />
                            <path d="M6.34172 12.8L6.28743 12.6983C5.45809 11.1441 3.25425 7.84599 3.23199 7.81286L3.2002 7.76536L3.95103 6.94922L6.32778 8.77458C7.82424 6.63876 9.22034 5.17178 10.131 4.31512C11.1272 3.37803 12.7936 3.20415 12.8002 3.20001C9.6713 6.26525 6.42863 12.632 6.39485 12.6975L6.34172 12.8Z" />
                          </svg>
 Admin panel, korisnički nalozi, baze podataka
                        </li>
                        <li>
                          <svg width={16} height={16} viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
                            <circle cx={8} cy={8} r={8} />
                            <path d="M6.34172 12.8L6.28743 12.6983C5.45809 11.1441 3.25425 7.84599 3.23199 7.81286L3.2002 7.76536L3.95103 6.94922L6.32778 8.77458C7.82424 6.63876 9.22034 5.17178 10.131 4.31512C11.1272 3.37803 12.7936 3.20415 12.8002 3.20001C9.6713 6.26525 6.42863 12.632 6.39485 12.6975L6.34172 12.8Z" />
                          </svg>
                          API integracije, plaćanja, napredna funkcionalnost
                        </li>
                        <li>
                          <svg width={16} height={16} viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
                            <circle cx={8} cy={8} r={8} />
                            <path d="M6.34172 12.8L6.28743 12.6983C5.45809 11.1441 3.25425 7.84599 3.23199 7.81286L3.2002 7.76536L3.95103 6.94922L6.32778 8.77458C7.82424 6.63876 9.22034 5.17178 10.131 4.31512C11.1272 3.37803 12.7936 3.20415 12.8002 3.20001C9.6713 6.26525 6.42863 12.632 6.39485 12.6975L6.34172 12.8Z" />
                          </svg>
                           UI/UX dizajn po mjeri(jedinstven dizajn)
                        </li>
                        <li>
                          <svg width={16} height={16} viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
                            <circle cx={8} cy={8} r={8} />
                            <path d="M6.34172 12.8L6.28743 12.6983C5.45809 11.1441 3.25425 7.84599 3.23199 7.81286L3.2002 7.76536L3.95103 6.94922L6.32778 8.77458C7.82424 6.63876 9.22034 5.17178 10.131 4.31512C11.1272 3.37803 12.7936 3.20415 12.8002 3.20001C9.6713 6.26525 6.42863 12.632 6.39485 12.6975L6.34172 12.8Z" />
                          </svg>
                          Optimizacija performansi i sigurnosti
                        </li>
                        <li>
                          <svg width={16} height={16} viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
                            <circle cx={8} cy={8} r={8} />
                            <path d="M6.34172 12.8L6.28743 12.6983C5.45809 11.1441 3.25425 7.84599 3.23199 7.81286L3.2002 7.76536L3.95103 6.94922L6.32778 8.77458C7.82424 6.63876 9.22034 5.17178 10.131 4.31512C11.1272 3.37803 12.7936 3.20415 12.8002 3.20001C9.6713 6.26525 6.42863 12.632 6.39485 12.6975L6.34172 12.8Z" />
                          </svg>
                           60 dana podrške i održavanja
                        </li>
                        <li>
                          <svg width={16} height={16} viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
                            <circle cx={8} cy={8} r={8} />
                            <path d="M6.34172 12.8L6.28743 12.6983C5.45809 11.1441 3.25425 7.84599 3.23199 7.81286L3.2002 7.76536L3.95103 6.94922L6.32778 8.77458C7.82424 6.63876 9.22034 5.17178 10.131 4.31512C11.1272 3.37803 12.7936 3.20415 12.8002 3.20001C9.6713 6.26525 6.42863 12.632 6.39485 12.6975L6.34172 12.8Z" />
                          </svg>
                            Idealno za veće kompanije, SaaS projekte i e-commerce sisteme
                        </li>
                      </ul>
                      <div className="pay-btn">
<Link className="primary-btn3" href="/kontakt">
                              Započni razvoj
                            </Link>                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="tab-pane fade" id="nav-profile" role="tabpanel" aria-labelledby="nav-profile-tab" tabIndex={0}>
              <div className="row g-lg-0 g-4 align-items-center justify-content-center">
                <div className="col-xl-4 col-md-6">
                  <div className="pricing-card">
                    <div className="pricing-top">
                      <div className="left">
                        <span>Osnovni paket</span>
                        <h2><sup>€</sup>29<sub>/Mjesečno</sub></h2>
                      </div>
                      <div className="right">
                        <img src="assets/img/home-3/pricing-vec1.svg" alt="" />
                      </div>
                    </div>
                    <div className="pricing-content">
                      <ul>
                        <li>
                          <svg width={16} height={16} viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
                            <circle cx={8} cy={8} r={8} />
                            <path d="M6.34172 12.8L6.28743 12.6983C5.45809 11.1441 3.25425 7.84599 3.23199 7.81286L3.2002 7.76536L3.95103 6.94922L6.32778 8.77458C7.82424 6.63876 9.22034 5.17178 10.131 4.31512C11.1272 3.37803 12.7936 3.20415 12.8002 3.20001C9.6713 6.26525 6.42863 12.632 6.39485 12.6975L6.34172 12.8Z" />
                          </svg>
                          Redovno ažuriranje sajta i dodataka
                        </li>
                        <li>
                          <svg width={16} height={16} viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
                            <circle cx={8} cy={8} r={8} />
                            <path d="M6.34172 12.8L6.28743 12.6983C5.45809 11.1441 3.25425 7.84599 3.23199 7.81286L3.2002 7.76536L3.95103 6.94922L6.32778 8.77458C7.82424 6.63876 9.22034 5.17178 10.131 4.31512C11.1272 3.37803 12.7936 3.20415 12.8002 3.20001C9.6713 6.26525 6.42863 12.632 6.39485 12.6975L6.34172 12.8Z" />
                          </svg>
                          Osnovna provera bezbjednosti sajber infrastrukture
                        </li>
                        <li>
                          <svg width={16} height={16} viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
                            <circle cx={8} cy={8} r={8} />
                            <path d="M6.34172 12.8L6.28743 12.6983C5.45809 11.1441 3.25425 7.84599 3.23199 7.81286L3.2002 7.76536L3.95103 6.94922L6.32778 8.77458C7.82424 6.63876 9.22034 5.17178 10.131 4.31512C11.1272 3.37803 12.7936 3.20415 12.8002 3.20001C9.6713 6.26525 6.42863 12.632 6.39485 12.6975L6.34172 12.8Z" />
                          </svg>
                          Pothranjivanje(BackUp) sajta
                        </li>
                        <li>
                          <svg width={16} height={16} viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
                            <circle cx={8} cy={8} r={8} />
                            <path d="M6.34172 12.8L6.28743 12.6983C5.45809 11.1441 3.25425 7.84599 3.23199 7.81286L3.2002 7.76536L3.95103 6.94922L6.32778 8.77458C7.82424 6.63876 9.22034 5.17178 10.131 4.31512C11.1272 3.37803 12.7936 3.20415 12.8002 3.20001C9.6713 6.26525 6.42863 12.632 6.39485 12.6975L6.34172 12.8Z" />
                          </svg>
                          Tehnička podrška i otklanjanje sistemskih grešaka
                        </li>
                        <li>
                          <svg width={16} height={16} viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
                            <circle cx={8} cy={8} r={8} />
                            <path d="M6.34172 12.8L6.28743 12.6983C5.45809 11.1441 3.25425 7.84599 3.23199 7.81286L3.2002 7.76536L3.95103 6.94922L6.32778 8.77458C7.82424 6.63876 9.22034 5.17178 10.131 4.31512C11.1272 3.37803 12.7936 3.20415 12.8002 3.20001C9.6713 6.26525 6.42863 12.632 6.39485 12.6975L6.34172 12.8Z" />
                          </svg>
                          Praćenje dostupnosti sajta (osnovni nivo)
                        </li>
                      </ul>
                      
                    </div>
                  </div>
                </div>
                <div className="col-xl-4 col-md-6">
                  <div className="pricing-card two">
                    <div className="pricing-top">
                      <div className="left">
                        <span>Napredni paket</span>
                        <h2><sup>€</sup>59<sub>/Mjesečno</sub></h2>
                      </div>
                      <div className="right">
                        <div className="offer-tag">
                          <img src="assets/img/home-3/price-bg.svg" alt="" />
                          <h5>30% <br /><span>Popust</span></h5>
                        </div>
                      </div>
                    </div>
                    <div className="pricing-content">
                      <ul>
                        <li>
                          <svg width={16} height={16} viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
                            <circle cx={8} cy={8} r={8} />
                            <path d="M6.34172 12.8L6.28743 12.6983C5.45809 11.1441 3.25425 7.84599 3.23199 7.81286L3.2002 7.76536L3.95103 6.94922L6.32778 8.77458C7.82424 6.63876 9.22034 5.17178 10.131 4.31512C11.1272 3.37803 12.7936 3.20415 12.8002 3.20001C9.6713 6.26525 6.42863 12.632 6.39485 12.6975L6.34172 12.8Z" />
                          </svg>
                          Sve iz osnovnog paketa
                        </li>
                        <li>
                          <svg width={16} height={16} viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
                            <circle cx={8} cy={8} r={8} />
                            <path d="M6.34172 12.8L6.28743 12.6983C5.45809 11.1441 3.25425 7.84599 3.23199 7.81286L3.2002 7.76536L3.95103 6.94922L6.32778 8.77458C7.82424 6.63876 9.22034 5.17178 10.131 4.31512C11.1272 3.37803 12.7936 3.20415 12.8002 3.20001C9.6713 6.26525 6.42863 12.632 6.39485 12.6975L6.34172 12.8Z" />
                          </svg>
                          Provjera i osnovna optimizacija za pretraživače (SEO)
                        </li>
                        <li>
                          <svg width={16} height={16} viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
                            <circle cx={8} cy={8} r={8} />
                            <path d="M6.34172 12.8L6.28743 12.6983C5.45809 11.1441 3.25425 7.84599 3.23199 7.81286L3.2002 7.76536L3.95103 6.94922L6.32778 8.77458C7.82424 6.63876 9.22034 5.17178 10.131 4.31512C11.1272 3.37803 12.7936 3.20415 12.8002 3.20001C9.6713 6.26525 6.42863 12.632 6.39485 12.6975L6.34172 12.8Z" />
                          </svg>
                          Pothranjivanje(BackUP) sajta jednom nedeljno
                        </li>
                        <li>
                          <svg width={16} height={16} viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
                            <circle cx={8} cy={8} r={8} />
                            <path d="M6.34172 12.8L6.28743 12.6983C5.45809 11.1441 3.25425 7.84599 3.23199 7.81286L3.2002 7.76536L3.95103 6.94922L6.32778 8.77458C7.82424 6.63876 9.22034 5.17178 10.131 4.31512C11.1272 3.37803 12.7936 3.20415 12.8002 3.20001C9.6713 6.26525 6.42863 12.632 6.39485 12.6975L6.34172 12.8Z" />
                          </svg>
                          Tehnička podrška i uklanjanje tehničkih i sistemskih grešaka (odgovor do 48 sati)
                        </li>
                        <li>
                          <svg width={16} height={16} viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
                            <circle cx={8} cy={8} r={8} />
                            <path d="M6.34172 12.8L6.28743 12.6983C5.45809 11.1441 3.25425 7.84599 3.23199 7.81286L3.2002 7.76536L3.95103 6.94922L6.32778 8.77458C7.82424 6.63876 9.22034 5.17178 10.131 4.31512C11.1272 3.37803 12.7936 3.20415 12.8002 3.20001C9.6713 6.26525 6.42863 12.632 6.39485 12.6975L6.34172 12.8Z" />
                          </svg>
                          Uklanjanje spama i neželjenog sadržaja
                        </li>
                        <li>
                          <svg width={16} height={16} viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
                            <circle cx={8} cy={8} r={8} />
                            <path d="M6.34172 12.8L6.28743 12.6983C5.45809 11.1441 3.25425 7.84599 3.23199 7.81286L3.2002 7.76536L3.95103 6.94922L6.32778 8.77458C7.82424 6.63876 9.22034 5.17178 10.131 4.31512C11.1272 3.37803 12.7936 3.20415 12.8002 3.20001C9.6713 6.26525 6.42863 12.632 6.39485 12.6975L6.34172 12.8Z" />
                          </svg>
                          Manje izmene na sajtu (do 3 zahtjeva mesečno)
                        </li>
                      </ul>
                      
                    </div>
                  </div>
                </div>
                <div className="col-xl-4 col-md-6">
                  <div className="pricing-card">
                    <div className="pricing-top">
                      <div className="left">
                        <span>Korporacijski paket</span>
                        <h2><sup>€</sup>99<sub>/Mjesečno</sub></h2>
                      </div>
                      <div className="right">
                        <img src="assets/img/home-3/pricing-vec2.svg" alt="" />
                      </div>
                    </div>
                    <div className="pricing-content">
                      <ul>
                        <li>
                          <svg width={16} height={16} viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
                            <circle cx={8} cy={8} r={8} />
                            <path d="M6.34172 12.8L6.28743 12.6983C5.45809 11.1441 3.25425 7.84599 3.23199 7.81286L3.2002 7.76536L3.95103 6.94922L6.32778 8.77458C7.82424 6.63876 9.22034 5.17178 10.131 4.31512C11.1272 3.37803 12.7936 3.20415 12.8002 3.20001C9.6713 6.26525 6.42863 12.632 6.39485 12.6975L6.34172 12.8Z" />
                          </svg>
Sve iz naprednog paketa                        </li>
                        <li>
                          <svg width={16} height={16} viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
                            <circle cx={8} cy={8} r={8} />
                            <path d="M6.34172 12.8L6.28743 12.6983C5.45809 11.1441 3.25425 7.84599 3.23199 7.81286L3.2002 7.76536L3.95103 6.94922L6.32778 8.77458C7.82424 6.63876 9.22034 5.17178 10.131 4.31512C11.1272 3.37803 12.7936 3.20415 12.8002 3.20001C9.6713 6.26525 6.42863 12.632 6.39485 12.6975L6.34172 12.8Z" />
                          </svg>
                          Kontinuirano praćenje dostupnosti sajta (24/7)
                        </li>
                        <li>
                          <svg width={16} height={16} viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
                            <circle cx={8} cy={8} r={8} />
                            <path d="M6.34172 12.8L6.28743 12.6983C5.45809 11.1441 3.25425 7.84599 3.23199 7.81286L3.2002 7.76536L3.95103 6.94922L6.32778 8.77458C7.82424 6.63876 9.22034 5.17178 10.131 4.31512C11.1272 3.37803 12.7936 3.20415 12.8002 3.20001C9.6713 6.26525 6.42863 12.632 6.39485 12.6975L6.34172 12.8Z" />
                          </svg>
                          Dnevno automatsko pothranjivanje(BackUp) podataka


                        </li>
                        <li>
                          <svg width={16} height={16} viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
                            <circle cx={8} cy={8} r={8} />
                            <path d="M6.34172 12.8L6.28743 12.6983C5.45809 11.1441 3.25425 7.84599 3.23199 7.81286L3.2002 7.76536L3.95103 6.94922L6.32778 8.77458C7.82424 6.63876 9.22034 5.17178 10.131 4.31512C11.1272 3.37803 12.7936 3.20415 12.8002 3.20001C9.6713 6.26525 6.42863 12.632 6.39485 12.6975L6.34172 12.8Z" />
                          </svg>
                          Prioritetna tehnička podrška i uklanjanje tehničkih i sistemskih grešaka (odgovor do 24 sati)
                        </li>
                        <li>
                          <svg width={16} height={16} viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
                            <circle cx={8} cy={8} r={8} />
                            <path d="M6.34172 12.8L6.28743 12.6983C5.45809 11.1441 3.25425 7.84599 3.23199 7.81286L3.2002 7.76536L3.95103 6.94922L6.32778 8.77458C7.82424 6.63876 9.22034 5.17178 10.131 4.31512C11.1272 3.37803 12.7936 3.20415 12.8002 3.20001C9.6713 6.26525 6.42863 12.632 6.39485 12.6975L6.34172 12.8Z" />
                          </svg>
                          Neograničene tehničke izmene i podrška
                        </li>
                        <li>
                          <svg width={16} height={16} viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
                            <circle cx={8} cy={8} r={8} />
                            <path d="M6.34172 12.8L6.28743 12.6983C5.45809 11.1441 3.25425 7.84599 3.23199 7.81286L3.2002 7.76536L3.95103 6.94922L6.32778 8.77458C7.82424 6.63876 9.22034 5.17178 10.131 4.31512C11.1272 3.37803 12.7936 3.20415 12.8002 3.20001C9.6713 6.26525 6.42863 12.632 6.39485 12.6975L6.34172 12.8Z" />
                          </svg>
                          Mjesečni izveštaji o radu sajta, bezbednosti i SEO stanju
                        </li>
                      </ul>
                      
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  
  )
}

export default PricingPlan3
