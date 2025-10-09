import { useEffect, useState } from "react";
import useMagneticHover from "@/hooks/useMagneticHover";
import Script from "next/script";
import Preloader from "@/components/common/Preloader";

import "../../public/assets/css/bootstrap-icons.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "../../public/assets/css/bootstrap.min.css";
import "../../public/assets/css/boxicons.min.css";
import "../../public/assets/css/swiper-bundle.min.css";
import "../../public/assets/css/preloader.css";
import "../../public/assets/css/animate.min.css";
import "../../public/assets/css/style2.css";
import "node_modules/react-modal-video/css/modal-video.css";

export default function App({ Component, pageProps }) {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Client-only hook
    useMagneticHover();

    // Import bootstrap JS
    import("bootstrap/dist/js/bootstrap");

    // Delay preloader for 3 seconds
    const timer = setTimeout(() => setLoading(false), 3000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {/* Preloader */}
      {loading && <Preloader />}

      {/* Main component */}
      <Component {...pageProps} />

      {/* WOW.js */}
      <Script
        src="/js/wow.min.js"
        strategy="afterInteractive"
        onLoad={() => new WOW().init()}
      />

      {/* Tawk.to */}
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
