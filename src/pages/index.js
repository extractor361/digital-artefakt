import Head from "next/head";
import { useTranslation } from "next-i18next"; // ✅ Import t() hooka
import { serverSideTranslations } from "next-i18next/serverSideTranslations"; // ✅ Za SSR prevode
import useBodyClass from "@/hooks/useBodyClass";

import Header3 from "@/components/header/Header3";
import Banner3 from "@/components/bannner/Banner3";
import Partner3 from "@/components/partner/Partner3";
import Solution3 from "@/components/solutions/Solution3";
import About3 from "@/components/about/About3";
import SuccessStory3 from "@/components/successStorys/SuccessStory3";
import Testimonial3 from "@/components/testimonial/Testimonial3";
import PricingPlan3 from "@/components/pricingplan/PricingPlan3";
import Home3Contact from "@/components/contact/Home3Contact";
import Footer3 from "@/components/footer/Footer3";

export default function Home() {
  useBodyClass("home-dark2");

const { t } = useTranslation("common", { useSuspense: false });

  return (
    <>
      <Head>
        <title>{t("seo.title")}</title>
        <meta
          name="description"
          content={t("seo.description", "Dobrodošli na Digital Artefakt")}
        />
        <meta
          name="keywords"
          content={t(
            "seo.keywords",
            "digital, artefakt, web, app, marketing"
          )}
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/assets/img/logo.png" />

        {/* Open Graph */}
        <meta property="og:title" content={t("seo.ogTitle", "Digital Artefakt – Home")} />
        <meta
          property="og:description"
          content={t("seo.ogDescription", "Dobrodošli na Digital Artefakt")}
        />
        <meta property="og:image" content="/assets/img/home-3/naslovna1.png" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.digital-artefakt.me" />
      </Head>

      {/* Komponente */}
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

// ✅ Dodaj ovo za SSR prevod podršku
export async function getStaticProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ["common"])),
    },
  };
}
