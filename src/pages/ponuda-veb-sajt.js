
import Head from "next/head";
import WebCostCalculator from "../components/WebCostCalculator";
import Layout from "../components/layout/Layout";
import Breadcrumb from "../components/common/Breadcrumb";


export default function Page() {
  return (
    <Layout>
      
      <Head>
        <title>Ponuda - Izrada veb sajta | Digital Artefakt</title>
        <meta
          name="description"
          content="Izračunajte okvirnu cijenu izrade veb sajta pomoću našeg online kalkulatora i odmah preuzmite automatsku PDF ponudu. Transparentne cijene i profesionalna izrada po mjeri vašeg biznisa."
        />
        <meta
          name="keywords"
          content="izrada veb sajtova, ponuda web sajt, kalkulator cijene, digital artefakt, wordpress sajt, cijena sajta, web development, dizajn sajtova"
        />
        <meta name="author" content="Digital Artefakt" />
        <meta name="robots" content="index, follow" />
        <link rel="icon" href="/assets/img/logo.png" />
        <meta property="og:title" content="Ponuda - Izrada veb sajta | Digital Artefakt" />
        <meta
          property="og:description"
          content="Izračunajte cijenu izrade sajta i preuzmite automatsku PDF ponudu — brzo, jednostavno i besplatno."
        />
        <meta property="og:url" content="https://digital-artefakt.me/ponuda-veb-sajt" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="https://digital-artefakt.me/assets/img/og-web-kalkulator.jpg" />
      </Head>

      <Breadcrumb
        pageList="Ponuda veb sajt"
        title="Ponuda - veb sajt"
        pageName="Ponuda"
      />
      <div className="service-details ">
        <div className="about-services sec-mar">
          <div className="container">
            <div className="row">
              <div
                className="col-lg-12 d-flex align-items-center wow animate fadeInLeft"
                data-wow-delay="200ms"
                data-wow-duration="1500ms"
              >
                <div className="about-content">
                  <div className="section-title-5">
                    <h1 style={{color:"white"}}>
  Izrada profesionalnih veb sajtova — cijena, ponuda(predfaktura) i kalkulator
                    </h1>
                  </div>
                  <p>
Želite da znate koliko košta izrada veb sajta prilagođenog vašem biznisu?
  Uz naš <strong>kalkulator cijene</strong> možete odmah izračunati okvirnu cijenu
  izrade sajta na osnovu vaših potreba i dobiti <strong>automatsku PDF ponudu</strong> sa svim detaljima.
  Odaberite tip sajta, tehnologiju, broj stranica i dodatne opcije poput
  SEO optimizacije ili višejezičnosti. Nakon što popunite sve podatke,
  sistem automatski generiše ponudu spremnu za štampu ili slanje na email.
                  </p>
                  </div>
                  </div>
                  </div>
                  </div>
                  </div>
                  </div>
                  
      <WebCostCalculator />
      </Layout>
  );
}
