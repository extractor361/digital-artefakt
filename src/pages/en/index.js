import { useTranslations } from 'next-intl';
import Head from 'next/head';
import useBodyClass from '@/hooks/useBodyClass';

import Header3 from '@/components/header/Header3';
import Banner3 from '@/components/bannner/Banner3';
import Partner3 from '@/components/partner/Partner3';
import Solution3 from '@/components/solutions/Solution3';
import About3 from '@/components/about/About3';
import SuccessStory3 from '@/components/successStorys/SuccessStory3';
import Testimonial3 from '@/components/testimonial/Testimonial3';
import PricingPlan3 from '@/components/pricingplan/PricingPlan3';
import Home3Contact from '@/components/contact/Home3Contact';
import Footer3 from '@/components/footer/Footer3';

export default function Home({ messages }) {
  const t = useTranslations(); // hook iz next-intl
  useBodyClass("home-dark2");

  return (
    <>
      <Head>
        <title>{t('seo.title')}</title>
        <meta name="description" content={t('seo.description')} />
        <meta name="keywords" content={t('seo.keywords')} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/assets/img/logo.png" />

        {/* Open Graph */}
        <meta property="og:title" content={t('seo.ogTitle')} />
        <meta property="og:description" content={t('seo.ogDescription')} />
        <meta property="og:image" content="/assets/img/home-3/naslovna1.png" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.digital-artefakt.me" />
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

// next-intl getStaticProps za preuzimanje JSON fajla
export async function getStaticProps({ locale }) {
  try {
    // Koristimo absolute path od root projekta
    const messages = await import(`${process.cwd()}/translation/${locale}.json`);
    return { props: { messages: messages.default } };
  } catch (err) {
    console.error(`Nedostaje prevod za locale: ${locale}`);
    return { props: { messages: {} } };
  }
}
