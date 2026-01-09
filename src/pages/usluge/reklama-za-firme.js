import Breadcrumb from "@/components/common/Breadcrumb";
import Layout from "@/components/layout/Layout";
import Link from "next/link";
import React, { useState } from "react";
import Head from "next/head";
import { useTranslation } from "next-i18next";

function ReklamaZaFirmuPage() {
  const { t } = useTranslation();
  const [loading, setLoading] = useState(false);

  return (
    <Layout>
      <Head>
  <meta charSet="UTF-8" />

  <title>
    {t("Reklama za firmu | Digitalni marketing & Web | Bar, Crna Gora")}
  </title>

  <meta
    name="description"
    content={t("Kompletna digitalna reklama za firme: web sajtovi, SEO, Google Ads, sadržaj i video materijali. Fokus na upite, klijente i rast poslovanja.")}
  />

  <meta
    name="keywords"
    content={t("reklama za firmu, digitalni marketing, Google Ads, SEO, izrada sajta, video reklame, prodajni sadržaj, digitalna agencija")}
  />

  <link
    rel="canonical"
    href="https://digital-artefakt.me/usluge/reklama-za-firmu"
  />

  <meta
    property="og:title"
    content={t("Reklama za firme | Digital Artefakt")}
  />

  <meta
    property="og:description"
    content={t("Digitalna reklama koja stvara upite, klijente i nove poslove.")}
  />

  <meta property="og:type" content="website" />

  <meta
    property="og:url"
    content="https://digital-artefakt.me/usluge/reklama-za-firmu"
  />

  <meta
    property="og:image"
    content="/assets/img/reklama-analitika.jpg"
  />
</Head>


      <Breadcrumb
        pageList={t("Reklama za firmu")}
        title={t("Kompletna reklama za vašu firmu")}
        pageName={t("Reklama za firmu")}
      />

      <div className="service-details">
        <div className="about-services sec-mar">
          <div className="container">
            <div className="row gy-5">
              {/* Lijeva kolona */}
              <div className="col-lg-8 d-flex align-items-center">
                <div className="about-content">
                  <div className="image" style={{ marginBottom: "25px" }}>
                    <img
                      src="../../assets/img/reklama-analitika.jpg"
                      alt="Reklama za firmu - Digitalno oglašavanje"
                      style={{
                        width: "100%",
                        borderRadius: "12px",
                        boxShadow: "0 0 20px rgba(255,255,255,0.1)",
                      }}
                    />
                  </div>

                  <h1 style={{ color: "#fff", fontSize: "32px", marginBottom: "15px" }}>
                    {t("Reklama za firmu")}
                    <br />
                    {t("koja donosi klijente")}
                  </h1>

                  <p>
                    {t(
                      "Na modernom tržištu ne pobjeđuje najbolji proizvod, već najvidljiviji. Digitalno oglašavanje je danas najefikasniji način da dođete do novih klijenata, povećate kredibilitet i širite poslovanje."
                    )}
                  </p>
                  <p>
                    {t(
                      "Naša agencija pruža kompletno rješenje, web, marketing, sadržaj i video. Ne ostavljamo praznine u procesu i ne prebacujemo odgovornost na druge."
                    )}
                  </p>

                  <h3 style={{ color: "#3fcd75", marginTop: "25px" }}>
                    {t("Šta obuhvata usluga?")}
                  </h3>

                  <ul className="about-featue">
                    <li>✔ {t("Izrada profesionalnog veb sajta ili aplikacije koji prodaju")}</li>
                    <li>✔ {t("SEO optimizacija za Google pretragu")}</li>
                    <li>✔ {t("Google Ads kampanje sa mjerljivim rezultatima")}</li>
                    <li>✔ {t("Prodajni copywriting i kreiranje sadržaja")}</li>
                    <li>✔ {t("Video reklame i montaža koleterala")}</li>
                    <li>✔ {t("Dizajn vizuelnog identiteta i brendiranje")}</li>
                    <li>✔ {t("Vođenje društvenih mreža i 'content marketing'")}</li>
                    <li>✔ {t("Tehnička podrška i održavanje")}</li>
                  </ul>

                  <p style={{ marginTop: "25px" }}>
                    {t(
                      "Sve radimo interno, što znači bržu realizaciju, bolju kontrolu i niže troškove u odnosu na angažovanje više različitih agencija."
                    )}
                  </p>

                  <h3 style={{ color: "#3fcd75", marginTop: "35px" }}>
                    {t("Za koga je ovo idealno?")}
                  </h3>

                  <p>
                    {t(
                      "Za kompanije koje žele atraktivnu prezentaciju, nove klijente i poslovni kredibilitet. Radimo sa malim biznisima, izvođačima, startapima i kompanijama koje razumiju da se tržište osvaja profesionalnim pristupom, ne impulsivnim improvizacijama."
                    )}
                  </p>
                </div>
              </div>

              {/* Desna kolona sa formom */}
              <div className="col-lg-4 col-md-12">
                <div
                  className="widget contact-widget"
                  style={{
                    background: "#1a1a1a",
                    padding: "25px",
                    borderRadius: "12px",
                  }}
                >
                  <h5 style={{ color: "#fff", marginBottom: "15px" }}>
                    {t("Imate pitanje?")}
                  </h5>

                  {/* FORM */}
                  <form
                    onSubmit={async (e) => {
                      e.preventDefault();
                      setLoading(true);

                      const form = e.target;
                      const data = Object.fromEntries(new FormData(form).entries());

                      await fetch("/api/contact", {
                        method: "POST",
                        headers: { "Content-Type": "application/json" },
                        body: JSON.stringify(data),
                      });

                      setTimeout(() => {
                        alert(
                          t(
                            "Poruka je uspješno poslata! Neko iz našeg tima će vas ubrzo kontaktirati. Hvala na povjerenju!"
                          )
                        );
                        form.reset();
                        setLoading(false);
                      }, 3000);
                    }}
                    style={{ display: "flex", flexDirection: "column", gap: "15px" }}
                  >
                    <div>
                      <label style={{ color: "#bbb", fontSize: "14px" }}>
                        {t("Ime i prezime")}
                      </label>
                      <input
                        name="ime"
                        type="text"
                        placeholder={t("Unesite ime i prezime")}
                        style={{
                          width: "100%",
                          padding: "10px 14px",
                          borderRadius: "8px",
                          border: "1px solid #333",
                          background: "#0f0f0f",
                          color: "#fff",
                        }}
                        required
                      />
                    </div>

                    <div>
                      <label style={{ color: "#bbb", fontSize: "14px" }}>
                        {t("Email adresa")}
                      </label>
                      <input
                        name="email"
                        type="email"
                        placeholder={t("Unesite email")}
                        style={{
                          width: "100%",
                          padding: "10px 14px",
                          borderRadius: "8px",
                          border: "1px solid #333",
                          background: "#0f0f0f",
                          color: "#fff",
                        }}
                        required
                      />
                    </div>

                    <div>
                      <label style={{ color: "#bbb", fontSize: "14px" }}>
                        {t("Djelatnost")}
                      </label>
                      <input
                        name="djelatnost"
                        type="text"
                        placeholder={t("Opcionalno")}
                        style={{
                          width: "100%",
                          padding: "10px 14px",
                          borderRadius: "8px",
                          border: "1px solid #333",
                          background: "#0f0f0f",
                          color: "#fff",
                        }}
                      />
                    </div>

                    <div>
                      <label style={{ color: "#bbb", fontSize: "14px" }}>
                        {t("Telefon")}
                      </label>
                      <input
                        name="telefon"
                        type="tel"
                        placeholder={t("Unesite broj telefona")}
                        style={{
                          width: "100%",
                          padding: "10px 14px",
                          borderRadius: "8px",
                          border: "1px solid #333",
                          background: "#0f0f0f",
                          color: "#fff",
                        }}
                        required
                      />
                    </div>

                    <div>
                      <label style={{ color: "#bbb", fontSize: "14px" }}>
                        {t("Poruka")}
                      </label>
                      <textarea
                        name="poruka"
                        placeholder={t("Vaša poruka...")}
                        rows="4"
                        style={{
                          width: "100%",
                          padding: "10px 14px",
                          borderRadius: "8px",
                          border: "1px solid #333",
                          background: "#ffffff0d",
                          color: "#fff",
                          resize: "none",
                        }}
                        required
                      ></textarea>
                    </div>

                    <button
                      type="submit"
                      style={{
                        background: "#3fcd75",
                        color: "#fff",
                        padding: "10px 20px",
                        borderRadius: "8px",
                        fontWeight: "600",
                        cursor: "pointer",
                      }}
                      disabled={loading}
                    >
                      {loading ? t("Slanje...") : t("Pošalji poruku")}
                    </button>

                    {loading && (
                      <div style={{ marginTop: "10px", textAlign: "center" }}>
                        <div className="spinner"></div>
                      </div>
                    )}

                    <style jsx>{`
                      .spinner {
                        width: 26px;
                        height: 26px;
                        border: 3px solid #3fcd75";
                        border-bottom-color: transparent;
                        border-radius: 50%;
                        margin: 10px auto 0;
                        animation: spin 0.7s linear infinite;
                      }
                      @keyframes spin {
                        to {
                          transform: rotate(360deg);
                        }
                      }
                    `}</style>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="home4-contact-area">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <div className="contact-wrapper text-center">
                  <h2 className="content">
                    {t("Reklama za vašu firmu")}
                  </h2>
                  <div className="contact-btn">
                    <Link legacyBehavior href="/kontakt">
                      <a>
                        {t("Kontaktirajte nas")}
                        <svg width={32} height={32} viewBox="0 0 13 13">
                          <path d="M0 1H12M12 1V13M12 1L0.5 12" />
                        </svg>
                      </a>
                    </Link>
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

export default ReklamaZaFirmuPage;
