import Breadcrumb from "@/components/common/Breadcrumb";
import Layout from "@/components/layout/Layout";
import React, { useEffect } from "react";
import Head from "next/head";

function Faqpage() {
  useEffect(() => {
    const form = document.getElementById("faq-contact-form");
    const successMsg = document.getElementById("faq-form-success-msg");

    if (!form || !successMsg) return;

    const handleSubmit = async (e) => {
      e.preventDefault();

      const formData = new FormData(form);

      try {
        const res = await fetch("https://formsubmit.co/ajax/info@digital-artefakt.me", {
          method: "POST",
          body: formData,
          headers: {
            Accept: "application/json",
          },
        });

        const data = await res.json();

        if (data.success === "true") {
          const ime = formData.get("ime") || "korisniče";
          successMsg.style.color = "green";
          successMsg.innerText = `Hvala vam, ${ime}. Vaša poruka je uspješno poslata. Uskoro ćemo vas kontaktirati.`;
          successMsg.style.display = "block";
          form.reset();
        } else {
          successMsg.style.color = "red";
          successMsg.innerText = "Došlo je do greške pri slanju poruke. Molimo pokušajte ponovo.";
          successMsg.style.display = "block";
        }
      } catch (error) {
        successMsg.style.color = "red";
        successMsg.innerText = "Greška u komunikaciji sa serverom. Molimo pokušajte kasnije.";
        successMsg.style.display = "block";
      }
    };

    form.addEventListener("submit", handleSubmit);
    return () => form.removeEventListener("submit", handleSubmit);
  }, []);

  return (
    <Layout>
      <Head>
        <title>FAQ – Često postavljana pitanja | Digital Artefakt</title>
        <meta
          name="description"
          content="Najčešće postavljana pitanja o procesu izrade web sajtova, plaćanju i tehničkoj podršci. Saznajte sve detalje o našim uslugama – Digital Artefakt."
        />
        <meta
          name="keywords"
          content="FAQ, često postavljana pitanja, pitanja i odgovori, izrada sajta proces, plaćanje izrada sajta, podrška sajt, SEO FAQ, Google Ads FAQ, Digital Artefakt"
        />
        <meta name="robots" content="index, follow" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="canonical" href="https://www.digital-artefakt.me/faq" />
        <meta
          property="og:title"
          content="FAQ – Često postavljana pitanja | Digital Artefakt"
        />
        <meta
          property="og:description"
          content="Odgovori na najčešća pitanja o izradi sajtova, aplikacija, SEO optimizaciji i online oglašavanju. Pogledajte detalje o našim paketima i uslugama."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.digital-artefakt.me/faq" />
        <meta
          property="og:image"
          content="https://www.digital-artefakt.me/og-image.jpg"
        />

        {/* FAQ structured data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: `
            {
              "@context": "https://schema.org",
              "@type": "FAQPage",
              "mainEntity": [
                {
                  "@type": "Question",
                  "name": "Koliko traje izrada sajta?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Izrada jednostavnog sajta traje 2–3 nedelje, dok su za internet prodavnice ili napredne veb aplikacije potrebne nekoliko nedelja ili mjeseci. Vrijeme zavisi od funkcionalnosti, količine sadržaja i dodatnih zahtjeva, te na koncu informacione dinamike sistema."
                  }
                },
                {
                  "@type": "Question",
                  "name": "Da li pravite unikatne dizajne ili koristite šablone?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Svaki sajt radimo unikatno i prilagođeno vašem brendu. Po potrebi koristimo provjerene šablone, ali ih uvijek prilagodimo i personalizujemo tako da izgledaju profesionalno i jedinstveno."
                  }
                },
                {
                  "@type": "Question",
                  "name": "Šta dobijam u okviru izrade sajta?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Cijena uključuje moderan i responzivan dizajn, osnovnu SEO optimizaciju, konfiguraciju domen mail-ova, povezivanje sa Google Analytics-om, kratku obuku za samostalno ažuriranje sajta i još mnogo toga."
                  }
                },
                {
                  "@type": "Question",
                  "name": "Koliko košta izrada sajta?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Cijena zavisi od tipa sajta – prezentacioni sajtovi kreću od oko 200,00 €, dok je za internet prodavnice i kompleksna rešenja cena veća. Uvijek pravimo jasnu i transparentnu ponudu."
                  }
                },
                {
                  "@type": "Question",
                  "name": "Da li nudite plaćanje na rate?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Da, moguće je plaćanje u dve ili više rata, najčešće 50% unaprijed i ostatak nakon završetka projekta."
                  }
                },
                {
                  "@type": "Question",
                  "name": "Postoje li dodatni troškovi nakon izrade?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Jedini obavezni troškovi su domen i hosting, koji se plaćaju godišnje. Održavanje, SEO i marketinške kampanje su predmet posebnog dogovora."
                  }
                },
                {
                  "@type": "Question",
                  "name": "Šta je SEO i zašto je važan?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "SEO (optimizacija za pretraživače) je proces prilagođavanja sajta kako bi se bolje kotirao na Google-u i drugim pretraživačima. Pomaže da se vaš sajt pojavi na prvoj strani rezultata i poveća broj posjeta i klijenata."
                  }
                },
                {
                  "@type": "Question",
                  "name": "Da li je bolje ulagati u SEO ili Google oglase?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Google oglasi daju brze rezultate i garantovan prikaz, dok SEO gradi dugoročnu organsku vidljivost. Najbolja strategija je kombinacija oba pristupa."
                  }
                },
                {
                  "@type": "Question",
                  "name": "Da li nudite podršku i održavanje sajta?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Da, nudimo tehničku podršku i rješavanje sistemskih grešaka, redovno ažuriranje sistema i sigurnosne provjere, kao i marketinške usluge poput SEO-a, Google oglasa i vođenja društvenih mreža."
                  }
                },
                {
                  "@type": "Question",
                  "name": "Kako da unaprijedim sajt i privučem više klijenata?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Najbolje rezultate donosi kombinacija brzog i mobilno optimizovanog sajta, redovnog SEO sadržaja, dobro postavljenih Google/Meta Ads kampanja i aktivnog prisustva na društvenim mrežama. Sveobuhvatan i kvalitetno strukturiran sadržaj kao imperativ."
                  }
                }
              ]
            }
            `,
          }}
        />
      </Head>

      <Breadcrumb
        pageList="Česta pitanja"
        title="Najčešća pitanja i odgovori"
        pageName="Česta pitanja"
      />
      <div className="faq-page sec-mar">
        <div className="container">
          <div className="row gy-5 justify-content-lg-between justify-content-center">
            {/* Sidebar */}
            <div className="col-lg-4">
              <div className="faq-items">
                <ul className="nav nav-tabs" id="myTab" role="tablist">
                  <li className="nav-item" role="presentation">
                    <button
                      className="nav-link active"
                      id="napredak-tab"
                      data-bs-toggle="tab"
                      data-bs-target="#napredak"
                      type="button"
                      role="tab"
                      aria-controls="napredak"
                      aria-selected="true"
                    >
                      Proces izrade
                    </button>
                  </li>
                  <li className="nav-item" role="presentation">
                    <button
                      className="nav-link"
                      id="placanje-tab"
                      data-bs-toggle="tab"
                      data-bs-target="#placanje"
                      type="button"
                      role="tab"
                      aria-controls="placanje"
                      aria-selected="false"
                    >
                      Plaćanje
                    </button>
                  </li>
                  <li className="nav-item" role="presentation">
                    <button
                      className="nav-link"
                      id="podrska-tab"
                      data-bs-toggle="tab"
                      data-bs-target="#podrska"
                      type="button"
                      role="tab"
                      aria-controls="podrska"
                      aria-selected="false"
                    >
                      Podrška
                    </button>
                  </li>
                </ul>
              </div>
              <div className="contact-form-wrap">
                <div className="form-tltle">
                  <h5>Imate pitanje?</h5>
                </div>
                <div className="contact-form">
                  <form id="faq-contact-form" encType="multipart/form-data">
                    <input type="hidden" name="_captcha" value="false" />
                    <div className="row">
                      <div className="col-md-12 mb-20">
                        <div className="form-inner">
                          <label htmlFor="ime">Ime i prezime <span style={{color: "red"}}>*</span></label>
                          <input id="ime" name="ime" type="text" required placeholder="Unesite ime i prezime" />
                        </div>
                      </div>
                      <div className="col-lg-12 mb-20">
                        <div className="form-inner">
                          <label htmlFor="email">Email adresa <span style={{color: "red"}}>*</span></label>
                          <input id="email" name="email" type="email" required placeholder="Unesite email" />
                        </div>
                      </div>
                      <div className="col-lg-12 mb-20">
                        <div className="form-inner">
                          <label htmlFor="telefon">Telefon <span style={{color: "red"}}>*</span></label>
                          <input id="telefon" name="telefon" type="tel" required placeholder="Unesite broj telefona" />
                        </div>
                      </div>
                      <div className="col-lg-12 mb-20">
                        <div className="form-inner">
                          <label htmlFor="poruka">Poruka <span style={{color: "red"}}>*</span></label>
                          <textarea id="poruka" name="poruka" required placeholder="Vaša poruka..." />
                        </div>
                      </div>
                      <div className="col-lg-12 mb-20">
                        <div className="form-inner">
                          <label htmlFor="dokument">Priložite dokument (opciono)</label>
                          <input id="dokument" name="dokument" type="file" />
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
                  <p
                    id="faq-form-success-msg"
                    style={{ display: "none", marginTop: 20, fontWeight: 600 }}
                    aria-live="polite"
                  ></p>
                </div>
              </div>
            </div>

            {/* Glavni sadržaj */}
            <div className="col-lg-8">
              <div className="tab-content" id="myTabContent">
                {/* Ostatak FAQ tab sadržaja - nepromijenjen */}
                {/* ... */}
              </div>
            </div>
            {/* End Glavni sadržaj */}
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default Faqpage;
