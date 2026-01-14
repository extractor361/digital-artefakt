import { useEffect, useState } from "react";
import { appWithTranslation } from "next-i18next";
import Script from "next/script";
import Preloader from "@/components/common/Preloader";
import useMagneticHover from "@/hooks/useMagneticHover";
import { i18n } from "next-i18next";
import { useRouter } from "next/router";

// CSS imports
import "../../public/assets/css/bootstrap-icons.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "../../public/assets/css/bootstrap.min.css";
import "../../public/assets/css/boxicons.min.css";
import "../../public/assets/css/swiper-bundle.min.css";
import "../../public/assets/css/preloader.css";
import "../../public/assets/css/animate.min.css";
import "../../public/assets/css/style2.css";
import "react-modal-video/css/modal-video.css";

function App({ Component, pageProps }) {
  const [showLoader, setShowLoader] = useState(false);
  const router = useRouter();

  useMagneticHover();

  // 🔹 Global fix → kad se promijeni locale, promijeni i i18n jezik
  useEffect(() => {
    if (i18n && router.locale) {
      i18n.changeLanguage(router.locale);
    }
  }, [router.locale]);

  useEffect(() => {
    import("bootstrap/dist/js/bootstrap").catch(() => {});

    if (!sessionStorage.getItem("loaderShown")) {
      setShowLoader(true);

      const timer = setTimeout(() => {
        setShowLoader(false);
        sessionStorage.setItem("loaderShown", "true");
      }, 2200);

      return () => clearTimeout(timer);
    }
  }, []);

  return (
    <>
      {showLoader && <Preloader />}
      {!showLoader && (
        // 🔹 key={router.locale} → prisiljava kompletan re-render kod promjene jezika
        <Component key={router.locale} {...pageProps} />
      )}

      {/* WOW script */}
      <Script
        src="/js/wow.min.js"
        strategy="afterInteractive"
        onLoad={() => window.WOW && new WOW().init()}
      />

      {/* Tawk chat */}
      <Script id="tawk-to" strategy="afterInteractive">
        {`
          setTimeout(() => {
            var t = document.createElement("script");
            t.async = true;
            t.src = "https://embed.tawk.to/688f250171bfc61926225957/1j1nih47q";
            document.body.appendChild(t);
          }, 5000);
        `}
      </Script>
    </>
  );
}

export default appWithTranslation(App);
