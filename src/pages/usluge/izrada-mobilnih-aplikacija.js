import Breadcrumb from "@/components/common/Breadcrumb";
import Layout from "@/components/layout/Layout";
import Link from "next/link";
import React from "react";

function ServiceDetailsPage() {
  return (
    <Layout>
      <head>
        <meta charSet="UTF-8" />
        <title>Izrada Mobilnih Aplikacija | Android & iOS | Digital Artefakt</title>
        <meta
          name="description"
          content="Profesionalna izrada mobilnih aplikacija za Android i iOS. Razvoj stabilnih, brzih i sigurnih aplikacija sa modernim dizajnom i intuitivnim korisničkim iskustvom."
        />
        <meta
          name="keywords"
          content="mobilne aplikacije, izrada aplikacija, Android aplikacije, iOS aplikacije, razvoj aplikacija, React Native, Flutter, aplikacije Crna Gora, aplikacije Bar"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="../assets/img/logo.png" type="image/png" />

        {/* Open Graph */}
        <meta property="og:title" content="Izrada Mobilnih Aplikacija | Digital Artefakt" />
        <meta
          property="og:description"
          content="Razvijamo moderne mobilne aplikacije za Android i iOS. Stabilna i brza rešenja, intuitivan dizajn i sigurnost podataka."
        />
        <meta property="og:image" content="https://www.digital-artefakt.me/assets/img/logo.png" />
        <meta property="og:url" content="https://www.digital-artefakt.me/usluge/mobilne-aplikacije" />
        <meta property="og:type" content="website" />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Izrada Mobilnih Aplikacija | Digital Artefakt" />
        <meta
          name="twitter:description"
          content="Profesionalni razvoj mobilnih aplikacija za Android i iOS uređaje. Brza, sigurna i moderna rešenja."
        />
        <meta name="twitter:image" content="https://www.digital-artefakt.me/assets/img/logo.png" />

        {/* Canonical */}
        <link rel="canonical" href="https://www.digital-artefakt.me/usluge/mobilne-aplikacije" />
      </head>

      <Breadcrumb
        pageList="Izrada mobilnih aplikacija"
        title="Profesionalni razvoj mobilnih aplikacija"
        pageName="Izrada mobilnih aplikacija"
      />

      <div className="service-details section-padding">
        <div className="container">
          <div className="row">
            <div className="col-lg-8 col-md-12">
              <div className="service-details-content">
                <div className="image">
                  <img src="../assets/img/mobile.png" alt="Izrada mobilnih aplikacija" />
                </div>
                <h3>Izrada Mobilnih Aplikacija</h3>
                <p>
                  Mobilne aplikacije su danas ključni alat za svako ozbiljno poslovanje. Naš tim razvija
                  moderne, intuitivne i brze aplikacije za <strong>Android</strong> i <strong>iOS</strong>
                  platforme koristeći najnovije tehnologije poput React Native i Flutter frameworka.
                </p>
                <p>
                  Bilo da vam je potrebna aplikacija za e-trgovinu, rezervacije, interne procese ili
                  unapređenje korisničkog iskustva – mi nudimo rešenja koja su sigurna, skalabilna i
                  prilagođena vašim potrebama.
                </p>

                <h4>Šta dobijate sa nama?</h4>
                <ul>
                  <li>✔️ Izrada aplikacija za Android i iOS platforme</li>
                  <li>✔️ Cross-platform rešenja (React Native, Flutter)</li>
                  <li>✔️ Moderni i intuitivni UX/UI dizajn</li>
                  <li>✔️ API integracije i baza podataka</li>
                  <li>✔️ Push notifikacije i praćenje statistike</li>
                  <li>✔️ Održavanje i podrška nakon lansiranja</li>
                </ul>

                <p>
                  Naš cilj je da vaša aplikacija ne bude samo funkcionalna, već i atraktivna, laka za
                  korišćenje i optimizovana za najbolje performanse.
                </p>

                <div className="mt-4">
                  <Link href="/kontakt" className="primary-btn3">
                    Zatražite ponudu
                  </Link>
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <div className="col-lg-4 col-md-12">
              <div className="service-sidebar">
                <div className="widget categories">
                  <h4>Naše usluge</h4>
                  <ul>
                    <li>
                      <Link href="/usluge/web-dizajn">Web Dizajn</Link>
                    </li>
                    <li>
                      <Link href="/usluge/mobilne-aplikacije">Izrada Mobilnih Aplikacija</Link>
                    </li>
                    <li>
                      <Link href="/usluge/digitalni-marketing">Digitalni Marketing</Link>
                    </li>
                    <li>
                      <Link href="/usluge/graficki-dizajn">Grafički Dizajn</Link>
                    </li>
                  </ul>
                </div>

                <div className="widget contact-widget">
                  <div className="contact-form-wrap">
                        <div className="form-tltle">
                        <h5>Make a Free Consulting</h5>
            </div>
            <div className="contact-form-wrap">
                <div className="form-tltle">
                  <h5>Imate pitanje?</h5>
                </div>
                <div className="contact-form">
                  <form>
                    <div className="row">
                      <div className="col-md-12 mb-20">
                        <div className="form-inner">
                          <label>Ime i prezime</label>
                          <input type="text" placeholder="Unesite ime i prezime" />
                        </div>
                      </div>
                      <div className="col-lg-12 mb-20">
                        <div className="form-inner">
                          <label>Email adresa</label>
                          <input type="email" placeholder="Unesite email" />
                        </div>
                      </div>
                      <div className="col-lg-12 mb-20">
                        <div className="form-inner">
                          <label>Telefon</label>
                          <input type="tel" placeholder="Unesite broj telefona" />
                        </div>
                      </div>
                      <div className="col-lg-12 mb-20">
                        <div className="form-inner">
                          <label>Poruka</label>
                          <textarea placeholder="Vaša poruka..." />
                        </div>
                      </div>
                      <div className="col-lg-12">
                        <div className="form-inner">
                          <button className="primary-btn3" type="submit">
                            Pošalji poruku
                          </button>
                        </div>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
          </div>
                </div>
              </div>
            </div>
            {/* End Sidebar */}
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default ServiceDetailsPage;
