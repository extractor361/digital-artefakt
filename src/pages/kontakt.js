import React, { useEffect, useState } from "react";
import Head from "next/head";
import Layout from "@/components/layout/Layout";
import Breadcrumb from "@/components/common/Breadcrumb";

function Contactpage() {
  const [success, setSuccess] = useState("");
  const [isViber, setIsViber] = useState(false);
  const [isRestaurant, setIsRestaurant] = useState(false);
  const [isShop, setIsShop] = useState(false);
  const [isSmjestaj, setIsSmjestaj] = useState(false); 

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const source = params.get("source");

    if (source === "viber") setIsViber(true);
    if (source === "restaurant") setIsRestaurant(true);
    if (source === "shop") setIsShop(true);
    if (source === "smjestaj") setIsSmjestaj(true); 

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
          } else if (isSmjestaj) { 
            status.innerText =
              "Poruka je poslata! Javljamo se uskoro da vidimo kako da povećamo direktne rezervacije bez provizije.";
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
  }, [isShop, isViber, isRestaurant, isSmjestaj]);

  return (
    <>
      <Head>
        <title>Kontakt | Digital Artefakt – Web razvoj i digitalna rješenja za firme</title>

        <meta
          name="description"
          content="Kontaktirajte Digital Artefakt za izradu web sajtova, aplikacija, SEO optimizaciju i digitalno oglašavanje. Partner za rast i modernizaciju poslovanja u Crnoj Gori."
        />

        <meta
          name="keywords"
          content="kontakt Digital Artefakt, kontakt web agencija, web razvoj kontakt, izrada sajta kontakt, digitalna agencija Crna Gora, SEO kontakt, Google Ads kontakt, razvoj aplikacija"
        />

        <meta name="robots" content="index, follow" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="canonical" href="https://www.digital-artefakt.me/kontakt" />

        <meta property="og:title" content="Kontakt | Digital Artefakt" />
        <meta
          property="og:description"
          content="Kontakt za izradu web sajtova, aplikacija i digitalni marketing. Pišite nam ili pozovite – odgovaramo najčešće u toku istog dana."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.digital-artefakt.me/kontakt" />
        <meta property="og:image" content="https://www.digital-artefakt.me/og-image.jpg" />

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: `{
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              "name": "Digital Artefakt",
              "image": "https://www.digital-artefakt.me/og-image.jpg",
              "url": "https://www.digital-artefakt.me",
              "telephone": "+38268062361",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "Bulevar Revolucije C-7",
                "addressLocality": "Bar",
                "addressCountry": "ME"
              },
              "servesCuisine": "Digital Services",
              "priceRange": "$$",
              "description": "Web razvoj, aplikacije, SEO, digitalni marketing i modernizacija poslovanja za firme.",
              "areaServed": "Crna Gora",
              "email": "office@digital-artefakt.me"
            }`
          }}
        />
      </Head>

      <Layout>
        <Breadcrumb pageList="Kontakt" title="Za firme i poslovne subjekte" pageName="Kontakt" />

        <div className="contact-page-wrap sec-mar">
          <div className="container">
            <div className="row g-lg-4 gy-5">
              <div className="col-lg-6">
                <div className="contact-content">
                  <span>{isSmjestaj
                      ? "POUZDAN PARTNER ZA STANODAVCE U CRNOJ GORI" : isRestaurant
                      ? "Pouzdan partner za sve ugostitelje u Crnoj Gori"
                      : "POUZDAN PARTNER ZA FIRME U CRNOJ GORI"}</span>

                  <h2>
                    {isShop
                      ? "Besplatna analiza vašeg web shopa"
                      : isRestaurant
                      ? "Više rezervacija i porudžbina za vaš restoran"
                      : isViber
                      ? "Više poziva sa Google-a za majstore i servise"
                      : isSmjestaj
                      ? "Više direktnih rezervacija za vaš smještaj" // + smještaj
                      : "Digital Artefakt — Partner za rast i modernizaciju poslovanja"}
                  </h2>

                  <p>
                    {isShop && (
                      <>
                        Kupci već traže proizvode poput vaših – pitanje je da li ih kupuju kod vas.
                        <br />
                        Analiziramo vaš web shop, ponudu i marketing i pokazujemo gdje gubite prodaju
                        i kako to da popravite.
                      </>
                    )}

                    {isRestaurant && (
                      <>
                        Ako vaš restoran nije vidljiv na Google-u, gosti biraju druge.
                        <br />
                        Pomažemo restoranima da dobiju više direktnih rezervacija i porudžbina,
                        bez provizije.
                      </>
                    )}

                    {isViber && (
                      <>
                        Ako vas nema među prvima na Google-u, klijenti zovu druge.
                        <br />
                        Pomažemo majstorima i servisima da dobiju više poziva i posla.
                      </>
                    )}

                    {isSmjestaj && (
                      <>
                        Turisti danas rezervišu smještaj online. Direktne rezervacije znače veću zaradu bez provizije.
                        <br />
                        Pomažemo objektima da povećaju popunjenost i dobiju goste direktno. 
                        <br>
                        </br>Budite prvi u Google pretrazi.
                      </>
                    )}

                    {!isShop && !isRestaurant && !isViber && !isSmjestaj && (
                      <>Razvijamo funkcionalne web sisteme i digitalna rješenja prilagođena vašem poslovanju.</>
                    )}
                  </p>

                  {(isShop || isViber || isRestaurant || isSmjestaj) && (
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
                    ⭐ Preko 150+ firmi nam je povjerilo digitalni razvoj.
                  </p>
                </div>
              </div>

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
                        : isSmjestaj
                        ? "Zatražite više direktnih rezervacija"
                        : "Besplatna analiza"}
                  </h5>
                  </div>

                  <div className="contact-form">
                    <form id="kontakt-form">

                      <input
                        type="hidden"
                        name="source"
                        value={
                          isShop ? "shop" :
                          isRestaurant ? "restaurant" :
                          isViber ? "viber" :
                          isSmjestaj ? "smjestaj" :
                          "website"
                        }
                      />

                      <input
                        type="hidden"
                        name="audience"
                        value={
                          isShop ? "ecommerce" :
                          isRestaurant ? "restoran" :
                          isViber ? "majstor" :
                          isSmjestaj ? "smještaj" :
                          "general"
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
                                isSmjestaj
                                  ? "Ime i prezime / naziv objekta"
                                  : isShop
                                  ? "Ime i prezime / naziv firme"
                                  : "Ime i prezime / naziv firme"
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
                                isSmjestaj
                                  ? "npr. apartmani, sobe, vila, hotel"
                                  : isShop
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
                                isSmjestaj
                                  ? "Lokacija (npr. Budva), tip smještaja, kapacitet..."
                                  : isShop
                                  ? "Napišite čime se bavite, koje proizvode/prodaju planirate i u kom gradu poslujete."
                                  : isRestaurant
                                  ? "U kom gradu se nalazite i da li imate dostavu / rezervacije?"
                                  : isViber
                                  ? "Čime se bavite i u kom gradu radite?"
                                  : "Recite nam čime se bavite, gdje poslujete i šta želite da unaprijedite."
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
                              {isSmjestaj
                                ? "Želim direktne rezervacije"
                                : isRestaurant
                                ? "Želim više rezervacija"
                                : isViber
                                ? "Želim više poziva"
                                : isShop
                                ? "Zatraži besplatnu analizu"
                                : "Pošaljite upit"}
                            </button>
                          </div>
                        </div>
                      </div>
                    </form>

                    <p id="kontakt-status" style={{ marginTop: 20, fontWeight: 600 }} />

                    {(isShop || isViber || isRestaurant || isSmjestaj) && (
                      <p
                        style={{
                          marginTop: 10,
                          fontSize: 13,
                          opacity: 0.8,
                          color: "white",
                        }}
                      >
🔒 Vaši podaci se koriste isključivo za povratni kontakt.                      </p>
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
