import React, { useEffect } from "react";
import Head from "next/head";
import Layout from "@/components/layout/Layout";
import Breadcrumb from "@/components/common/Breadcrumb";

function Contactpage() {
  useEffect(() => {
    const form = document.getElementById("kontakt-form");
    const successMsg = document.getElementById("form-success-msg");

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
                    Podignite svoje poslovanje na viši nivo uz Digital Artefakt — vašeg partnera za sveobuhvatna digitalna rešenja, SEO optimizaciju i web razvoj. Naš stručni tim primenjuje analitički pristup i moderne tehnologije kako bi osigurao povećanje vidljivosti i efikasnosti vašeg online prisustva.


                  </p>
                  <p>
                    Fokusirani smo na kreiranje prilagođenih strategija koje podržavaju vaše poslovne ciljeve, uz jasnu metriku uspeha i transparentnu komunikaciju. Bez obzira na složenost izazova, pružamo profesionalnu podršku i rešenja usklađena sa potrebama vaše organizacije.
                  </p>
                  <p>
                    Pozovite nas na <a href="tel:+38268062361"><strong>+382 68 062 361</strong></a> ili popunite kontakt formu sa desne strane kako biste zakazali konsultaciju. <br></br>Sa Digital Artefaktom, dobijate partnera posvećenog vašem dugoročnom uspjehu u digitalnom svetu.


                  </p>
                </div>
              </div>

              <div className="col-lg-6">
                <div className="contact-form-wrap">
                  <div className="form-tltle">
                    <h5>Kontakt forma</h5>
                  </div>
                  <div className="contact-form">
                    <form id="kontakt-form" encType="multipart/form-data">
                      <input type="hidden" name="_captcha" value="false" />

                      <div className="row">
                        <div className="col-lg-12 mb-20">
                          <div className="form-inner">
                            <label htmlFor="ime">Ime i prezime <span style={{color: "red"}}>*</span></label>
                            <input id="ime" type="text" name="ime" required placeholder="Vaše ime i prezime" />
                          </div>
                        </div>
                        <div className="col-lg-12 mb-20">
                          <div className="form-inner">
                            <label htmlFor="email">Email <span style={{color: "red"}}>*</span></label>
                            <input id="email" type="email" name="email" required placeholder="vaš@email.com" />
                          </div>
                        </div>
                        <div className="col-lg-12 mb-20">
                          <div className="form-inner">
                            <label htmlFor="djelatnost">Djelatnost</label>
                            <input
                              id="djelatnost"
                              type="text"
                              name="djelatnost"
                              placeholder="Primjer: advokat, restoran, salon..."
                            />
                          </div>
                        </div>
                        <div className="col-lg-12 mb-20">
                          <div className="form-inner">
                            <label htmlFor="telefon">Kontakt telefon <span style={{color: "red"}}>*</span></label>
                            <input id="telefon" type="tel" name="telefon" required placeholder="+382 69 123 456" />
                          </div>
                        </div>
                        <div className="col-lg-12 mb-20">
                          <div className="form-inner">
                            <label htmlFor="poruka">Vaša poruka <span style={{color: "red"}}>*</span></label>
                            <textarea
                              id="poruka"
                              name="poruka"
                              required
                              placeholder="Napišite nam vaše pitanje ili zahtev"
                              rows={5}
                            />
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
                            <button className="primary-btn3" type="submit">
                              Pošaljite poruku
                            </button>
                          </div>
                        </div>
                      </div>
                    </form>
                    <p
                      id="form-success-msg"
                      style={{ display: "none", marginTop: 20, fontWeight: 600 }}
                      aria-live="polite"
                    ></p>
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
