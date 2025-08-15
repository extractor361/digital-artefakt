import Home3Team from "@/components/Team/Home3Team";
import About3 from "@/components/about/About3";
import Banner3 from "@/components/bannner/Banner3";
import Home3Blog from "@/components/blog/Home3Blog";
import Preloader from "@/components/common/Preloader";
import Home3Contact from "@/components/contact/Home3Contact";
import Footer3 from "@/components/footer/Footer3";
import Header3 from "@/components/header/Header3";
import Partner3 from "@/components/partner/Partner3";
import PricingPlan3 from "@/components/pricingplan/PricingPlan3";
import Solution3 from "@/components/solutions/Solution3";
import SuccessStory3 from "@/components/successStorys/SuccessStory3";
import Testimonial3 from "@/components/testimonial/Testimonial3";
import useBodyClass from "@/hooks/useBodyClass";
import Head from "next/head";

export default function Home() {
  useBodyClass("home-dark2");

  return (
    <>
      <Head>
  <title>Izrada veb sajtova i aplikacija | Crna Gora | Digital Artefakt | </title>
  <meta name="description" content="Nudimo vam profesionalnu izradu modernih i funkcionalnih web sajtova i aplikacija koje unapređuju korisničko iskustvo i podižu vaš brend na viši nivo. Naš tim kombinuje dizajn, razvoj i tehničku preciznost kako bi vam isporučio pouzdana digitalna rješenja prilagođena vašim ciljevima." />
  <meta name="keywords" content="digitalni marketing, izrada sajtova, web aplikacije, SEO, Google Ads, društvene mreže, softverska rješenja, IT podrška, Crna Gora" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <link rel="icon" href="/assets/img/logo.png" />
<meta name="google-site-verification" content="FLR_6KLLRFz_z06X6n0tSmaZSb9PZuIBRx_-oDImE9Q" />
  {/* Open Graph (Facebook/LinkedIn) */}
  <meta property="og:title" content="Digital Artefakt | Web razvoj i digitalni marketing" />
  <meta property="og:description" content="Kompletna digitalna rješenja – web sajtovi, aplikacije, SEO, Google Ads, društvene mreže i više." />
  <meta property="og:image" content="/assets/img/home-3/naslovna1.pn" />
  <meta property="og:type" content="website" />
  <meta property="og:url" content="https://www.digital-artefakt.me" />
  <meta name="google-site-verification" content="FLR_6KLLRFz_z06X6n0tSmaZSb9PZuIBRx_-oDImE9Q" />

  {/* JSON-LD struktura organizacije */}
  <script
    type="application/ld+json"
    dangerouslySetInnerHTML={{
      __html: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "Organization",
        name: "Digital Artefakt",
        url: "https://www.digital-artefakt.me",
        logo: "/assets/img/logo.svg",
        address: {
          "@type": "PostalAddress",
          streetAddress: "Bulevar Revolucije C-7",
          addressLocality: "Bar",
          addressCountry: "ME"
        },
        contactPoint: {
          "@type": "ContactPoint",
          telephone: "+38268062361",
          contactType: "customer service"
        },
        sameAs: [
          "https://www.facebook.com/DigitalArtefakt",
          "https://www.instagram.com/digital_artefakt/"
        ]
      })
    }}
  />
</Head>

      <Header3 />
      <Banner3 />
      <Partner3 />
      <Solution3 />
      <About3 />
      <SuccessStory3 />
      <Testimonial3 />
      <PricingPlan3 />
      <Home3Contact />
      <Footer3 />
    </>
  );
}
