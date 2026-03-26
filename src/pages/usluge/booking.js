import Breadcrumb from "@/components/common/Breadcrumb";
import Layout from "@/components/layout/Layout";
import Link from "next/link";
import React from "react";
import Head from "next/head";

function BookingServicePage() {
  return (
    <Layout>
      <Head>
        <meta charSet="UTF-8" />
        <title>Booking sistemi i upravljanje rezervacijama | Crna Gora</title>
        <meta
          name="description"
          content="Izrada booking sistema ili profesionalno upravljanje Booking.com i Airbnb nalozima. Sinkronizacija kalendara, automatizacija rezervacija i povećanje prihoda."
        />
        <meta
          name="keywords"
          content="booking sistem, booking.com upravljanje, airbnb menadžment, sinhronizacija kalendara, rezervacije, rent a car sistem, apartmani booking"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <Breadcrumb
        pageList="Booking sistemi"
        title="Rezervacije bez stresa"
        pageName="Booking sistemi"
      />

      {/* About Service */}
      <div className="service-details sec-mar">
        <div className="about-services">
          <div className="container">
            <div className="row gy-5 align-items-center">
              
              <div className="col-lg-6">
                <div className="about-content">
                  <div className="section-title-5">
                    <h1>Booking sistemi <br /> & upravljanje nalozima</h1>
                  </div>
                  <p>
                    Pomažemo vam da automatizujete rezervacije i maksimalno iskoristite vaš smještaj ili uslugu.
                  </p>
                  <ul className="about-featue" style={{ paddingLeft: "20px" }}>
                    <li>Izrada custom booking sistema za vaš sajt</li>
                    <li>Profesionalno upravljanje Booking i Airbnb nalozima</li>
                    <li>Setup i optimizacija naloga</li>
                    <li>Sinhronizacija kalendara (multi-platform)</li>
                    <li>Automatsko upravljanje dostupnošću</li>
                    <li>Povećanje broja rezervacija</li>
                    <li>Integracija sa vašim web sajtom</li>
                  </ul>
                </div>
              </div>

              <div className="col-lg-6">
                <div className="service-img text-center">
                  <img
                    className="img-fluid"
                    src="../../assets/img/booking.png"
                    alt="Booking sistemi"
                  />
                </div>
              </div>

            </div>
          </div>
        </div>

        {/* How We Work */}
        <div className="how-we-work-section sec-mar">
          <div className="container">
            <div className="section-title">
              <h2>Kako radimo</h2>
            </div>
            <div className="row gy-5 justify-content-center">

              <div className="col-md-4">
                <div className="single-work">
                  <div className="work-icon">
                    <img src="../../assets/icons/analysis.png" alt="Analiza poslovanja" />
                  </div>
                  <h3>Analiza poslovanja</h3>
                  <p>Razumijemo vaš model – apartmani, vila, rent a car ili ture.</p>
                </div>
              </div>

              <div className="col-md-4">
                <div className="single-work">
                  <div className="work-icon">
                    <img src="../../assets/icons/setup.png" alt="Postavljanje sistema" />
                  </div>
                  <h3>Postavljanje sistema</h3>
                  <p>Kreiramo booking sistem ili optimizujemo postojeće naloge.</p>
                </div>
              </div>

              <div className="col-md-4">
                <div className="single-work">
                  <div className="work-icon">
                    <img src="../../assets/icons/sync.png" alt="Sinhronizacija" />
                  </div>
                  <h3>Sinhronizacija</h3>
                  <p>Povezujemo sve platforme kako bi izbjegli duple rezervacije.</p>
                </div>
              </div>

              <div className="col-md-4">
                <div className="single-work">
                  <div className="work-icon">
                    <img src="../../assets/icons/automation.png" alt="Automatizacija" />
                  </div>
                  <h3>Automatizacija</h3>
                  <p>Automatizujemo dostupnost, cijene i rezervacije.</p>
                </div>
              </div>

              <div className="col-md-4">
                <div className="single-work">
                  <div className="work-icon">
                    <img src="../../assets/icons/optimization.png" alt="Optimizacija" />
                  </div>
                  <h3>Optimizacija</h3>
                  <p>Povećavamo vidljivost i broj rezervacija.</p>
                </div>
              </div>

            </div>
          </div>
        </div>

        {/* Why Us */}
        <div className="service-sort-driscription-area sec-mar">
          <div className="container">
            <div className="row gy-5">
              <div className="col-md-6">
                <h3>Zašto odabrati nas?</h3>
                <p>
                  Ne nudimo samo tehničko rješenje – fokusirani smo na rezultate.
                  Cilj nam je više rezervacija, manje grešaka i potpuno automatizovan sistem.
                </p>
              </div>
              <div className="col-md-6">
                <h3>Fokus na profit</h3>
                <p>
                  Optimizujemo vaše naloge i sistem tako da povećamo popunjenost i prihode.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* FAQ */}
        <div className="service-faq-area sec-mar">
          <div className="container">
            <div className="row gy-5 align-items-center">
              <div className="col-lg-6">
                <img
                  className="img-fluid"
                  src="../../assets/img/booking-faq.png"
                  alt="FAQ Booking"
                />
              </div>
              <div className="col-lg-6">
                <h2>Često postavljena pitanja</h2>
                <div className="accordion">
                  <div className="accordion-item">
                    <button className="accordion-button">
                      Da li mi treba sopstveni booking sistem?
                    </button>
                    <div className="accordion-body">
                      Ne mora. Možemo raditi samo optimizaciju vaših postojećih naloga.
                    </div>
                  </div>
                  <div className="accordion-item">
                    <button className="accordion-button">
                      Da li povezujete Booking i Airbnb?
                    </button>
                    <div className="accordion-body">
                      Da, radimo potpunu sinhronizaciju kalendara.
                    </div>
                  </div>
                  <div className="accordion-item">
                    <button className="accordion-button">
                      Koliko brzo mogu dobiti rezervacije?
                    </button>
                    <div className="accordion-body">
                      Već nakon optimizacije naloga može doći do rasta vidljivosti.
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="home4-contact-area sec-mar">
          <div className="container text-center">
            <h2>Započnimo saradnju</h2>
            <Link href="/kontakt">
              <a className="btn btn-primary">Kontaktirajte nas</a>
            </Link>
          </div>
        </div>

      </div>
    </Layout>
  );
}

export default BookingServicePage;