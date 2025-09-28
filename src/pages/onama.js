import About3 from "../components/about/About3";
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
        <title>O nama | Digital Artefakt | Agencija za digitalni marketing Crna Gora</title>
        <meta
          name="description"
          content="Digital Artefakt je agencija specijalizovana za digitalni marketing u Crnoj Gori – SEO, Google Ads, društvene mreže, izrada sajtova i aplikacija."
        />
        <meta
          name="keywords"
          content="digitalni marketing Crna Gora, SEO optimizacija, Google Ads, upravljanje društvenim mrežama, izrada sajtova, web aplikacije, digitalna agencija Bar"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="author" content="Digital Artefakt" />
        <meta name="robots" content="index, follow" />
        <link rel="icon" href="/assets/img/logo.png" />

        {/* Open Graph (Facebook/LinkedIn) */}
        <meta property="og:title" content="Digital Artefakt | Digitalni marketing i SEO Crna Gora" />
        <meta
          property="og:description"
          content="SEO, Google Ads, društvene mreže i digitalni marketing – unaprijedite online prisutnost uz Digital Artefakt."
        />
        <meta property="og:image" content="/assets/img/logo.png" />
        <meta property="og:url" content="https://www.digital-artefakt.me" />
        <meta property="og:type" content="website" />

        {/* Twitter Cards */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Digital Artefakt | SEO i digitalni marketing Crna Gora" />
        <meta
          name="twitter:description"
          content="Agencija za digitalni marketing u Crnoj Gori – SEO, Google Ads, društvene mreže, izrada web sajtova i aplikacija."
        />
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
              description:
                "Agencija specijalizovana za digitalni marketing, SEO, Google Ads i upravljanje društvenim mrežama, uz podršku web i aplikativnih rješenja.",
              address: {
                "@type": "PostalAddress",
                streetAddress: "Bulevar Revolucije C-7",
                addressLocality: "Bar",
                addressRegion: "ME",
                postalCode: "85000",
                addressCountry: "Montenegro",
              },
              contactPoint: {
                "@type": "ContactPoint",
                telephone: "+38268062361",
                contactType: "customer service",
                availableLanguage: ["Montenegrin", "English"],
              },
              sameAs: [
                "https://www.facebook.com/DigitalArtefakt",
                "https://www.instagram.com/digital_artefakt/",
                "https://www.linkedin.com/company/digital-artefakt?originalSubdomain=me",
              ],
            }),
          }}
        />
      </Head>

      <Breadcrumb
        pageList="O nama"
        title="Digitalni marketing koji donosi rezultate"
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
