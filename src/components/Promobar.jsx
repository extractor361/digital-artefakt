import React from "react";
import Link from "next/link";
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
        <Link href="/kontakt?src=promo-bar&offer=popust" className="promo-bar-link">
          <div className="promo-bar-item">
            🔥 {t("Ostvari promo popust za novi projekat")}
          </div>
        </Link>

        <Link href="/ponuda-veb-sajt?src=promo-bar" className="promo-bar-link">
          <div className="promo-bar-item">
            💻 {t("Izračunajte cijenu web sajta")}
          </div>
        </Link>

        <Link href="/kontakt?src=promo-bar&offer=konsultacija" className="promo-bar-link">
          <div className="promo-bar-item">
            ⚡ {t("Besplatna konsultacija")}
          </div>
        </Link>

        <Link href="/usluge" className="promo-bar-link">
          <div className="promo-bar-item">
            🚀 {t("Web aplikacije i softver po mjeri")}
          </div>
        </Link>

        <Link href="/usluge/oglasavanje" className="promo-bar-link">
          <div className="promo-bar-item">
            📈 {t("Oglašavanje koje donosi upite")}
          </div>
        </Link>

        <Link href="/kontakt?src=promo-bar" className="promo-bar-link">
          <div className="promo-bar-item">
            📩 {t("Kontaktirajte nas danas")}
          </div>
        </Link>
      </Marquee>
    </div>
  );
}

export default PromoBar;