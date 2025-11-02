import { useEffect, useState } from "react";
import { appWithTranslation } from "next-i18next";
import Script from "next/script";
import Preloader from "@/components/common/Preloader";
import useMagneticHover from "@/hooks/useMagneticHover";

import "../../public/assets/css/bootstrap-icons.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "../../public/assets/css/bootstrap.min.css";
import "../../public/assets/css/boxicons.min.css";
import "../../public/assets/css/swiper-bundle.min.css";
import "../../public/assets/css/preloader.css";
import "../../public/assets/css/animate.min.css";
import "../../public/assets/css/style2.css";
import "react-modal-video/css/modal-video.css";
import "../../i18n";

function App({ Component, pageProps }) {
  const [showLoader, setShowLoader] = useState(false);
  useMagneticHover();

  useEffect(() => {
    import("bootstrap/dist/js/bootstrap");

    if (typeof window === "undefined") return; // sigurno za SSR
    const alreadyShown = window.sessionStorage.getItem("loaderShown");

    if (!alreadyShown) {
      setShowLoader(true);
      const timer = setTimeout(() => {
        setShowLoader(false);
        window.sessionStorage.setItem("loaderShown", "true");
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, []);

  return (
    <>
      {showLoader && <Preloader />}
      {!showLoader && <Component {...pageProps} />}

      <Script
        src="/js/wow.min.js"
        strategy="afterInteractive"
        onLoad={() => {
          if (typeof window !== "undefined" && window.WOW) {
            new window.WOW().init();
          }
        }}
      />

      <Script id="tawk-to" strategy="afterInteractive">
        {`
          setTimeout(function() {
            var Tawk_API = Tawk_API || {}, Tawk_LoadStart = new Date();
            (function(){
              var s1 = document.createElement("script"), s0 = document.getElementsByTagName("script")[0];
              s1.async = true;
              s1.src = 'https://embed.tawk.to/688f250171bfc61926225957/1j1nih47q';
              s1.charset = 'UTF-8';
              s1.setAttribute('crossorigin', '*');
              s0.parentNode.insertBefore(s1, s0);
            })();
          }, 5000);
        `}
      </Script>
    </>
  );
}

export default appWithTranslation(App);
