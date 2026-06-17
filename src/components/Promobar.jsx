import React from "react";
import Marquee from "react-fast-marquee";
import { useTranslation } from "react-i18next";

function PromoBar() {
  const { t } = useTranslation("common");

  return (
    <div className="promo-bar">
      <Marquee
        speed={45}
        gradient={false}
        pauseOnHover={true}
        autoFill={true}
      >
        <div className="promo-bar-item">
          🚀 {t("Izrada web sajtova po mjeri")}
        </div>

        <div className="promo-bar-item">
          ⚡ {t("Besplatna konsultacija")}
        </div>

        <div className="promo-bar-item">
          💻 {t("Web aplikacije i poslovni softver")}
        </div>

        <div className="promo-bar-item">
          🔥 {t("Digitalizujte svoje poslovanje")}
        </div>

        <div className="promo-bar-item">
          📩 {t("Kontaktirajte nas danas")}
        </div>
      </Marquee>
    </div>
  );
}

export default PromoBar;