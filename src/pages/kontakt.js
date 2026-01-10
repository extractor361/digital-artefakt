import React, { useEffect, useState } from "react";
import Head from "next/head";
import Layout from "@/components/layout/Layout";
import Breadcrumb from "@/components/common/Breadcrumb";

function Contactpage() {
  const [success, setSuccess] = useState("");
  const [isViber, setIsViber] = useState(false);
  const [isRestaurant, setIsRestaurant] = useState(false);
  const [isShop, setIsShop] = useState(false);

  useEffect(() => {
    // DETEKCIJA SOURCE PARAMETRA
    const params = new URLSearchParams(window.location.search);
    const source = params.get("source");

    if (source === "viber") setIsViber(true);
    if (source === "restaurant") setIsRestaurant(true);
    if (source === "shop") setIsShop(true);

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

          if (isShop) {
            status.innerText =
              "Prijava je poslata! Javljamo se uskoro sa analizom vašeg web shopa i konkretnim prijedlozima za veću prodaju.";
          } else if (isViber) {
            status.innerText =
              "Poruka je poslata! Javljamo se uskoro da vidimo kako da vam telefon češće zvoni.";
          } else if (isRestaurant) {
            status.innerText =
              "Poruka je poslata! Javljamo se uskoro da vidimo kako da dobijete više rezervacija i porudžbina.";
          } else {
            status.innerText = "Poruka je uspješno poslata! Javićemo se uskoro.";
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
  }, [isShop, isViber, isRestaurant]);

  return (
    <>
      <Head>
        <title>Kontakt | Digital Artefakt</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <Layout>
        <Breadcrumb pageList="Kontakt" title="Za firme i poslovne subjekte" pageName="Kontakt" />

        <div className="contact-page-wrap sec-mar">
          <div className="container">
            <div className="row g-lg-4 gy-5">

              {/* LIJEVA STRANA */}
              <div className="col-lg-6">
                <div className="contact-content">
                  <span>POUZDAN PARTNER ZA FIRME U CRNOJ GORI</span>

                  <h2>
                    {isShop
                      ? "Besplatna analiza vašeg web shopa"
                      : isRestaurant
                      ? "Više rezervacija i porudžbina za vaš restoran"
                      : isViber
                      ? "Više poziva sa Google-a za majstore i servise"
                      : "Digital Artefakt — Partner za rast i modernizaciju poslovanja"}
                  </h2>

                  <p>
                    {isShop ? (
                      <>
                        Kupci već traže proizvode poput vaših – pitanje je da li ih kupuju kod vas.
                        <br />
                        Analiziramo vaš web shop, ponudu i marketing i pokazujemo gdje gubite prodaju
                        i kako to da popravite.
                      </>
                    ) : isRestaurant ? (
                      <>
                        Ako vaš restoran nije vidljiv na Google-u, gosti biraju druge.
                        <br />
                        Pomažemo restoranima da dobiju više direktnih rezervacija i porudžbina,
                        bez provizije.
                      </>
                    ) : isViber ? (
                      <>
                        Ako vas nema među prvima na Google-u, klijenti zovu druge.
                        <br />
                        Pomažemo majstorima i servisima da dobiju više poziva i posla.
                      </>
                    ) : (
                      <>
                        Razvijamo funkcionalne web sisteme i digitalna rješenja prilagođena vašem poslovanju.
                      </>
                    )}
                  </p>

                  {(isShop || isViber || isRestaurant) && (
                    <p style={{ fontWeight: 600 }}>
                      ⭐ Fokus na rezultate • 5★ ocjene • Mjerljivi rast
                    </p>
                  )}

                  <p>
                    Pozovite nas na{" "}
                    <a href="tel:+38268062361">
                      <strong>+382 68 062 361</strong>
                    </a>{" "}
                    ili popunite formu. Odgovaramo najčešće u toku istog dana.<br></br>
                    ⭐ Preko 50+ firmi nam je povjerilo digitalni razvoj.
                  </p>
                </div>
              </div>

              {/* DESNA STRANA – FORMA */}
              <div className="col-lg-6">
                <div className="contact-form-wrap">
                  <div className="form-tltle">
                    <h5>
                      {isShop
                        ? "Zatražite besplatnu analizu"
                        : isRestaurant
                        ? "Zatražite više rezervacija"
                        : isViber
                        ? "Zatražite više poziva sa Google-a"
                        : "Besplatna analiza"}
                    </h5>
                  </div>

                  <div className="contact-form">
                    <form id="kontakt-form">

                      {/* SKRIVENI PARAMETRI */}
                      <input
                        type="hidden"
                        name="source"
                        value={
                          isShop
                            ? "shop"
                            : isRestaurant
                            ? "restaurant"
                            : isViber
                            ? "viber"
                            : "website"
                        }
                      />
                      <input
                        type="hidden"
                        name="audience"
                        value={
                          isShop
                            ? "ecommerce"
                            : isRestaurant
                            ? "restoran"
                            : isViber
                            ? "majstor"
                            : "general"
                        }
                      />

                      <div className="row">
                        <div className="col-lg-12 mb-20">
                          <div className="form-inner">
                            <label>Ime i prezime *</label>
                            <input
                              type="text"
                              name="ime"
                              required
                              placeholder={
                                isShop
                                  ? "Ime i prezime / naziv firme"
                                  : "Ime i prezime / naziv objekta"
                              }
                            />
                          </div>
                        </div>

                        <div className="col-lg-12 mb-20">
                          <div className="form-inner">
                            <label>Email</label>
                            <input type="email" name="email" placeholder="vaš@email.com" />
                          </div>
                        </div>

                        <div className="col-lg-12 mb-20">
                          <div className="form-inner">
                            <label>Djelatnost</label>
                            <input
                              type="text"
                              name="djelatnost"
                              placeholder={
                                isShop
                                  ? "npr. butik, prodavnica, pet shop, cvjećara"
                                  : isRestaurant
                                  ? "npr. restoran, pizzeria, konoba"
                                  : isViber
                                  ? "npr. električar, limar, klima servis"
                                  : "Advokat, restoran, salon..."
                              }
                            />
                          </div>
                        </div>

                        <div className="col-lg-12 mb-20">
                          <div className="form-inner">
                            <label>Kontakt telefon *</label>
                            <input
                              type="tel"
                              name="telefon"
                              required
                              placeholder="+382 69 123 456"
                            />
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
                                isShop
                                  ? "Napišite čime se bavite, koje proizvode/prodaju planirate i u kom gradu poslujete."
                                  : isRestaurant
                                  ? "U kom gradu se nalazite i da li imate dostavu / rezervacije?"
                                  : isViber
                                  ? "Čime se bavite i u kom gradu radite?"
                                  : "Napišite vašu poruku"
                              }
                            />
                          </div>
                        </div>

                        <div className="col-lg-12">
                          <div className="form-inner">
                            <button
                              className="primary-btn3"
                              type="button"
                              id="kontakt-submit-btn"
                            >
                              {isShop
                                ? "Zatraži besplatnu analizu"
                                : isRestaurant
                                ? "Želim više rezervacija"
                                : isViber
                                ? "Želim više poziva"
                                : "Pošaljite upit"}
                            </button>
                          </div>
                        </div>
                      </div>
                    </form>

                    <p id="kontakt-status" style={{ marginTop: 20, fontWeight: 600 }} />

                    {(isShop || isViber || isRestaurant) && (
                      <p
                        style={{
                          marginTop: 10,
                          fontSize: 13,
                          opacity: 0.8,
                          color: "white",
                        }}
                      >
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
