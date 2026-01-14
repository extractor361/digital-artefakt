import React from 'react'
import Link from 'next/link'
import { useTranslation } from 'react-i18next'
import { useEffect, useState } from "react";

function PricingPlan3() {
const { t, i18n } = useTranslation("common");
  const [ready, setReady] = useState(false);
useEffect(() => {
    if (i18n.isInitialized) setReady(true);
  }, [i18n.isInitialized]);

  if (!ready) return null;
  return (
    <div className="home3-pricing-plan-area sec-mar">
      <div className="container">
        <div className="row mb-55 wow animate fadeInUp" data-wow-delay="200ms" data-wow-duration="1500ms">
          <div className="col-lg-12 d-flex align-items-center justify-content-between gap-4 flex-wrap">
            <div className="section-title-3">
              <h2>{t('Izradite vaš web sajt ili aplikaciju')}</h2>
              <p>{t('Usluge izrade web sajtova i aplikacija – od jednostavnih prezentacija do naprednih sistema. Odaberi paket koji odgovara tvojim potrebama.')}</p>
            </div>
            <nav>
              <div className="nav nav-tabs" id="nav-tab" role="tablist">
                <button className="nav-link active" id="nav-home-tab" data-bs-toggle="tab" data-bs-target="#nav-home" type="button" role="tab" aria-controls="nav-home" aria-selected="true">{t('Web razvoj')}</button>
                <button className="nav-link" id="nav-profile-tab" data-bs-toggle="tab" data-bs-target="#nav-profile" type="button" role="tab" aria-controls="nav-profile" aria-selected="false">{t('Održavanje sajta')}</button>
              </div>
            </nav>
          </div>
        </div>  
        <div className="row">
          <div className="col-lg-12">
            <div className="tab-content" id="nav-tabContent">
              <div className="tab-pane fade show active" id="nav-home" role="tabpanel" aria-labelledby="nav-home-tab" tabIndex={0}>
                <div className="row g-lg-0 g-4 align-items-center justify-content-center">
                  {/* Osnovni paket */}
                  <div className="col-xl-4 col-md-6 wow animate fadeInLeft" data-wow-delay="300ms" data-wow-duration="1500ms">
                    <div className="pricing-card">
                      <div className="pricing-top">
                        <div className="left">
                          <span>{t('Osnovni paket')}</span>
                          <h2><sup>€</sup>290<sub>{t('/Jednokratno')}</sub></h2>
                        </div>
                        <div className="right">
                          <img src="assets/img/home-3/pricing-vec1.svg" alt="" />
                        </div>
                      </div>
                      <div className="pricing-content">
                        <ul>
                          <li>{t('Jednostavan prezentacioni sajt (do 5 sekcija)')}</li>
                          <li>{t('Responzivan dizajn prilagođen mobilnim uređajima')}</li>
                          <li>{t('Osnovna kontakt forma')}</li>
                          <li>{t('Brza isporuka (do 5 dana)')}</li>
                          <li>{t('Podrška mjesec dana nakon isporuke')}</li>
                          <li>{t('Pogodno za frilensere i male firme')}</li>
                          <li>{t('Bez CMS-a i dinamičkog sadržaja')}</li>
                        </ul>
                        <div className="pay-btn">
                          <Link legacyBehavior className="primary-btn3" href="/kontakt">
                            {t('Započni razvoj')}
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* Profesionalni paket */}
                  <div className="col-xl-4 col-md-6 wow animate fadeInUp" data-wow-delay="200ms" data-wow-duration="1500ms">
                    <div className="pricing-card two">
                      <div className="pricing-top">
                        <div className="left">
                          <span>{t('Profesionalni paket')}</span>
                          <h2><sup>€</sup>599<sub>{t('/Jednokratno')}</sub></h2>
                        </div>
                        <div className="right">
                          <div className="offer-tag">
                            <img src="assets/img/home-3/price-bg.svg" alt="" />
                            <h5>30% <br /><span>{t('Popust')}</span></h5>
                          </div>
                        </div>
                      </div>
                      <div className="pricing-content">
                        <ul>
                          <li>{t('Web sajt do 10 stranica')}</li>
                          <li>{t('CMS integracija (WordPress)')}</li>
                          <li>{t('Napredne forme i galerije')}</li>
                          <li>{t('Osnovna SEO optimizacija')}</li>
                          <li>{t('Integracija sa društvenim mrežama')}</li>
                          <li>{t('Tehnička podrška 30 dana')}</li>
                          <li>{t('Pogodno za manje kompanije i brendove')}</li>
                        </ul>
                        <div className="pay-btn">
                          <Link legacyBehavior className="primary-btn3" href="/kontakt">
                            {t('Započni razvoj')}
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* Korporacijski paket */}
                  <div className="col-xl-4 col-md-6 wow animate fadeInRight" data-wow-delay="400ms" data-wow-duration="1500ms">
                    <div className="pricing-card">
                      <div className="pricing-top">
                        <div className="left">
                          <span>{t('Korporacijski paket')}</span>
                          <h2><sup>€</sup>1999<sub>{t('/Jednokratno')}</sub></h2>
                        </div>
                        <div className="right">
                          <img src="assets/img/home-3/pricing-vec2.svg" alt="" />
                        </div>
                      </div>
                      <div className="pricing-content">
                        <ul>
                          <li>{t('Web aplikacija ili kompleksan sajt (custom development)')}</li>
                          <li>{t('Admin panel, korisnički nalozi, baze podataka')}</li>
                          <li>{t('API integracije, plaćanja, napredna funkcionalnost')}</li>
                          <li>{t('UI/UX dizajn po mjeri(jedinstven dizajn)')}</li>
                          <li>{t('Optimizacija performansi i sigurnosti')}</li>
                          <li>{t('60 dana podrške i održavanja')}</li>
                          <li>{t('Idealno za veće kompanije, SaaS projekte i e-commerce sisteme')}</li>
                        </ul>
                        <div className="pay-btn">
                          <Link legacyBehavior className="primary-btn3" href="/kontakt">
                            {t('Započni razvoj')}
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* Tab za održavanje sajta */}
              <div className="tab-pane fade" id="nav-profile" role="tabpanel" aria-labelledby="nav-profile-tab" tabIndex={0}>
                <div className="row g-lg-0 g-4 align-items-center justify-content-center">
                  {/* Osnovni paket - mjesečno */}
                  <div className="col-xl-4 col-md-6">
                    <div className="pricing-card">
                      <div className="pricing-top">
                        <div className="left">
                          <span>{t('Osnovni paket')}</span>
                          <h2><sup>€</sup>29<sub>{t('/Mjesečno')}</sub></h2>
                        </div>
                        <div className="right">
                          <img src="assets/img/home-3/pricing-vec1.svg" alt="" />
                        </div>
                      </div>
                      <div className="pricing-content">
                        <ul>
                          <li>{t('Redovno ažuriranje sajta i dodataka')}</li>
                          <li>{t('Osnovna provera bezbjednosti sajber infrastrukture')}</li>
                          <li>{t('Pothranjivanje(BackUp) sajta')}</li>
                          <li>{t('Tehnička podrška i otklanjanje sistemskih grešaka')}</li>
                          <li>{t('Praćenje dostupnosti sajta (osnovni nivo)')}</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  {/* Napredni paket */}
                  <div className="col-xl-4 col-md-6">
                    <div className="pricing-card two">
                      <div className="pricing-top">
                        <div className="left">
                          <span>{t('Napredni paket')}</span>
                          <h2><sup>€</sup>59<sub>{t('/Mjesečno')}</sub></h2>
                        </div>
                        <div className="right">
                          <div className="offer-tag">
                            <img src="assets/img/home-3/price-bg.svg" alt="" />
                            <h5>30% <br /><span>{t('Popust')}</span></h5>
                          </div>
                        </div>
                      </div>
                      <div className="pricing-content">
                        <ul>
                          <li>{t('Sve iz osnovnog paketa')}</li>
                          <li>{t('Provjera i osnovna optimizacija za pretraživače (SEO)')}</li>
                          <li>{t('Pothranjivanje(BackUP) sajta jednom nedeljno')}</li>
                          <li>{t('Tehnička podrška i uklanjanje tehničkih i sistemskih grešaka (odgovor do 48 sati)')}</li>
                          <li>{t('Uklanjanje spama i neželjenog sadržaja')}</li>
                          <li>{t('Manje izmene na sajtu (do 3 zahtjeva mesečno)')}</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  {/* Korporacijski paket */}
                  <div className="col-xl-4 col-md-6">
                    <div className="pricing-card">
                      <div className="pricing-top">
                        <div className="left">
                          <span>{t('Korporacijski paket')}</span>
                          <h2><sup>€</sup>99<sub>{t('/Mjesečno')}</sub></h2>
                        </div>
                        <div className="right">
                          <img src="assets/img/home-3/pricing-vec2.svg" alt="" />
                        </div>
                      </div>
                      <div className="pricing-content">
                        <ul>
                          <li>{t('Sve iz naprednog paketa')}</li>
                          <li>{t('Kontinuirano praćenje dostupnosti sajta (24/7)')}</li>
                          <li>{t('Dnevno automatsko pothranjivanje(BackUp) podataka')}</li>
                          <li>{t('Prioritetna tehnička podrška i uklanjanje tehničkih i sistemskih grešaka (odgovor do 24 sati)')}</li>
                          <li>{t('Neograničene tehničke izmene i podrška')}</li>
                          <li>{t('Mjesečni izveštaji o radu sajta, bezbednosti i SEO stanju')}</li>
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
