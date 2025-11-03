import Breadcrumb from "@/components/common/Breadcrumb";
import Layout from "@/components/layout/Layout";
import Link from "next/link";
import Head from "next/head";
import React from "react";

function ServiceDetailsPage() {
  return (
    <Layout>
    

      <Breadcrumb
        pageList="Izrada mobilnih aplikacija"
        title="Profesionalni razvoj mobilnih aplikacija"
        pageName="Izrada mobilnih aplikacija"
      />

      <div
        className="service-details section-padding"
        style={{
          backgroundColor: "#0a0a0a",
          color: "#fff",
          padding: "60px 0",
          lineHeight: "1.8",
        }}
      >
        <div className="container" style={{ maxWidth: "1200px", margin: "0 auto" }}>
          <div className="row" style={{ display: "flex", gap: "30px" }}>
            {/* Glavni sadržaj */}
            <div className="col-lg-8 col-md-12" style={{ flex: 2 }}>
              <div className="service-details-content">
                <div className="image" style={{ marginBottom: "25px" }}>
                  <img
                    src="../assets/img/mobile.png"
                    alt="Izrada mobilnih aplikacija"
                    style={{
                      width: "100%",
                      borderRadius: "12px",
                      boxShadow: "0 0 20px rgba(255,255,255,0.1)",
                    }}
                  />
                </div>

                <h3 style={{ color: "#fff", fontSize: "32px", marginBottom: "15px" }}>
                  Izrada Mobilnih Aplikacija
                </h3>

                <p style={{ color: "#ddd" }}>
                  Mobilne aplikacije su danas ključni alat za svako ozbiljno poslovanje. Naš tim
                  razvija moderne, intuitivne i brze aplikacije za{" "}
                  <strong>Android</strong> i <strong>iOS</strong> platforme koristeći najnovije
                  tehnologije poput React Native i Flutter frameworka.
                </p>

                <p style={{ color: "#ccc" }}>
                  Bilo da vam je potrebna aplikacija za e-trgovinu, rezervacije, interne procese ili
                  unapređenje korisničkog iskustva – mi nudimo rešenja koja su sigurna, skalabilna i
                  prilagođena vašim potrebama.
                </p>

                <h4 style={{ color: "#fff", marginTop: "25px" }}>Šta dobijate sa nama?</h4>
                <ul style={{ color: "#ccc", listStyle: "none", paddingLeft: "0" }}>
                  <li>✔️ Izrada aplikacija za Android i iOS platforme</li>
                  <li>✔️ Cross-platform rešenja (React Native, Flutter)</li>
                  <li>✔️ Moderni i intuitivni UX/UI dizajn</li>
                  <li>✔️ API integracije i baze podataka</li>
                  <li>✔️ Push notifikacije i praćenje statistike</li>
                  <li>✔️ Održavanje i podrška nakon lansiranja</li>
                </ul>

                <p style={{ color: "#ddd" }}>
                  Naš cilj je da vaša aplikacija ne bude samo funkcionalna, već i atraktivna, laka za
                  korišćenje i optimizovana za najbolje performanse.
                </p>

                <div style={{ marginTop: "30px" }}>
                  <Link
                    href="/kontakt"
                    className="primary-btn3"
                    style={{
                      backgroundColor: "#ff6600",
                      padding: "12px 25px",
                      borderRadius: "8px",
                      color: "#fff",
                      textDecoration: "none",
                      fontWeight: "600",
                    }}
                  >
                    Zatražite ponudu
                  </Link>
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <div className="col-lg-4 col-md-12" style={{ flex: 1 }}>
              <div
                className="service-sidebar"
                style={{
                  background: "#141414",
                  padding: "25px",
                  borderRadius: "12px",
                  boxShadow: "0 0 20px rgba(0,0,0,0.3)",
                }}
              >
                <div className="widget categories" style={{ marginBottom: "30px" }}>
                  <h4 style={{ color: "#fff", marginBottom: "15px" }}>Naše usluge</h4>
                  <ul style={{ listStyle: "none", padding: "0", lineHeight: "2" }}>
                    <li>
                      <Link href="/usluge/web-dizajn" style={{ color: "#ff6600" }}>
                        Web Dizajn
                      </Link>
                    </li>
                    <li>
                      <Link href="/usluge/mobilne-aplikacije" style={{ color: "#ff6600" }}>
                        Izrada Mobilnih Aplikacija
                      </Link>
                    </li>
                    <li>
                      <Link href="/usluge/digitalni-marketing" style={{ color: "#ff6600" }}>
                        Digitalni Marketing
                      </Link>
                    </li>
                    <li>
                      <Link href="/usluge/graficki-dizajn" style={{ color: "#ff6600" }}>
                        Grafički Dizajn
                      </Link>
                    </li>
                  </ul>
                </div>

                {/* Forma */}
                <div
                  className="widget contact-widget"
                  style={{
                    background: "#1a1a1a",
                    padding: "25px",
                    borderRadius: "12px",
                  }}
                >
                  <h5 style={{ color: "#fff", marginBottom: "15px" }}>Imate pitanje?</h5>

                  <form style={{ display: "flex", flexDirection: "column", gap: "15px" }}>
                    <div>
                      <label style={{ color: "#bbb", fontSize: "14px" }}>Ime i prezime</label>
                      <input
                        type="text"
                        placeholder="Unesite ime i prezime"
                        style={{
                          width: "100%",
                          padding: "10px 14px",
                          borderRadius: "8px",
                          border: "1px solid #333",
                          background: "#0f0f0f",
                          color: "#fff",
                          outline: "none",
                        }}
                      />
                    </div>

                    <div>
                      <label style={{ color: "#bbb", fontSize: "14px" }}>Email adresa</label>
                      <input
                        type="email"
                        placeholder="Unesite email"
                        style={{
                          width: "100%",
                          padding: "10px 14px",
                          borderRadius: "8px",
                          border: "1px solid #333",
                          background: "#0f0f0f",
                          color: "#fff",
                          outline: "none",
                        }}
                      />
                    </div>

                    <div>
                      <label style={{ color: "#bbb", fontSize: "14px" }}>Telefon</label>
                      <input
                        type="tel"
                        placeholder="Unesite broj telefona"
                        style={{
                          width: "100%",
                          padding: "10px 14px",
                          borderRadius: "8px",
                          border: "1px solid #333",
                          background: "#0f0f0f",
                          color: "#fff",
                          outline: "none",
                        }}
                      />
                    </div>

                    <div>
                      <label style={{ color: "#bbb", fontSize: "14px" }}>Poruka</label>
                      <textarea
                        placeholder="Vaša poruka..."
                        rows="4"
                        style={{
                          width: "100%",
                          padding: "10px 14px",
                          borderRadius: "8px",
                          border: "1px solid #333",
                          background: "#ffffff0d",
                          color: "#fff",
                          resize: "none",
                          outline: "none",
                        }}
                      ></textarea>
                    </div>

                    <button
                      type="submit"
                      style={{
                        backgroundColor: "#ff6600",
                        color: "#fff",
                        padding: "10px 20px",
                        border: "none",
                        borderRadius: "8px",
                        fontWeight: "600",
                        cursor: "pointer",
                        transition: "0.3s",
                      }}
                      onMouseOver={(e) => (e.target.style.backgroundColor = "#ff8533")}
                      onMouseOut={(e) => (e.target.style.backgroundColor = "#ff6600")}
                    >
                      Pošalji poruku
                    </button>
                  </form>
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
