import { useEffect, useState } from "react";
import useMagneticHover from "@/hooks/useMagneticHover";
import Script from "next/script";

import "../../public/assets/css/bootstrap-icons.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "../../public/assets/css/bootstrap.min.css";
import "../../public/assets/css/boxicons.min.css";
import "../../public/assets/css/swiper-bundle.min.css";
import "../../public/assets/css/preloader.css";
import "../../public/assets/css/animate.min.css";
import "../../public/assets/css/style2.css";
import "node_modules/react-modal-video/css/modal-video.css";
import Preloader from "@/components/common/Preloader";


export default function App({ Component, pageProps }) {
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(false);
    setTimeout(() => {
      setLoading(true);
    }, 3000);
  }, []);
  useMagneticHover();
  useEffect(() => {
    import("bootstrap/dist/js/bootstrap");
  }, []);
  
  return (
    <>

      {loading ? (
        <>
          <Component {...pageProps} />
          <Script id="wow" src="/js/wow.min.js">
          
          </Script>
<Script id="tawk-to" strategy="afterInteractive">
  {`
    var Tawk_API = Tawk_API || {}, Tawk_LoadStart = new Date();
    (function(){
      var s1 = document.createElement("script"), s0 = document.getElementsByTagName("script")[0];
      s1.async = true;
      s1.src = 'https://embed.tawk.to/688f250171bfc61926225957/1j1nih47q';
      s1.charset = 'UTF-8';
      s1.setAttribute('crossorigin', '*');
      s0.parentNode.insertBefore(s1, s0);
    })();
  `}
</Script>

          <Script
            id="initWow"
            strategy="lazyOnload"
          >{`new WOW().init();`}</Script>
        </>
      ) : (
        <Preloader />
      )}
    </>
  );
}
