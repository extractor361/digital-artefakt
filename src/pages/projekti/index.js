import Breadcrumb from "@/components/common/Breadcrumb";
import Layout from "@/components/layout/Layout";
import Link from "next/link";
import projekti from '@/data/projekti.json';
import Head from "next/head";

export default function ProjectPage() {
  return (
    <Layout>

<Head>
  <title>Projekti — Web sajtovi, aplikacije i digitalna rješenja | Digital Artefakt</title>
  <meta name="description" content="Pogledajte izabrane projekte: web sajtovi, web i mobilne aplikacije, sistemi po mjeri i digitalna rješenja za kompanije iz različitih industrija." />
  <meta name="keywords" content="projekti, portfolio, case studies, izrada web sajtova, web aplikacije, mobilne aplikacije, software development, digitalna agencija, Digital Artefakt" />
  <meta name="robots" content="index, follow" />
  <meta name="author" content="Digital Artefakt" />

  {/* Open Graph */}
  <meta property="og:title" content="Projekti — Web sajtovi, aplikacije i digitalna rješenja" />
  <meta property="og:description" content="Izabrani projekti i digitalna rješenja za različite industrije — web sajtovi, aplikacije i sistemi po mjeri." />
  <meta property="og:type" content="website" />
  <meta property="og:url" content="https://digital-artefakt.me/projekti" />
  <meta property="og:image" content="https://digital-artefakt.me/assets/img/og-projekti.jpg" />

  {/* Twitter */}
  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:title" content="Projekti — Digital Artefakt" />
  <meta name="twitter:description" content="Pogledajte naš portfolio web sajtova, aplikacija i softverskih sistema." />
  <meta name="twitter:image" content="https://digital-artefakt.me/assets/img/og-projekti.jpg" />

  <link rel="icon" href="/assets/img/logo.png" />
</Head>

      <Breadcrumb
        pageList="Projekti"
        title="Naši realizovani projekti"
        pageName="PROJEKTI"
      />

      {/* H1 naslov sa paragrafom ispod */}
      <div className="container text-center my-5">
        <h1 style={{color:"#d3d3d3"}}>Izabrani projekti: Web sajtovi, web i mobilne aplikacije</h1>
        <p style={{color:"#d3d3d3"}} className="mt-3">
          Pregledajte naše projekte i primere uspešnih realizacija u različitim sektorima, uključujući web sajtove, mobilne i web aplikacije.
        </p>
      </div>

      <div className="home3-success-stories-area two sec-mar">
        <div className="container-fluid">
          <div className="row g-4 justify-content-center">
            {projekti.map((proj, idx) => (
              <div
                key={proj.slug}
                className="col-lg-4 col-md-6 col-sm-10 wow animate fadeInUp"
                data-wow-delay={`${200 + (idx % 3) * 100}ms`}
                data-wow-duration="1500ms"
              >
                <div className="success-storie-card">
                  <div className="success-img">
                    <img
                      className="img-fluid magnetic-item"
                      src={proj.heroSlike[0]?.src || '/assets/img/placeholder.png'}
                      alt={proj.naslov}
                    />
                  </div>
                  <div className="success-content">
                    <span>{proj.kategorija}</span>
                    <h3>
                      <Link legacyBehavior href={`/projekti/${proj.slug}`}>
                        <a>{proj.naslov}</a>
                      </Link>
                    </h3>
                    <div className="view-btn">
                      <Link legacyBehavior href={`/projekti/${proj.slug}`}>
                        <a>
                          <svg width={12} height={12} viewBox="0 0 13 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M0 1H12M12 1V13M12 1L0.5 12" />
                          </svg>
                        </a>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          {/* ...pagination ako je potrebno */}
        </div>
      </div>
    </Layout>
  );
}
