import React, { useEffect, useState } from 'react';
import dynamic from 'next/dynamic';
import { useTranslation } from 'react-i18next';

// Dynamic import Marquee samo na klijentu
const Marquee = dynamic(() => import('react-fast-marquee'), { ssr: false });

function Partner3() {
  const { t, i18n } = useTranslation('common');
  const [ready, setReady] = useState(false);

  // Sačekaj da i18n bude inicijalizovan
  useEffect(() => {
    if (i18n.isInitialized) setReady(true);
  }, [i18n.isInitialized]);

  if (!ready) return null; // ili loader <p>Loading...</p>

  return (
    <div className="home3-partner-area" id="home3-partner-area">
      <div className="container-fluid">
        <div className="row g-4">
          {/* Leva kolona - naslov */}
          <div className="col-lg-3">
            <div className="partner-title">
              <h3>{t('Partner3', { defaultValue: 'Naši partneri' })}</h3>
            </div>
          </div>

          {/* Desna kolona - Marquee */}
          <div className="col-lg-9">
            <div className="partner-wrapper">
              <Marquee className="marquee_text" autoFill={true}>
                <img style={{ width: 150 }} src="../../assets/img/home-3/Advokatska-kancelarija-Durakovic-Logo-1.webp" alt="" />
                <img src="assets/img/home-3/star.svg" alt="" />
                <img style={{ width: 150 }} src="assets/img/home-3/doublel.webp" alt="" />
                <img src="assets/img/home-3/star.svg" alt="" />
                <img style={{ width: 150 }} src="assets/img/home-3/logotip-visnjic.webp" alt="" />
                <img src="assets/img/home-3/star.svg" alt="" />
                <img style={{ width: 150 }} src="assets/img/home-3/meddis.webp" alt="" />
                <img src="assets/img/home-3/star.svg" alt="" />
                <img style={{ width: 150 }} src="assets/img/home-3/rent-a-car-medo-logo-1.webp" alt="" />
                <img src="assets/img/home-3/star.svg" alt="" />
                <img style={{ width: 150 }} src="assets/img/home-3/logo-jovovic.webp" alt="" />
                <img src="assets/img/home-3/star.svg" alt="" />
                <img style={{ width: 150 }} src="assets/img/home-3/white-g-loho.svg" alt="" />
                <img src="assets/img/home-3/star.svg" alt="" />
                <img style={{ width: 150 }} src="assets/img/home-3/FK-Igalo-1929-Logo-1.webp" alt="" />
                <img src="assets/img/home-3/star.svg" alt="" />
                <img style={{ width: 150 }} src="assets/img/home-3/Logo slova - main plavi (1).png" alt="" />
                <img src="assets/img/home-3/star.svg" alt="" />
                <img style={{ width: 150 }} src="assets/img/home-3/protaxekn.png" alt="" />
                <img src="assets/img/home-3/star.svg" alt="" />
                <img style={{ width: 150 }} src="assets/img/home-3/bmgulv.png" alt="" />
                <img src="assets/img/home-3/star.svg" alt="" />
                <img style={{ width: 150 }} src="assets/img/home-3/partner-03.svg" alt="" />
                <img src="assets/img/home-3/star.svg" alt="" />
              </Marquee>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Partner3;
