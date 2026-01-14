import Link from 'next/link';
import React from 'react';
import { useTranslation } from 'next-i18next';

function Footer3() {
  const { t } = useTranslation(); // hook za prevode

  return (
    <footer>
      <div className="footer-top">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="footer-top-content">
                <div className="footer-logo">
                  <Link legacyBehavior href="/">
                    <a>
                      <img style={{ width: 150 }} className="img-fluid" src="/assets/img/logo.svg" alt={t('Logo firme')} />
                    </a>
                  </Link>
                </div>
                <div className="footer-contect">
                  <div className="icon">📞</div>
                  <div className="content">
                    <span>{t('Pozovite nas')}</span>
                    <h6><a href="tel:+38268062361">+382 68062361</a></h6>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container">
        <div className="row g-lg-4 gy-5">
          <div className="col-lg-4 col-sm-6 d-flex">
            <div className="footer-widget">
              <div className="footer-contact mb-40">
                <h4>📍 {t('Adresa')}</h4>
                <a href="#">{t('Bulevar Revolucije C-7, Bar')}</a>
              </div>
              <div className="footer-contact mb-40">
                <h4>📧 {t('Email')}</h4>
                <a href="mailto:office@digital-artefakt.me">office@digital-artefakt.me</a><br />
                <a href="mailto:info@digital-artefakt.me">info@digital-artefakt.me</a>
              </div>
              <div className="footer-contact">
                <h6>{t('Prijavi se na novosti')}</h6>
                <form>
                  <div className="form-inner">
                    <input type="email" placeholder={t('Unesite email...')} />
                    <button disabled type="submit">📨</button>
                  </div>
                </form>
              </div>
            </div>
          </div>

          <div className="col-lg-2 col-sm-6 d-flex justify-content-lg-start justify-content-sm-end">
            <div className="footer-widget">
              <div className="widget-title">
                <h4>{t('Naše usluge')}</h4>
              </div>
              <div className="menu-container">
                <ul>
                  <li><Link legacyBehavior href="/usluge/izrada-veb-sajta">{t('Izrada web sajta')}</Link></li>
                  <li><Link legacyBehavior href="/usluge/izrada-veb-aplikacija">{t('Izrada web aplikacija')}</Link></li>
                  <li><Link legacyBehavior href="/usluge/izrada-mobilnih-aplikacija">{t('Izrada mobilnih aplikacija')}</Link></li>
                  <li><Link legacyBehavior href="/usluge/SEO">{t('Optimizacija za pretraživače')}</Link></li>
                  <li><Link legacyBehavior href="/usluge/oglasavanje">{t('Oglašavanje na Google-u i društvenim mrežama')}</Link></li>
                  <li><Link legacyBehavior href="/usluge/veb-sigurnost">{t('Web Sigurnost')}</Link></li>
                </ul>
              </div>
            </div>
          </div>

          <div className="col-lg-2 col-sm-6 d-flex justify-content-lg-center">
            <div className="footer-widget">
              <div className="widget-title">
                <h4>{t('O nama')}</h4>
              </div>
              <div className="menu-container">
                <ul>
                  <li><Link legacyBehavior href="/onama">{t('Ko smo mi')}</Link></li>
                  <li><Link legacyBehavior href="/projekti">{t('Projekti')}</Link></li>
                  <li><Link legacyBehavior href="/cjenovnik">{t('Cenovnik')}</Link></li>
                  <li><Link legacyBehavior href="/kontakt">{t('Kontakt')}</Link></li>
                </ul>
              </div>
            </div>
          </div>

          <div className="col-lg-2 col-sm-6 d-flex justify-content-sm-end">
            <div className="footer-widget">
              <div className="widget-title">
                <h4>{t('Podrška i informacije')}</h4>
              </div>
              <div className="menu-container">
                <ul>
                  <li><Link legacyBehavior href="#">{t('Tehnička podrška')}</Link></li>
                  <li><Link legacyBehavior href="#">{t('Pravila korišćenja')}</Link></li>
                  <li><Link legacyBehavior href="#">{t('Politika privatnosti')}</Link></li>
                  <li><Link legacyBehavior href="#">{t('Zaposli se kod nas')}</Link></li>
                </ul>
              </div>
            </div>
          </div>

          <div className="col-lg-2 col-sm-6 d-flex justify-content-sm-end">
              <div className="footer-widget">
              <div className="widget-title">
                <h4>{t('Web dizajn')}</h4>
            </div>
                <div className="menu-container">
               <ul>
                      <li><Link legacyBehavior href="#"><a>Web dizajn Podgorica</a></Link></li>
                    <li><Link legacyBehavior href="#"><a>Web dizajn Bar</a></Link></li>
                    <li><Link legacyBehavior href="#"><a>Web dizajn Budva</a></Link></li>
                    <li><Link legacyBehavior href="#"><a>Web dizajn Nikšić</a></Link></li>
                    <li><Link legacyBehavior href="#"><a>Web dizajn Herceg Novi</a></Link></li>
                  </ul>
                </div>
                </div>
          </div>

          </div>
      </div>

      <div className="footer-btm">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="footer-btn-content">
                <div className="copyright-area">
                  <p>© {new Date().getFullYear()} <a href="/">Digital Artefakt</a> | {t('Sva prava zadržana')}</p>
                </div>
                <div className="footer-social">
                  <ul>
                    <li><a href="https://www.facebook.com/DigitalArtefakt/"><i className="bx bxl-facebook" /></a></li>
                    <li><a href="https://www.linkedin.com/company/digital-artefakt/?originalSubdomain=me"><i className="bx bxl-linkedin" /></a></li>
                    <li><a href="https://www.instagram.com/digital_artefakt/"><i className="bx bxl-instagram" /></a></li>
                    <li><a href="https://github.com/extractor361"><i className="bx bxl-github" /></a></li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer3;
