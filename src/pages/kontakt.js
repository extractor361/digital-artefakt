import React, { useEffect, useState } from "react";
import Head from "next/head";
import Layout from "@/components/layout/Layout";
import Breadcrumb from "@/components/common/Breadcrumb";

function Contactpage() {
  const [success, setSuccess] = useState("");

  useEffect(() => {
    const btn = document.getElementById("kontakt-submit-btn");
    const status = document.getElementById("kontakt-status");

    btn.onclick = async () => {
      const form = document.getElementById("kontakt-form");
      const formData = new FormData(form);

      const json = {};
      formData.forEach((value, key) => {
        json[key] = value;
      });

      status.style.color = "#444";
      status.innerText = "Slanje poruke...";

      try {
        const res = await fetch("/api/contact", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(json),
        });

        const out = await res.json();

        if (out.ok) {
          status.style.color = "green";
          status.innerText = "Poruka uspješno poslata! Javićemo se uskoro.";
          form.reset();
        } else {
          status.style.color = "red";
          status.innerText = "Greška prilikom slanja.";
        }
      } catch (err) {
        status.style.color = "red";
        status.innerText = "Server nije dostupan.";
      }
    };
  }, []);

  return (
    <>
      <Head>
        <title>Kontakt | Digital Artefakt | Digitalna agencija i SEO konsultacije</title>
        <meta
          name="description"
          content="Kontaktirajte Digital Artefakt – vašu digitalnu agenciju za web dizajn, SEO optimizaciju i digitalni marketing. Zakazivanje konsultacija i profesionalna podrška."
        />
        <meta
          name="keywords"
          content="kontakt digitalna agencija, SEO konsultacije, web dizajn, digitalni marketing, zakazivanje konsultacija, podrška Digital Artefakt"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/assets/img/logo.png" type="image/png" />

        <meta property="og:title" content="Kontakt | Digital Artefakt" />
        <meta
          property="og:description"
          content="Pošaljite nam poruku i saznajte kako možemo pomoći vašem biznisu da raste kroz digitalne usluge i SEO optimizaciju."
        />
        <meta property="og:image" content="/assets/img/logo.png" />
        <meta property="og:url" content="https://www.digital-artefakt.me/kontakt" />
        <meta property="og:type" content="website" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Kontakt | Digital Artefakt" />
        <meta
          name="twitter:description"
          content="Kontakt forma za brzo i jednostavno zakazivanje konsultacija ili postavljanje pitanja našem stručnom timu."
        />
        <meta name="twitter:image" content="/assets/img/logo.png" />
      </Head>

      <Layout>
        <Breadcrumb pageList="Kontakt" title="Kontaktirajte nas" pageName="KONTAKT" />

        <div className="contact-page-wrap sec-mar">
          <div className="container">
            <div className="row g-lg-4 gy-5">

              <div className="col-lg-6">
                <div className="contact-content">
                  <span>KONTAKTIRAJTE NAS</span>
                  <h2>Digital Artefakt – Vaš partner za digitalni rast</h2>
                  <p>
                    Podignite svoje poslovanje na viši nivo uz Digital Artefakt — vašeg partnera za SEO, web, marketing i strategiju.
                  </p>
                  <p>
                    Kreiramo prilagođena digitalna rešenja koja donose rezultate. Javite nam se i rado ćemo vam pomoći.
                  </p>
                  <p>
                    Pozovite nas na{" "}
                    <a href="tel:+38268062361">
                      <strong>+382 68 062 361</strong>
                    </a>{" "}
                    ili popunite kontakt formu sa desne strane da zakažete konsultaciju.
                  </p>
                </div>
              </div>

              {/* DESNA STRANA – FORMA */}
              <div className="col-lg-6">
                <div className="contact-form-wrap">
                  <div className="form-tltle">
                    <h5>Kontakt forma</h5>
                  </div>

                  {success && (
                    <p style={{ color: "green", fontWeight: 600, marginBottom: 20 }}>
                      {success}
                    </p>
                  )}

                  <div className="contact-form">
                    <form id="kontakt-form">
                      <div className="row">
                        <div className="col-lg-12 mb-20">
                          <div className="form-inner">
                            <label htmlFor="ime">
                              Ime i prezime <span style={{ color: "red" }}>*</span>
                            </label>
                            <input id="ime" type="text" name="ime" required placeholder="Vaše ime i prezime" />
                          </div>
                        </div>

                        <div className="col-lg-12 mb-20">
                          <div className="form-inner">
                            <label htmlFor="email">
                              Email <span style={{ color: "red" }}>*</span>
                            </label>
                            <input id="email" type="email" name="email" required placeholder="vas@email.com" />
                          </div>
                        </div>

                        <div className="col-lg-12 mb-20">
                          <div className="form-inner">
                            <label htmlFor="djelatnost">Djelatnost</label>
                            <input id="djelatnost" type="text" name="djelatnost" placeholder="Advokat, restoran, salon..." />
                          </div>
                        </div>

                        <div className="col-lg-12 mb-20">
                          <div className="form-inner">
                            <label htmlFor="telefon">
                              Kontakt telefon <span style={{ color: "red" }}>*</span>
                            </label>
                            <input id="telefon" type="tel" name="telefon" required placeholder="+382 69 123 456" />
                          </div>
                        </div>

                        <div className="col-lg-12 mb-20">
                          <div className="form-inner">
                            <label htmlFor="poruka">
                              Vaša poruka <span style={{ color: "red" }}>*</span>
                            </label>
                            <textarea id="poruka" name="poruka" required placeholder="Napišite vašu poruku" rows={5} />
                          </div>
                        </div>

                        <div className="col-lg-12 mb-20">
                          <div className="form-inner">
                            <label htmlFor="dokument">Priložite dokument (opciono)</label>
                            <input id="dokument" type="file" name="dokument" />
                          </div>
                        </div>

                        <div className="col-lg-12">
                          <div className="form-inner">
                            <button className="primary-btn3" type="button" id="kontakt-submit-btn">
                              Pošaljite poruku
                            </button>
                          </div>
                        </div>
                      </div>
                    </form>

                    <p id="kontakt-status" style={{ marginTop: 20, fontWeight: 600 }}></p>

                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>
      </Layout>
    </>
  );
}

export default Contactpage;
