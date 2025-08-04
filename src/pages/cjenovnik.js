import Breadcrumb from "@/components/common/Breadcrumb";
import Layout from "@/components/layout/Layout";
import React from "react";
import Link from "next/link";
import Head from "next/head";

function Pricing2Page() {
  return (
    <Layout>
      <head>
  <meta charset="UTF-8" />
  <title>SEO Optimizacija Sajta | Povećaj Vidljivost i Posjete | Digital Artefakt</title>
  <meta name="description" content="Strateška i detaljna SEO optimizacija sajta za bolje pozicije na Google pretrazi. Povećaj broj posjeta, upita i konverzija uz Digital Artefakt." />
  <meta name="keywords" content="SEO optimizacija, optimizacija za pretraživače, SEO analiza, ključne riječi, backlinkovi, tehnička SEO, sadržajna SEO, Digital Artefakt" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <link rel="icon" href="/assets/img/logo.png" type="image/png" />

  <meta property="og:title" content="SEO Optimizacija Sajta | Digital Artefakt" />
  <meta property="og:description" content="Pružamo kvalitetnu SEO uslugu – detaljna analiza, optimizacija sajta i sadržaja, izgradnja linkova i kontinuirano praćenje rezultata." />
  <meta property="og:image" content="/assets/img/logo.png" />
  <meta property="og:url" content="https://www.digital-artefakt.me/seo-optimizacija" />
  <meta property="og:type" content="website" />

  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:title" content="SEO Optimizacija Sajta | Digital Artefakt" />
  <meta name="twitter:description" content="Unaprijedi online prisustvo svog biznisa uz profesionalnu SEO optimizaciju i povećaj broj posjeta." />
  <meta name="twitter:image" content="/assets/img/logo.png" />
</head>

      <Breadcrumb pageList="Cjenovnik" title="Cjenovni plan usluge" pageName="Cjenovnik" />
      <div className="home4-pricing-plan">
        <div className="container-fluid">
          <div
            className="row wow animate fadeInUp"
            data-wow-delay="200ms"
            data-wow-duration="1500ms"
          >
            <div className="col-lg-12">
              <div className="section-title-4 two text-center">
                <h2>Izaberite opciju koja vam najviše odgovara</h2>
                <p>
                  Usluge izrade web sajtova i aplikacija – od jednostavnih prezentacija do naprednih sistema.
                  Odaberi paket koji odgovara tvojim potrebama.
                </p>
                <nav>
                  <div className="nav nav-tabs" id="nav-tab" role="tablist">
                    <button
                      className="nav-link active"
                      id="nav-home-tab"
                      data-bs-toggle="tab"
                      data-bs-target="#nav-home"
                      type="button"
                      role="tab"
                      aria-controls="nav-home"
                      aria-selected="true"
                    >
                      Jednokratno
                    </button>
                    <button
                      className="nav-link"
                      id="nav-profile-tab"
                      data-bs-toggle="tab"
                      data-bs-target="#nav-profile"
                      type="button"
                      role="tab"
                      aria-controls="nav-profile"
                      aria-selected="false"
                    >
                      mjesečno
                    </button>
                  </div>
                </nav>
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col-lg-12">
              <div className="tab-content" id="nav-tabContent">
                {/* Jednokratno (Web razvoj paketi) */}
                <div
                  className="tab-pane fade show active"
                  id="nav-home"
                  role="tabpanel"
                  aria-labelledby="nav-home-tab"
                  tabIndex={0}
                >
                  <div className="row g-4 align-items-center justify-content-center">

                    {/* Osnovni paket */}
                    <div
                      className="col-xl-4 col-md-6 wow animate fadeInLeft"
                      data-wow-delay="200ms"
                      data-wow-duration="1500ms"
                    >
                      <div className="pricing-card">
                        <div className="pricing-top">
                          <span>Osnovni paket</span>
                          <h2>€290<sub>/Jednokratno</sub></h2>
                        </div>
                        <div className="pricing-content">
                          <ul>
                            <li>Jednostavan prezentacioni sajt (do 5 sekcija)</li>
                            <li>Responzivan dizajn prilagođen mobilnim uređajima</li>
                            <li>Osnovna kontakt forma</li>
                            <li>Brza isporuka (do 5 dana)</li>
                            <li>Podrška mjesec dana nakon isporuke</li>
                            <li>Pogodno za frilensere i male firme</li>
                            <li>Bez CMS-a i dinamičkog sadržaja</li>
                          </ul>
                          <div className="pay-btn">
                            <Link className="primary-btn3" href="/kontakt">
                              Započni razvoj
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Profesionalni paket */}
                    <div
                      className="col-xl-4 col-md-6 wow animate fadeInUp"
                      data-wow-delay="400ms"
                      data-wow-duration="1500ms"
                    >
                      <div className="pricing-card two">
                        <div className="pricing-top">
                          <span>Profesionalni paket</span>
                          <h2>€599<sub>/Jednokratno</sub></h2>
                        </div>
                        <div className="pricing-content">
                          <ul>
                            <li>Web sajt sa do 10 stranica</li>
                            <li>CMS integracija (npr. WordPress)</li>
                            <li>Napredne forme i galerije</li>
                            <li>Osnovna SEO optimizacija</li>
                            <li>Integracija sa društvenim mrežama</li>
                            <li>Tehnička podrška 30 dana</li>
                            <li>Pogodno za manje kompanije i brendove</li>
                          </ul>
                          <div className="pay-btn">
                            <Link className="primary-btn3" href="/kontakt">
                              Započni razvoj
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Korporacijski paket */}
                    <div
                      className="col-xl-4 col-md-6 wow animate fadeInRight"
                      data-wow-delay="300ms"
                      data-wow-duration="1500ms"
                    >
                      <div className="pricing-card">
                        <div className="pricing-top">
                          <span>Korporacijski paket</span>
                          <h2>€1999<sub>/Jednokratno</sub></h2>
                        </div>
                        <div className="pricing-content">
                          <ul>
                            <li>Web aplikacija ili kompleksan sajt (custom development)</li>
                            <li>Admin panel, korisnički nalozi, baze podataka</li>
                            <li>API integracije, plaćanja, napredna funkcionalnost</li>
                            <li>UI/UX dizajn po mjeri (jedinstven dizajn)</li>
                            <li>Optimizacija performansi i sigurnosti</li>
                            <li>60 dana podrške i održavanja</li>
                            <li>Idealno za veće kompanije, SaaS projekte i e-commerce sisteme</li>
                          </ul>
                          <div className="pay-btn">
                            <Link className="primary-btn3" href="/kontakt">
                              Započni razvoj
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* mjesečno (Održavanje paketi) */}
                <div
                  className="tab-pane fade"
                  id="nav-profile"
                  role="tabpanel"
                  aria-labelledby="nav-profile-tab"
                  tabIndex={0}
                >
                  <div className="row g-4 align-items-center justify-content-center">

                    {/* Osnovni paket */}
                    <div className="col-xl-4 col-md-6">
                      <div className="pricing-card">
                        <div className="pricing-top">
                          <span>Osnovni paket</span>
                          <h2>€29<sub>/Mjesečno</sub></h2>
                        </div>
                        <div className="pricing-content">
                          <ul>
                            <li>Redovno ažuriranje sajta i dodataka</li>
                            <li>Osnovna provera bezbjednosti sajber infrastrukture</li>
                            <li>Pothranjivanje (BackUp) sajta</li>
                            <li>Tehnička podrška i otklanjanje sistemskih grešaka</li>
                            <li>Praćenje dostupnosti sajta (osnovni nivo)</li>
                          </ul>
                          <div className="pay-btn">
                            <Link className="primary-btn3" href="/kontakt">
                              Započni razvoj
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Napredni paket */}
                    <div className="col-xl-4 col-md-6">
                      <div className="pricing-card two">
                        <div className="pricing-top">
                          <span>Napredni paket</span>
                          <h2>€59<sub>/Mjesečno</sub></h2>
                        </div>
                        <div className="pricing-content">
                          <ul>
                            <li>Sve iz osnovnog paketa</li>
                            <li>Provjera i osnovna optimizacija za pretraživače (SEO)</li>
                            <li>Pothranjivanje (BackUp) sajta jednom nedeljno</li>
                            <li>Tehnička podrška i uklanjanje tehničkih i sistemskih grešaka (odgovor do 48 sati)</li>
                            <li>Uklanjanje spama i neželjenog sadržaja</li>
                            <li>Manje izmene na sajtu (do 3 zahtjeva mjesečno)</li>
                          </ul>
                          <div className="pay-btn">
                            <Link className="primary-btn3" href="/kontakt">
                              Započni razvoj
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Korporacijski paket */}
                    <div className="col-xl-4 col-md-6">
                      <div className="pricing-card">
                        <div className="pricing-top">
                          <span>Korporacijski paket</span>
                          <h2>€99<sub>/Mjesečno</sub></h2>
                        </div>
                        <div className="pricing-content">
                          <ul>
                            <li>Sve iz naprednog paketa</li>
                            <li>Kontinuirano praćenje dostupnosti sajta (24/7)</li>
                            <li>Dnevno automatsko pothranjivanje (BackUp) podataka</li>
                            <li>Prioritetna tehnička podrška i uklanjanje tehničkih i sistemskih grešaka (odgovor do 24 sata)</li>
                            <li>Do 10 izmjena i ažuriranja mjesečno</li>
                            <li>Redovna bezbednosna ažuriranja i revizije sistema</li>
                          </ul>
                          <div className="pay-btn">
                            <Link className="primary-btn3" href="/kontakt">
                              Započni razvoj
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>

                  </div>
                </div>
              </div>
            </div>
          </div>
          <div style={{marginTop:50}} className="col-lg-12">
  <div className="section-title-4 two text-center">
    <h2>Izaberite opciju za oglašavanje</h2>
    <p>
      Odaberite između Google Ads i Meta Ads paketa koji vam najviše odgovaraju.
    </p>
    <nav>
      <div className="nav nav-tabs" id="nav-tab-ads" role="tablist">
        <button
          className="nav-link active"
          id="nav-google-tab"
          data-bs-toggle="tab"
          data-bs-target="#nav-google"
          type="button"
          role="tab"
          aria-controls="nav-google"
          aria-selected="true"
        >
          Google Ads
        </button>
        <button
          className="nav-link"
          id="nav-meta-tab"
          data-bs-toggle="tab"
          data-bs-target="#nav-meta"
          type="button"
          role="tab"
          aria-controls="nav-meta"
          aria-selected="false"
        >
          Meta Ads
        </button>
      </div>
    </nav>
  </div>
