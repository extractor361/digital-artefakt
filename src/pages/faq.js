import Breadcrumb from "@/components/common/Breadcrumb";
import Layout from "@/components/layout/Layout";
import React from "react";
import Head from "next/head";
import { useEffect } from "react";

function Faqpage() {

  useEffect(() => {
  const form = document.getElementById("faq-contact-form");
  const successMsg = document.getElementById("faq-form-success-msg");

  if (!form || !successMsg) return;

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData(form);

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          ime: formData.get("ime"),
          email: formData.get("email"),
          telefon: formData.get("telefon"),
          poruka: formData.get("poruka"),
        }),
      });

      const data = await res.json();

      if (data.ok) {
        const ime = formData.get("ime") || "korisniče";
        successMsg.style.color = "green";
        successMsg.innerText = `Hvala vam, ${ime}. Poruka je poslata.`;
        successMsg.style.display = "block";
        form.reset();
      } else {
        throw new Error(data.error);
      }
    } catch (error) {
      console.error("FAQ FORM ERROR:", error);
      successMsg.style.color = "red";
      successMsg.innerText = "Greška pri slanju. Pokušajte ponovo.";
      successMsg.style.display = "block";
    }
  };

  form.addEventListener("submit", handleSubmit);
  return () => form.removeEventListener("submit", handleSubmit);
}, []);

  return (
    <Layout>
      <Head>
        <title>FAQ – Izrada sajtova, SEO i marketing | Digital Artefakt</title>
        <meta
          name="description"
          content="Odgovori na najčešća pitanja o izradi web sajtova, SEO optimizaciji, Google oglasima, podršci i cijenama. Saznajte kako funkcioniše proces, plaćanje i održavanje."
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
                    "text": "Izrada jednostavnog sajta traje 2–3 nedelje, dok su za internet prodavnice ili napredne Web aplikacije potrebne nekoliko nedelja ili mjeseci. Vrijeme zavisi od funkcionalnosti, količine sadržaja i dodatnih zahtjeva, te na koncu informacione dinamike sistema."
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
          <div className="container text-center my-5">
  <h1 className="page-title">Često postavljana pitanja (FAQ)</h1>
  <p style={{color:"white"}} className="lead">
    Odgovori na najčešće dileme vezane za izradu sajtova, SEO, oglase i tehničku podršku.
  </p>
</div>

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
              
            </div>


            {/* Glavni sadržaj */}
            <div className="col-lg-8">
              <div className="tab-content" id="myTabContent">
                {/* Proces izrade */}
                {/* Proces izrade */}
<div
  className="tab-pane fade show active"
  id="napredak"
  role="tabpanel"
  aria-labelledby="napredak-tab"
>
  <div className="accordion" id="accordionExample1">
    <div className="accordion-item">
      <h5 className="accordion-header" id="headingOne">
        <button
          className="accordion-button"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#collapseOne"
          aria-expanded="true"
          aria-controls="collapseOne"
        >
          Koliko traje izrada sajta?
        </button>
      </h5>
      <div
        id="collapseOne"
        className="accordion-collapse collapse show"
        aria-labelledby="headingOne"
        data-bs-parent="#accordionExample1"
      >
        <div className="accordion-body">
          Izrada jednostavnog sajta traje 2–3 nedjelje, dok su za internet prodavnice ili napredne web aplikacije potrebne nekoliko nedjelja ili mjeseci. Vrijeme zavisi od funkcionalnosti, količine sadržaja i dodatnih zahtjeva.
        </div>
      </div>
    </div>

    <div className="accordion-item">
      <h5 className="accordion-header" id="headingTwo">
        <button
          className="accordion-button collapsed"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#collapseTwo"
          aria-expanded="false"
          aria-controls="collapseTwo"
        >
          Da li pravite unikatne dizajne ili koristite šablone?
        </button>
      </h5>
      <div
        id="collapseTwo"
        className="accordion-collapse collapse"
        aria-labelledby="headingTwo"
        data-bs-parent="#accordionExample1"
      >
        <div className="accordion-body">
          Svaki sajt radimo unikatno i prilagođeno vašem brendu. Po potrebi koristimo provjerene šablone, ali ih uvijek prilagodimo i personalizujemo tako da izgledaju profesionalno i jedinstveno.
        </div>
      </div>
    </div>

    <div className="accordion-item">
      <h5 className="accordion-header" id="headingThree">
        <button
          className="accordion-button collapsed"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#collapseThree"
          aria-expanded="false"
          aria-controls="collapseThree"
        >
          Šta dobijam u okviru izrade sajta?
        </button>
      </h5>
      <div
        id="collapseThree"
        className="accordion-collapse collapse"
        aria-labelledby="headingThree"
        data-bs-parent="#accordionExample1"
      >
        <div className="accordion-body">
          Cijena uključuje moderan i responzivan dizajn, osnovnu SEO optimizaciju, konfiguraciju domen email adresa, povezivanje sa Google Analytics-om i kratku obuku za samostalno ažuriranje sajta.
        </div>
      </div>
    </div>
  </div>
</div>

{/* Plaćanje */}
<div
  className="tab-pane fade"
  id="placanje"
  role="tabpanel"
  aria-labelledby="placanje-tab"
>
  <div className="accordion" id="accordionExample2">
    <div className="accordion-item">
      <h5 className="accordion-header" id="headingOne1">
        <button
          className="accordion-button"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#collapseOne1"
          aria-expanded="true"
          aria-controls="collapseOne1"
        >
          Koliko košta izrada sajta?
        </button>
      </h5>
      <div
        id="collapseOne1"
        className="accordion-collapse collapse show"
        aria-labelledby="headingOne1"
        data-bs-parent="#accordionExample2"
      >
        <div className="accordion-body">
          Cijena zavisi od tipa sajta – prezentacioni sajtovi kreću od oko 200 €, dok je za internet prodavnice i kompleksna rješenja cijena veća. Uvijek pravimo jasnu i transparentnu ponudu.
        </div>
      </div>
    </div>

    <div className="accordion-item">
      <h5 className="accordion-header" id="headingTwo1">
        <button
          className="accordion-button collapsed"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#collapseTwo1"
          aria-expanded="false"
          aria-controls="collapseTwo1"
        >
          Da li nudite plaćanje na rate?
        </button>
      </h5>
      <div
        id="collapseTwo1"
        className="accordion-collapse collapse"
        aria-labelledby="headingTwo1"
        data-bs-parent="#accordionExample2"
      >
        <div className="accordion-body">
          Da, moguće je plaćanje u dvije ili više rata – najčešće 50% unaprijed i ostatak nakon završetka projekta.
        </div>
      </div>
    </div>

    <div className="accordion-item">
      <h5 className="accordion-header" id="headingThree1">
        <button
          className="accordion-button collapsed"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#collapseThree1"
          aria-expanded="false"
          aria-controls="collapseThree1"
        >
          Postoje li dodatni troškovi nakon izrade?
        </button>
      </h5>
      <div
        id="collapseThree1"
        className="accordion-collapse collapse"
        aria-labelledby="headingThree1"
        data-bs-parent="#accordionExample2"
      >
        <div className="accordion-body">
          Obavezni troškovi su domen i hosting, koji se plaćaju godišnje. Održavanje, SEO i marketinške kampanje dogovaraju se posebno.
        </div>
      </div>
    </div>
  </div>
</div>

{/* Podrška */}
<div
  className="tab-pane fade"
  id="podrska"
  role="tabpanel"
  aria-labelledby="podrska-tab"
>
  <div className="accordion" id="accordionExample3">
    <div className="accordion-item">
      <h5 className="accordion-header" id="headingOne2">
        <button
          className="accordion-button"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#collapseOne2"
          aria-expanded="true"
          aria-controls="collapseOne2"
        >
          Šta je SEO i zašto je važan?
        </button>
      </h5>
      <div
        id="collapseOne2"
        className="accordion-collapse collapse show"
        aria-labelledby="headingOne2"
        data-bs-parent="#accordionExample3"
      >
        <div className="accordion-body">
          SEO (optimizacija za pretraživače) je proces prilagođavanja sajta kako bi se bolje kotirao na Google-u i drugim pretraživačima. Pomaže da se vaš sajt pojavi na prvoj strani rezultata i poveća broj posjeta i klijenata.
        </div>
      </div>
    </div>

    <div className="accordion-item">
      <h5 className="accordion-header" id="headingTwo2">
        <button
          className="accordion-button collapsed"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#collapseTwo2"
          aria-expanded="false"
          aria-controls="collapseTwo2"
        >
          Da li je bolje ulagati u SEO ili Google oglase?
        </button>
      </h5>
      <div
        id="collapseTwo2"
        className="accordion-collapse collapse"
        aria-labelledby="headingTwo2"
        data-bs-parent="#accordionExample3"
      >
        <div className="accordion-body">
          Google oglasi daju brze rezultate i garantovan prikaz, dok SEO gradi dugoročnu organsku vidljivost. Najbolja strategija je kombinacija oba pristupa.
        </div>
      </div>
    </div>

    <div className="accordion-item">
      <h5 className="accordion-header" id="headingThree2">
        <button
          className="accordion-button collapsed"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#collapseThree2"
          aria-expanded="false"
          aria-controls="collapseThree2"
        >
          Da li nudite podršku i održavanje sajta?
        </button>
      </h5>
      <div
        id="collapseThree2"
        className="accordion-collapse collapse"
        aria-labelledby="headingThree2"
        data-bs-parent="#accordionExample3"
      >
        <div className="accordion-body">
          Da, nudimo tehničku podršku, redovno ažuriranje sistema i sigurnosne provjere, kao i marketinške usluge poput SEO-a, Google oglasa i vođenja društvenih mreža.
        </div>
      </div>
    </div>

    <div className="accordion-item">
      <h5 className="accordion-header" id="headingFour2">
        <button
          className="accordion-button collapsed"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#collapseFour2"
          aria-expanded="false"
          aria-controls="collapseFour2"
        >
          Kako da unaprijedim sajt i privučem više klijenata?
        </button>
      </h5>
      <div
        id="collapseFour2"
        className="accordion-collapse collapse"
        aria-labelledby="headingFour2"
        data-bs-parent="#accordionExample3"
      >
        <div className="accordion-body">
          Najbolje rezultate donosi kombinacija brzog i mobilno optimizovanog sajta, redovnog SEO sadržaja, dobro postavljenih Google/Meta Ads kampanja i aktivnog prisustva na društvenim mrežama.
        </div>
      </div>
    </div>
  </div>
</div>

              </div>
              <div className="contact-form-wrap">
                <div className="form-tltle">
                  <h5>Imate pitanje?</h5>
                </div>
                <div className="contact-form">
                  <form id="faq-contact-form">
                    <input type="hidden" name="_captcha" value="false" />
                    <div className="row">
                      <div className="col-md-12 mb-20">
                        <div className="form-inner">
                          <label>Ime i prezime</label>
                          <input
                            type="text"
                            name="ime"
                            required
                            placeholder="Unesite ime i prezime"
                          />
                        </div>
                      </div>
                      <div className="col-lg-12 mb-20">
                        <div className="form-inner">
                          <label>Email adresa</label>
                          <input
                            type="email"
                            name="email"
                            required
                            placeholder="Unesite email"
                          />
                        </div>
                      </div>
                      <div className="col-lg-12 mb-20">
                        <div className="form-inner">
                          <label>Telefon</label>
                          <input
                            type="tel"
                            name="telefon"
                            placeholder="Unesite broj telefona"
                          />
                        </div>
                      </div>
                      <div className="col-lg-12 mb-20">
                        <div className="form-inner">
                          <label>Poruka</label>
                          <textarea
                            name="poruka"
                            required
                            placeholder="Vaša poruka..."
                          />
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
                    style={{
                      display: "none",
                      marginTop: 20,
                      fontWeight: 600,
                    }}
                    aria-live="polite"
                  ></p>
                </div>
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
