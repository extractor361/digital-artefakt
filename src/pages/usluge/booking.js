import Breadcrumb from "@/components/common/Breadcrumb";
import Layout from "@/components/layout/Layout";
import Link from "next/link";
import React from "react";
import Head from "next/head";

function BookingServicePage() {
  return (
    <Layout>
      <Head>
        <meta charset="UTF-8" />
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

      <div className="service-details ">
        <div className="about-services sec-mar">
          <div className="container">
            <div className="row gy-5">
              
              <div className="col-lg-6 d-flex align-items-center">
                <div className="about-content">
                  <div className="section-title-5">
                    <h1>
                      Booking sistemi <br /> & upravljanje nalozima
                    </h1>
                  </div>

                  <p>
                    Pomažemo vam da automatizujete rezervacije i maksimalno iskoristite vaš smještaj ili uslugu.
                    <br /><br />

                    Nudimo dvije opcije:
                  </p>

                  <ul style={{ paddingLeft: "40px", margin: "20px 0" }}>
                    <li>Izrada custom booking sistema za vaš sajt</li>
                    <li>Profesionalno upravljanje Booking i Airbnb nalozima</li>
                  </ul>

                  <p>
                    Ako ne želite vlastiti sistem – mi optimizujemo vaše postojeće naloge,
                    povezujemo kalendare i automatizujemo cijeli proces rezervacija.
                  </p>

                  <ul className="about-featue">
                    <li>Izrada booking sistema (apartmani, rent a car, ture)</li>
                    <li>Setup i optimizacija Booking.com i Airbnb naloga</li>
                    <li>Sinhronizacija kalendara (multi-platform)</li>
                    <li>Automatsko upravljanje dostupnošću</li>
                    <li>Povećanje broja rezervacija</li>
                    <li>Integracija sa vašim web sajtom</li>
                  </ul>
                </div>
              </div>

              <div className="col-lg-6">
                <div className="service-img">
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

        {/* HOW WE WORK */}
        <div className="how-we-work-section sec-mar">
          <div className="container">
            <div className="section-title">
              <h2>Kako radimo</h2>
            </div>
          </div>

          <div className="work-item">
            <div className="container-fluid">
              <div className="row justify-content-center gy-5">

                <div className="col">
                  <div className="single-work">
                    <h3>Analiza poslovanja</h3>
                    <p>
                      Razumijemo vaš model – apartmani, vila, rent a car ili ture.
                    </p>
                  </div>
                </div>

                <div className="col">
                  <div className="single-work">
                    <h3>Postavljanje sistema</h3>
                    <p>
                      Kreiramo booking sistem ili optimizujemo postojeće naloge.
                    </p>
                  </div>
                </div>

                <div className="col">
                  <div className="single-work">
                    <h3>Sinhronizacija</h3>
                    <p>
                      Povezujemo sve platforme kako bi izbjegli duple rezervacije.
                    </p>
                  </div>
                </div>

                <div className="col">
                  <div className="single-work">
                    <h3>Automatizacija</h3>
                    <p>
                      Automatizujemo dostupnost, cijene i rezervacije.
                    </p>
                  </div>
                </div>

                <div className="col">
                  <div className="single-work">
                    <h3>Optimizacija</h3>
                    <p>
                      Povećavamo vidljivost i broj rezervacija.
                    </p>
                  </div>
                </div>

              </div>
            </div>
          </div>
        </div>

        {/* WHY US */}
        <div className="service-sort-driscription-area sec-mar">
          <div className="container">
            <div className="row">
              
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
            <div className="row gy-5">

              <div className="col-lg-6">
                <img
                  className="img-fluid"
                  src="../../assets/img/booking-faq.png"
                  alt=""
                />
              </div>

              <div className="col-lg-6 d-flex align-items-center">
                <div>
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
        </div>

      </div>

      <div className="home4-contact-area">
        <div className="container text-center">
          <h2>Započnimo saradnju</h2>
          <Link href="/kontakt">
            <a>Kontaktirajte nas</a>
          </Link>
        </div>
      </div>
    </Layout>
  );
}

export default BookingServicePage;