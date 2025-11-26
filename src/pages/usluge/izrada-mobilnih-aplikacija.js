import Breadcrumb from "@/components/common/Breadcrumb";
import Layout from "@/components/layout/Layout";
import Link from "next/link";
import Head from "next/head";
import React from "react";
import {useState} from "react";


function ServiceDetailsPage() {
const [loading, setLoading] = useState(false);

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
          <div className="row" style={{ display: "flex"}}>
            {/* Glavni sadržaj */}
            <div className="col-lg-8 col-md-12 ">
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
            <div className="col-lg-4 col-md-12 ">
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
                  <ul style={{listStyle:"none",padding:0,lineHeight:"2"}}>

    <li>
        <Link href="/usluge/izrada-veb-sajta" style={{color:"#ff6600"}}>
            Veb sajtovi
        </Link>
    </li>

    <li style={{marginLeft:"12px"}}>
        <Link href="/ponuda-veb-sajt" style={{color:"#ff6600",fontSize:"14px"}}>
            ➤ Kalkulator cijene
        </Link>
    </li>

    <li>
        <Link href="/usluge/izrada-veb-aplikacija" style={{color:"#ff6600"}}>
            Veb aplikacije
        </Link>
    </li>

    <li>
        <Link href="/usluge/izrada-mobilnih-aplikacija" style={{color:"#ff6600"}}>
            Mobilne aplikacije
        </Link>
    </li>

    <li>
        <Link href="/usluge/seo" style={{color:"#ff6600"}}>
            SEO
        </Link>
    </li>

    <li>
        <Link href="/usluge/video-reklame" style={{color:"#ff6600"}}>
            Video montaža
        </Link>
    </li>

    <li>
        <Link href="/usluge/oglasavanje" style={{color:"#ff6600"}}>
            Oglašavanje
        </Link>
    </li>

    <li>
        <Link href="/usluge/veb-sigurnost" style={{color:"#ff6600"}}>
            Veb sigurnost
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
      alert("Poruka je uspješno poslata!\nNeko iz našeg tima će vas ubrzo kontaktirati.\nHvala na povjerenju!");
      form.reset();
      setLoading(false);
    }, 3000);
  }}
  style={{ display:"flex", flexDirection:"column", gap:"15px" }}
>

  <div>
    <label style={{ color:"#bbb", fontSize:"14px" }}>Ime i prezime</label>
    <input name="ime" type="text" placeholder="Unesite ime i prezime"
      style={{width:"100%",padding:"10px 14px",borderRadius:"8px",border:"1px solid #333",background:"#0f0f0f",color:"#fff"}} required/>
  </div>

  <div>
    <label style={{ color:"#bbb", fontSize:"14px" }}>Email adresa</label>
    <input name="email" type="email" placeholder="Unesite email"
      style={{width:"100%",padding:"10px 14px",borderRadius:"8px",border:"1px solid #333",background:"#0f0f0f",color:"#fff"}} required/>
  </div>

  <div>
    <label style={{ color:"#bbb", fontSize:"14px" }}>Djelatnost</label>
    <input name="djelatnost" type="text" placeholder="Opcionalno"
      style={{width:"100%",padding:"10px 14px",borderRadius:"8px",border:"1px solid #333",background:"#0f0f0f",color:"#fff"}}/>
  </div>

  <div>
    <label style={{ color:"#bbb", fontSize:"14px" }}>Telefon</label>
    <input name="telefon" type="tel" placeholder="Unesite broj telefona"
      style={{width:"100%",padding:"10px 14px",borderRadius:"8px",border:"1px solid #333",background:"#0f0f0f",color:"#fff"}} required/>
  </div>

  <div>
    <label style={{ color:"#bbb", fontSize:"14px" }}>Poruka</label>
    <textarea name="poruka" placeholder="Vaša poruka..." rows="4"
      style={{width:"100%",padding:"10px 14px",borderRadius:"8px",border:"1px solid #333",background:"#ffffff0d",color:"#fff",resize:"none"}} required></textarea>
  </div>

  <button type="submit"
    style={{background:"#ff6600",color:"#fff",padding:"10px 20px",borderRadius:"8px",fontWeight:"600",cursor:"pointer"}}
    disabled={loading}
  >
    {loading ? "Slanje..." : "Pošalji poruku"}
  </button>

  {/* Loader ispod forme */}
  {loading && (
    <div style={{marginTop:"10px",textAlign:"center"}}>
      <div className="spinner"></div>
    </div>
  )}

  <style>{`
    .spinner {
      width: 26px; height: 26px;
      border: 3px solid #ff6600;
      border-bottom-color: transparent;
      border-radius: 50%;
      margin: 10px auto 0;
      animation: spin 0.7s linear infinite;
    }
    @keyframes spin { to { transform: rotate(360deg); } }
  `}</style>

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
