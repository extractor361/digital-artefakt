import About3 from "../components/about/About3";
import Choose6 from "../components/choose/Choose6";
import Breadcrumb from "../components/common/Breadcrumb";
import Home3Contact from "../components/contact/Home3Contact";
import Feature4 from "../components/features/Feature4";
import Layout from "../components/layout/Layout";
import Partnar4 from "../components/partner/Partnar4";
import Testimonial3 from "../components/testimonial/Testimonial3";
import Head from "next/head";
import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

function AboutPage() {
  const { t } = useTranslation("common"); // ostaje common

  return (
    <Layout>
      <Head>
        <title>{t("page_title_about")}</title>
        <meta name="description" content={t("meta_description")} />
        <meta name="keywords" content={t("meta_keywords")} />
        <meta name="author" content="Digital Artefakt" />
        <meta name="robots" content="index, follow" />
        <link rel="icon" href="/assets/img/logo.png" />
      </Head>

      <Breadcrumb
        pageList={t("breadcrumb_title_about")}
        title={t("breadcrumb_subtitle_about")}
        pageName={t("breadcrumb_title_about")}
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

export async function getStaticProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ["common"])), // učitavamo common JSON
    },
  };
}

export default AboutPage;
