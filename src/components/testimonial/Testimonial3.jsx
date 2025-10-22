import React, { useMemo } from "react";
import SwiperCore, { Autoplay, EffectFade, Navigation, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { useTranslation } from "react-i18next";

SwiperCore.use([Pagination, Autoplay, EffectFade, Navigation]);

const testimonials = [
  { name: "Damjan Nikic", date: "11 Dec 2023", review: "Veoma dobro napravljeno, sve pohvale." },
  { name: "Maja", date: "4 Jul 2023", review: "Izuzetno korektna i profesionalna saradnja." },
  { name: "Miloš Bubanja", date: "17 Sept 2022", review: "Odličan za saradnju, preporučujem svima!" },
  { name: "Sanja P", date: "26 Jul 2022", review: "Sve pohvale za izradu sajta. Hvala puno na profesionalnosti i posvećenosti." },
  { name: "Darijan Duraković", date: "15 Dec 2021", review: "Kvalitetna izrada web sajta. Svi naši zahtjevi su i više nego ispoštovani. Predusretljiva i profesionalna saradnja." },
  { name: "Uroš Kanjuh", date: "5 Dec 2021", review: "Uspješno odrađen projekat! Profesionalnost na nivou!" },
  { name: "Matan Vukcevic", date: "29 Oct 2021", review: "Fenomenalna stvar za izradu sajtova, oduševljen posvećenošću i profesionalizmom tokom izrade mog sajta. Preporučujem svima." },
  { name: "Amar Licina", date: "27 Jun 2021", review: "Profesionalnost na nivou, topla preporuka." },
  { name: "Aldin Šukurica", date: "18 Apr 2021", review: "Definicija profesionalizma ogleda se u Digital Artefaktu. Visok nivo kvaliteta, zaštite, izgleda i svega onog što treba." },
  { name: "Milos Klisic", date: "6 Apr 2021", review: "Profesionalan sajt su izradili za moju firmu. Preporučujem ih za izradu web sajta." }
];

function Testimonial3() {
  const { t } = useTranslation("common");

  const slider = useMemo(() => ({
    loop: true,
    spaceBetween: 30,
    speed: 2000,
    centeredSlides: true,
    navigation: { nextEl: ".nextbtn2", prevEl: ".prevbtn2" },
    autoplay: { delay: 5000 },
    breakpoints: {
      280: { slidesPerView: 1 },
      576: { slidesPerView: 1 },
      768: { slidesPerView: 1.5 },
      992: { slidesPerView: 2 },
      1200: { slidesPerView: 2 }
    }
  }), []);

  return (
    <div className="home3-testimonil-area sec-mar">
      <div className="container">
        <div
          className="row mb-55 wow animate fadeInUp"
          data-wow-delay="200ms"
          data-wow-duration="1500ms"
        >
          <div className="col-lg-12 d-flex align-items-center justify-content-between gap-4 flex-wrap">
            <div className="section-title-3">
              <h2>{t("Testimonial3.title")}</h2>
              <p>{t("Testimonial3.text")}</p>
            </div>
            <div className="swiper-btn-group">
              <div className="swiper-btn prevbtn2">
                <i className="bi bi-arrow-left" />
              </div>
              <div className="swiper-btn nextbtn2">
                <i className="bi bi-arrow-right" />
              </div>
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col-lg-12">
            <Swiper {...slider} className="swiper home3-testimonial-slider">
              {testimonials.map((tItem, idx) => (
                <SwiperSlide className="swiper-slide" key={idx}>
                  <div className="testimonial-card3">
                    <div className="quate-icon">
                      <img src="../../assets/img/home-4/left-quote.svg" alt="" />
                    </div>
                    <div className="testimonial-top">
                      <div className="review-left">
                        <img src="../../assets/img/home-4/google.svg" alt="Google Review" />
                      </div>
                      <div className="review-right">
                        <ul className="star">
                          {[...Array(5)].map((_, i) => (
                            <li key={i}>
                              <i className="bi bi-star-fill" />
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                    <div className="testimonial-content">
                      <p>“{t(tItem.review)}”</p>
                    </div>
                    <div className="testimonial-btm">
                      <div className="author-area">
                        <div className="author-content">
                          <h4>{tItem.name}</h4>
                          <span>{t("Testimonial3.client")}</span>
                        </div>
                      </div>
                      <div className="review-date-and-time">
                        <p>{tItem.date}</p>
                        <span>--</span>
                      </div>
                    </div>
                  </div>
                  <div className="author-img">
                    <img src="../../assets/img/user.png" alt={tItem.name} />
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Testimonial3;
