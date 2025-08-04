import Link from 'next/link';
import React from 'react';

function Footer3() {
  return (
    <footer>
      <div className="footer-top">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="footer-top-content">
                <div className="footer-logo">
                  <Link legacyBehavior href="/">
                    <a><img style={{width:150}} className="img-fluid" src="/assets/img/logo.svg" alt="Logo firme" /></a>
                  </Link>
                </div>
                <div className="footer-contect">
                  <div className="icon">
                    {/* Telefon ikonica */}
                    📞
                  </div>
                  <div className="content">
                    <span>Pozovite nas</span>
                    <h6><a href="tel:+382 68062361">+382 68062361</a></h6>
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
                <h4>📍 Adresa</h4>
                <a href="#">Bulevar Revolucije C-7, Bar</a>
              </div>
              <div className="footer-contact mb-40">
                <h4>📧 Email</h4>
                <a href="mailto:office@digital-artefakt.me">office@digital-artefakt.me</a><br />
                <a href="mailto:info@digital-artefakt.me">info@digital-artefakt.me</a><br />

              </div>
              <div className="footer-contact">
                <h6>Prijavi se na novosti</h6>
                <form>
                  <div className="form-inner">
                    <input type="email" placeholder="Unesite email..." />
                    <button disabled type="submit">📨</button>
                  </div>
                </form>
              </div>
            </div>
          </div>

          <div className="col-lg-3 col-sm-6 d-flex justify-content-lg-start justify-content-sm-end">
            <div className="footer-widget">
              <div className="widget-title">
                <h4>Naše usluge</h4>
              </div>
              <div className="menu-container">
                <ul>
                  <li><Link href="/usluge/izrada-veb-sajta">Izrada veb sajta</Link></li>
                  <li><Link href="/usluge/izrada-veb-aplikacija">Izrada veb aplikacija</Link></li>
                  <li><Link href="/usluge/izrada-mobilnih-aplikacija">Izrada mobilnih aplikacija</Link></li>
                  <li><Link href="/usluge/SEO">Optimizacija za pretraživače</Link></li>
                  <li><Link href="/usluge/oglasavanje">Oglašavanje na Google-u i društvenim mrežama</Link></li>
                  <li><Link href="/usluge/veb-sigurnost">Veb Sigurnost</Link></li>
                </ul>
              </div>
            </div>
          </div>

          <div className="col-lg-2 col-sm-6 d-flex justify-content-lg-center">
            <div className="footer-widget">
              <div className="widget-title">
                <h4>O nama</h4>
              </div>
              <div className="menu-container">
                <ul>
                  <li><Link href="/onama">Ko smo mi</Link></li>
                  <li><Link href="/projekti">Projekti</Link></li>
                  <li><Link href="/cjenovnik">Cenovnik</Link></li>
                  <li><Link href="/kontakt">Kontakt</Link></li>
                </ul>
              </div>
            </div>
          </div>

          <div className="col-lg-3 col-sm-6 d-flex justify-content-sm-end">
            <div className="footer-widget">
              <div className="widget-title">
                <h4>Podrška i informacije</h4>
              </div>
              <div className="menu-container">
                <ul>
                  <li><Link href="#">Tehnička podrška</Link></li>
                  <li><Link href="#">Pravila korišćenja</Link></li>
                  <li><Link href="#">Politika privatnosti</Link></li>
                  <li><Link href="#">Zaposli se kod nas</Link></li>
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
                  <p>© {new Date().getFullYear()} <a href="/">Digital Artefakt</a> | Sva prava zadržana</p>
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