</div>

<div className="row">
  <div className="col-lg-12">
    <div className="tab-content" id="nav-tabContent-ads">

      {/* Google Ads tab */}
      <div
        className="tab-pane fade show active"
        id="nav-google"
        role="tabpanel"
        aria-labelledby="nav-google-tab"
        tabIndex={0}
      >
        <div className="row g-4 align-items-center justify-content-center">

          {/* Osnovni paket */}
          <div className="col-xl-4 col-md-6 wow animate fadeInLeft" data-wow-delay="200ms" data-wow-duration="1500ms">
            <div className="pricing-card">
              <div className="pricing-top">
                <span>Osnovni paket</span>
                <h2>€100<sub>/mjesečno</sub></h2>
              </div>
              <div className="pricing-content">
                <ul>
                  <li>Osnovna Google Ads kampanja</li>
                  <li>Postavljanje oglasa i osnovna optimizacija</li>
                  <li>Praćenje performansi</li>
                  <li>Podrška do 5 dana</li>
                </ul>
                <div className="pay-btn">
                  <a className="primary-btn3" href="#">
                    Započni uslugu
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Profesionalni paket */}
          <div className="col-xl-4 col-md-6 wow animate fadeInUp" data-wow-delay="400ms" data-wow-duration="1500ms">
            <div className="pricing-card two">
              <div className="pricing-top">
                <span>Profesionalni paket</span>
                <h2>€250<sub>/mjesečno</sub></h2>
              </div>
              <div className="pricing-content">
                <ul>
                  <li>Detaljna kampanja sa više oglasa</li>
                  <li>Napredna optimizacija i testiranje</li>
                  <li>Izveštaji i analize</li>
                  <li>Podrška 30 dana</li>
                </ul>
                <div className="pay-btn">
                  <a className="primary-btn3" href="#">
                    Započni uslugu
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Korporacijski paket */}
          <div className="col-xl-4 col-md-6 wow animate fadeInRight" data-wow-delay="300ms" data-wow-duration="1500ms">
            <div className="pricing-card">
              <div className="pricing-top">
                <span>Korporacijski paket</span>
                <h2>€800<sub>/mjesečno</sub></h2>
              </div>
              <div className="pricing-content">
                <ul>
                  <li>Kompleksne Google Ads kampanje i strategije</li>
                  <li>Multikanalni marketing</li>
                  <li>Prioritetna podrška i prilagođavanje</li>
                  <li>Podrška 60 dana</li>
                </ul>
                <div className="pay-btn">
                  <a className="primary-btn3" href="#">
                    Započni uslugu
                  </a>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* Meta Ads tab */}
      <div
        className="tab-pane fade"
        id="nav-meta"
        role="tabpanel"
        aria-labelledby="nav-meta-tab"
        tabIndex={0}
      >
        <div className="row g-4 align-items-center justify-content-center">

          {/* Osnovni paket */}
          <div className="col-xl-4 col-md-6">
            <div className="pricing-card">
              <div className="pricing-top">
                <span>Osnovni paket</span>
                <h2>€50<sub>/mjesečno</sub></h2> {/* 100 / 2 = 50 */}
              </div>
              <div className="pricing-content">
                <ul>
                  <li>Osnovna Meta Ads kampanja (Facebook, Instagram)</li>
                  <li>Postavljanje i upravljanje oglasima</li>
                  <li>Praćenje rezultata i optimizacija</li>
                  <li>Podrška do 5 dana</li>
                </ul>
                <div className="pay-btn">
                  <a className="primary-btn3" href="#">
                    Započni uslugu
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Profesionalni paket */}
          <div className="col-xl-4 col-md-6">
            <div className="pricing-card two">
              <div className="pricing-top">
                <span>Profesionalni paket</span>
                <h2>€125<sub>/mjesečno</sub></h2> {/* 250 / 2 = 125 */}
              </div>
              <div className="pricing-content">
                <ul>
                  <li>Detaljne Meta Ads kampanje i ciljane grupe</li>
                  <li>Napredna optimizacija i testiranje</li>
                  <li>Izveštaji i analize</li>
                  <li>Podrška 30 dana</li>
                </ul>
                <div className="pay-btn">
                  <a className="primary-btn3" href="#">
                    Započni uslugu
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Korporacijski paket */}
          <div className="col-xl-4 col-md-6">
            <div className="pricing-card">
              <div className="pricing-top">
                <span>Korporacijski paket</span>
                <h2>€400<sub>/mjesečno</sub></h2> {/* 800 / 2 = 400 */}
              </div>
              <div className="pricing-content">
                <ul>
                  <li>Kompleksne Meta Ads strategije</li>
                  <li>Multikanalno oglašavanje</li>
                  <li>Prioritetna podrška i prilagođavanje</li>
                  <li>Podrška 60 dana</li>
                </ul>
                <div className="pay-btn">
                  <a className="primary-btn3" href="#">
                    Započni uslugu
                  </a>
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
      </div>
    </Layout>
  );
}

export default Pricing2Page;
