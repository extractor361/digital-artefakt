import Home3Team from "../components/Team/Home3Team";
import About3 from "../components/about/About3";
import Home3Blog from "../components/blog/Home3Blog";
import Choose6 from "../components/choose/Choose6";
import Breadcrumb from "../components/common/Breadcrumb";
import Home3Contact from "../components/contact/Home3Contact";
import Feature4 from "../components/features/Feature4";
import Layout from "../components/layout/Layout";
import Partnar4 from "../components/partner/Partnar4";
import Testimonial3 from "../components/testimonial/Testimonial3";
import Head from "next/head";
function AboutPage() {
  return (
    <Layout>
      <Head>
  <title> O nama | Digital Artefakt | Digitalna agencija Crna Gora</title>
  <meta name="description" content="Nudimo izradu web sajtova, aplikacija, sajber bezbjednost i kompletne usluge digitalnog marketinga. Unaprijedite veb angažman i unaprijedite poslovanje uz Digital Artefakt." />
  <meta name="keywords" content="digitalni marketing, izrada sajtova, web aplikacije, SEO, Google Ads, društvene mreže, softverska rješenja, IT podrška, Crna Gora" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <meta name="author" content="Digital Artefakt" />
  <meta name="robots" content="index, follow" />
  <link rel="icon" href="/assets/img/logo.png" />

  {/* Open Graph (Facebook/LinkedIn) */}
  <meta property="og:title" content="Digital Artefakt | Web razvoj i digitalni marketing" />
  <meta property="og:description" content="Kompletna digitalna rješenja – web sajtovi, aplikacije, SEO, Google Ads, društvene mreže i više." />
  <meta property="og:image" content="/assets/img/logo.png" />
  <meta property="og:url" content="https://www.digital-artefakt.me" />
  <meta property="og:type" content="website" />

  {/* Twitter Cards */}
  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:title" content="Digital Artefakt | Web razvoj i marketing" />
  <meta name="twitter:description" content="Izrada sajtova, SEO, aplikacije i digitalni marketing za modernu digitalnu prisutnost." />
  <meta name="twitter:image" content="/assets/img/logo.png" />

  {/* Structured Data (JSON-LD) */}
  <script
    type="application/ld+json"
    dangerouslySetInnerHTML={{
      __html: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "Organization",
        name: "Digital Artefakt",
        url: "https://www.digital-artefakt.me",
        logo: "https://www.digital-artefakt.me/assets/img/logo.png",
        description: "Nudimo izradu web sajtova, aplikacija, digitalni marketing i sajber bezbjednost.",
        address: {
          "@type": "PostalAddress",
          streetAddress: "Bulevar Revolucije C-7",
          addressLocality: "Bar",
          addressRegion: "ME",
          postalCode: "85000",
          addressCountry: "Montenegro"
        },
        contactPoint: {
          "@type": "ContactPoint",
          telephone: "+38268062361",
          contactType: "customer service",
          availableLanguage: ["Montenegrin", "English"]
        },
        sameAs: [
          "https://www.facebook.com/DigitalArtefakt",
          "https://www.instagram.com/digital_artefakt/",
          "https://www.linkedin.com/company/digital-artefakt?originalSubdomain=me",
        ]
      })
    }}
  />
</Head>

      <Breadcrumb
        pageList="O nama"
        title="Softver koji razumije dinamiku informacija"
        pageName="O nama"
      />
      <About3 />
      <Choose6 />
      <Feature4 />
      <Partnar4 />
      <Testimonial3 />
      <Home3Contact />
    </Layout>
  );
}

export default AboutPage;
