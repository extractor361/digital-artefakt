import React, { useEffect, useState } from "react";
import Head from "next/head";
import Layout from "@/components/layout/Layout";
import Breadcrumb from "@/components/common/Breadcrumb";

function Contactpage() {
  const [success, setSuccess] = useState("");
  const [isViber, setIsViber] = useState(false);

  useEffect(() => {
    // DETEKCIJA SOURCE PARAMETRA
    const params = new URLSearchParams(window.location.search);
    if (params.get("source") === "viber") {
      setIsViber(true);
    }

    const btn = document.getElementById("kontakt-submit-btn");
    const status = document.getElementById("kontakt-status");

    if (!btn) return;

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
if(isViber){
  status.innerText = "Poruka je poslata! Javljamo se uskoro da vidimo kako da vam telefon češće zvoni."
}
else{status.innerText = "Poruka je uspješno poslata! Javićemo se uskoro.";          
}
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
        <title>Kontakt | Digital Artefakt</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <Layout>
        <Breadcrumb pageList="Kontakt" title="Kontaktirajte nas" pageName="KONTAKT" />

        <div className="contact-page-wrap sec-mar">
          <div className="container">
            <div className="row g-lg-4 gy-5">

              {/* LIJEVA STRANA */}
              <div className="col-lg-6">
                <div className="contact-content">
                  <span>KONTAKTIRAJTE NAS</span>

                  <h2>
                    {isViber
                      ? "Više poziva sa Google-a za majstore i servise"
                      : "Digital Artefakt – Vaš partner za digitalni rast"}
                  </h2>

                  <p>
                    {isViber ? (
                      <>
                        Ako vas nema među prvima na Google-u, klijenti zovu druge.
                        <br />
                        Pomažemo majstorima i servisima da dobiju više poziva i posla.
                      </>
                    ) : (
                      <>
                        Podignite svoje poslovanje na viši nivo uz Digital Artefakt —
                        vašeg partnera za SEO, web, marketing i strategiju.
                      </>
                    )}
                  </p>

                  {isViber && (
                    <p style={{ fontWeight: 600 }}>
                      ⭐ Fokus na zanatlije • 5★ ocjene • Mjerljivi rezultati
                    </p>
                  )}

                  <p>
                    Pozovite nas na{" "}
                    <a href="tel:+38268062361">
                      <strong>+382 68 062 361</strong>
                    </a>{" "}
                    ili popunite formu.
                  </p>
                </div>
              </div>

              {/* DESNA STRANA – FORMA */}
              <div className="col-lg-6">
                <div className="contact-form-wrap">
                  <div className="form-tltle">
                    <h5>
                      {isViber ? "Zatražite više poziva sa Google-a" : "Kontakt forma"}
                    </h5>
                  </div>

                  <div className="contact-form">
                    <form id="kontakt-form">

                      {/* SKRIVENI PARAMETRI */}
                      <input type="hidden" name="source" value={isViber ? "viber" : "website"} />
                      <input type="hidden" name="audience" value={isViber ? "majstor" : "general"} />

                      <div className="row">
                        <div className="col-lg-12 mb-20">
                          <div className="form-inner">
                            <label>Ime i prezime *</label>
                            <input type="text" name="ime" required placeholder="Ime i prezime / naziv firme" />
                          </div>
                        </div>

                        <div className="col-lg-12 mb-20">
                          <div className="form-inner">
                            <label>Email </label>
                            <input type="email" name="email"  placeholder="vaš@email.com" />
                          </div>
                        </div>

                        <div className="col-lg-12 mb-20">
                          <div className="form-inner">
                            <label>Djelatnost</label>
                            <input
                              type="text"
                              name="djelatnost"
                              placeholder={
                                isViber
                                  ? "npr. električar, limar, klima servis"
                                  : "Advokat, restoran, salon..."
                              }
                            />
                          </div>
                        </div>

                        <div className="col-lg-12 mb-20">
                          <div className="form-inner">
                            <label>Kontakt telefon *</label>
                            <input type="tel" name="telefon" required placeholder="+382 69 123 456" />
                          </div>
                        </div>

                        <div className="col-lg-12 mb-20">
                          <div className="form-inner">
                            <label>Vaša poruka *</label>
                            <textarea
                              name="poruka"
                              required
                              rows={5}
                              placeholder={
                                isViber
                                  ? "Čime se bavite i u kom gradu radite?"
                                  : "Napišite vašu poruku"
                              }
                            />
                          </div>
                        </div>

                        <div className="col-lg-12">
                          <div className="form-inner">
                            <button className="primary-btn3" type="button" id="kontakt-submit-btn">
                              {isViber ? "Želim više poziva" : "Pošaljite poruku"}
                            </button>
                          </div>
                        </div>
                      </div>
                    </form>

                    <p id="kontakt-status" style={{ marginTop: 20, fontWeight: 600 }} />

                    {isViber && (
                      <p style={{ marginTop: 10, fontSize: 13, opacity: 0.8, color:"white" }}>
                        🔒 Podatke koristimo samo da vas kontaktiramo. Bez spama.
                      </p>
                    )}
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
