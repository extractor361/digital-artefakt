import Breadcrumb from "@/components/common/Breadcrumb";
import Layout from "@/components/layout/Layout";
import Link from "next/link";
import React from "react";
import { useTranslation } from "next-i18next";
import { useState } from "react";
import Head from "next/head";

function ServiceDetailsPage() {
  const { t } = useTranslation();

  const [loading, setLoading] = useState(false);

  return (
    <Layout>
      <Head>
        <meta charSet="UTF-8" />
        <title>
          {t(
            "Izrada Web Sajta po Mjeri | WordPress & Custom Razvoj | Crna Gora"
          )}
        </title>
        <meta
          name="description"
          content={t(
            "Projektujemo i razvijamo moderne, brze i bezbjedne veb sajtove po mjeri. WordPress, custom CMS, optimizacija, SEO i podrška – sve na jednom mjestu."
          )}
        />
        <meta
          name="keywords"
          content={t(
            "izrada sajta, web dizajn, WordPress sajt, razvoj web stranice, profesionalni sajt, sigurnost sajta, SEO optimizacija, responsive dizajn, web agencija Crna Gora"
          )}
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/assets/img/logo.png" type="image/png" />

        <meta
          property="og:title"
          content={t("Izrada Web Sajta | Digital Artefakt")}
        />
        <meta
          property="og:description"
          content={t(
            "Izrada profesionalnih i sigurnih web sajtova uz tehničku i dizajnersku ekspertizu. Prilagođeni razvoj i CMS rešenja."
          )}
        />
        <meta property="og:image" content="../assets/img/logo.png" />
        <meta
          property="og:url"
          content="https://www.digital-artefakt.me/izrada-veb-sajta"
        />
        <meta property="og:type" content="website" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content={t("Izrada Web Sajta | Digital Artefakt")}
        />
        <meta
          name="twitter:description"
          content={t(
            "Brzi, sigurni i optimizovani web sajtovi po vašoj mjeri. WordPress, SEO, dizajn i podrška."
          )}
        />
        <meta name="twitter:image" content="../assets/img/logo.png" />
      </Head>
      <Breadcrumb
        pageList={t("Izrada web sajta")}
        title={t("Profesionalni razvoj web sajta")}
        pageName={t("Izrada web sajta")}
      />
      <div className="service-details ">
        <div className="about-services sec-mar">
          <div className="container">
            <div className="row gy-5">
              <div
                className="col-lg-8 d-flex align-items-center wow animate fadeInLeft"
                data-wow-delay="200ms"
                data-wow-duration="1500ms"
              >
                <div className="about-content">
                  <div className="image" style={{ marginBottom: "25px" }}>
                    <img
                      src="../../assets/img/website development.png"
                      alt="Izrada mobilnih aplikacija"
                      style={{
                        width: "100%",
                        borderRadius: "12px",
                        boxShadow: "0 0 20px rgba(255,255,255,0.1)",
                      }}
                    />
                  </div>

                  <h1
                    style={{
                      color: "#fff",
                      fontSize: "32px",
                      marginBottom: "15px",
                    }}
                  >
                    {t("Izrada")} <br /> {t("Web Sajtova")}
                  </h1>

                  <div className="section-title-5">
                    <h1></h1>
                  </div>
                  <p>
                    {t(
                      "Razvijamo web sajtove koji unapređuju digitalno prisustvo i doprinose rastu poslovanja. Naše stranice su brze, sigurne, tehnički i logički optimizovane. Svaki projekat prilagođavamo industriji i ciljevima klijenta. Tehnologiju biramo strateški tako da koristimo WordPress ili posebna rješenja po mjeri, u zavisnosti od toga šta donosi najveću vrijednost za poslovanje."
                    )}
                  </p>
                  <ul className="about-featue">
                    <li>
                      <svg
                        width={15}
                        height={15}
                        viewBox="0 0 15 15"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M0.376831 8.16821C-0.247095 8.54593 -0.0579659 9.49862 0.662688 9.60837C1.24211 9.69666 1.52052 10.3701 1.17304 10.8431C0.740845 11.4312 1.27942 12.2389 1.98713 12.0639C2.55609 11.9231 3.07065 12.4387 2.9302 13.0088C2.75556 13.718 3.56158 14.2577 4.14855 13.8246C4.62054 13.4764 5.29275 13.7554 5.38073 14.336C5.49024 15.0581 6.44099 15.2476 6.81798 14.6224C7.12107 14.1198 7.84864 14.1198 8.15171 14.6224C8.52867 15.2476 9.47943 15.0581 9.58896 14.336C9.67707 13.7554 10.3492 13.4764 10.8211 13.8246C11.4081 14.2577 12.2142 13.718 12.0395 13.0088C11.899 12.4387 12.4136 11.9231 12.9826 12.0639C13.6903 12.2389 14.2289 11.4312 13.7967 10.8431C13.4492 10.3701 13.7276 9.69653 14.307 9.60837C15.0276 9.49864 15.2168 8.54597 14.5929 8.16821C14.0912 7.86452 14.0912 7.13547 14.5929 6.83178C15.2168 6.45407 15.0277 5.50138 14.307 5.39162C13.7276 5.30334 13.4492 4.62989 13.7967 4.15695C14.2289 3.56879 13.6903 2.76112 12.9826 2.93613C12.4136 3.07687 11.8991 2.5613 12.0395 1.99115C12.2141 1.28199 11.4081 0.742345 10.8211 1.17541C10.3492 1.52356 9.67695 1.2446 9.58896 0.664029C9.47945 -0.0580599 8.5287 -0.247606 8.15171 0.377594C7.84863 0.880237 7.12106 0.880237 6.81798 0.377594C6.44103 -0.247596 5.49027 -0.0580833 5.38073 0.664029C5.29263 1.24462 4.62054 1.5236 4.14855 1.17541C3.56158 0.742345 2.75554 1.28201 2.9302 1.99115C3.07065 2.56126 2.55612 3.07686 1.98713 2.93613C1.2794 2.76113 0.740845 3.56879 1.17304 4.15695C1.52049 4.62989 1.24209 5.30346 0.662688 5.39162C-0.0579425 5.50136 -0.247105 6.45403 0.376831 6.83178C0.878459 7.13548 0.878459 7.86453 0.376831 8.16821Z" />
                      </svg>
                      {t("Prilagođen dizajn za sve uređaje")}
                    </li>
                    <li>
                      <svg
                        width={15}
                        height={15}
                        viewBox="0 0 15 15"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M0.376831 8.16821C-0.247095 8.54593 -0.0579659 9.49862 0.662688 9.60837C1.24211 9.69666 1.52052 10.3701 1.17304 10.8431C0.740845 11.4312 1.27942 12.2389 1.98713 12.0639C2.55609 11.9231 3.07065 12.4387 2.9302 13.0088C2.75556 13.718 3.56158 14.2577 4.14855 13.8246C4.62054 13.4764 5.29275 13.7554 5.38073 14.336C5.49024 15.0581 6.44099 15.2476 6.81798 14.6224C7.12107 14.1198 7.84864 14.1198 8.15171 14.6224C8.52867 15.2476 9.47943 15.0581 9.58896 14.336C9.67707 13.7554 10.3492 13.4764 10.8211 13.8246C11.4081 14.2577 12.2142 13.718 12.0395 13.0088C11.899 12.4387 12.4136 11.9231 12.9826 12.0639C13.6903 12.2389 14.2289 11.4312 13.7967 10.8431C13.4492 10.3701 13.7276 9.69653 14.307 9.60837C15.0276 9.49864 15.2168 8.54597 14.5929 8.16821C14.0912 7.86452 14.0912 7.13547 14.5929 6.83178C15.2168 6.45407 15.0277 5.50138 14.307 5.39162C13.7276 5.30334 13.4492 4.62989 13.7967 4.15695C14.2289 3.56879 13.6903 2.76112 12.9826 2.93613C12.4136 3.07687 11.8991 2.5613 12.0395 1.99115C12.2141 1.28199 11.4081 0.742345 10.8211 1.17541C10.3492 1.52356 9.67695 1.2446 9.58896 0.664029C9.47945 -0.0580599 8.5287 -0.247606 8.15171 0.377594C7.84863 0.880237 7.12106 0.880237 6.81798 0.377594C6.44103 -0.247596 5.49027 -0.0580833 5.38073 0.664029C5.29263 1.24462 4.62054 1.5236 4.14855 1.17541C3.56158 0.742345 2.75554 1.28201 2.9302 1.99115C3.07065 2.56126 2.55612 3.07686 1.98713 2.93613C1.2794 2.76113 0.740845 3.56879 1.17304 4.15695C1.52049 4.62989 1.24209 5.30346 0.662688 5.39162C-0.0579425 5.50136 -0.247105 6.45403 0.376831 6.83178C0.878459 7.13548 0.878459 7.86453 0.376831 8.16821Z" />
                      </svg>
                      {t("Optimizovan za brzinu i sigurnost")}
                    </li>
                    <li>
                      <svg
                        width={15}
                        height={15}
                        viewBox="0 0 15 15"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M0.376831 8.16821C-0.247095 8.54593 -0.0579659 9.49862 0.662688 9.60837C1.24211 9.69666 1.52052 10.3701 1.17304 10.8431C0.740845 11.4312 1.27942 12.2389 1.98713 12.0639C2.55609 11.9231 3.07065 12.4387 2.9302 13.0088C2.75556 13.718 3.56158 14.2577 4.14855 13.8246C4.62054 13.4764 5.29275 13.7554 5.38073 14.336C5.49024 15.0581 6.44099 15.2476 6.81798 14.6224C7.12107 14.1198 7.84864 14.1198 8.15171 14.6224C8.52867 15.2476 9.47943 15.0581 9.58896 14.336C9.67707 13.7554 10.3492 13.4764 10.8211 13.8246C11.4081 14.2577 12.2142 13.718 12.0395 13.0088C11.899 12.4387 12.4136 11.9231 12.9826 12.0639C13.6903 12.2389 14.2289 11.4312 13.7967 10.8431C13.4492 10.3701 13.7276 9.69653 14.307 9.60837C15.0276 9.49864 15.2168 8.54597 14.5929 8.16821C14.0912 7.86452 14.0912 7.13547 14.5929 6.83178C15.2168 6.45407 15.0277 5.50138 14.307 5.39162C13.7276 5.30334 13.4492 4.62989 13.7967 4.15695C14.2289 3.56879 13.6903 2.76112 12.9826 2.93613C12.4136 3.07687 11.8991 2.5613 12.0395 1.99115C12.2141 1.28199 11.4081 0.742345 10.8211 1.17541C10.3492 1.52356 9.67695 1.2446 9.58896 0.664029C9.47945 -0.0580599 8.5287 -0.247606 8.15171 0.377594C7.84863 0.880237 7.12106 0.880237 6.81798 0.377594C6.44103 -0.247596 5.49027 -0.0580833 5.38073 0.664029C5.29263 1.24462 4.62054 1.5236 4.14855 1.17541C3.56158 0.742345 2.75554 1.28201 2.9302 1.99115C3.07065 2.56126 2.55612 3.07686 1.98713 2.93613C1.2794 2.76113 0.740845 3.56879 1.17304 4.15695C1.52049 4.62989 1.24209 5.30346 0.662688 5.39162C-0.0579425 5.50136 -0.247105 6.45403 0.376831 6.83178C0.878459 7.13548 0.878459 7.86453 0.376831 8.16821Z" />
                      </svg>
                      {t("SEO priprema za organsko rangiranje")}
                    </li>
                    <li>
                      <svg
                        width={15}
                        height={15}
                        viewBox="0 0 15 15"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M0.376831 8.16821C-0.247095 8.54593 -0.0579659 9.49862 0.662688 9.60837C1.24211 9.69666 1.52052 10.3701 1.17304 10.8431C0.740845 11.4312 1.27942 12.2389 1.98713 12.0639C2.55609 11.9231 3.07065 12.4387 2.9302 13.0088C2.75556 13.718 3.56158 14.2577 4.14855 13.8246C4.62054 13.4764 5.29275 13.7554 5.38073 14.336C5.49024 15.0581 6.44099 15.2476 6.81798 14.6224C7.12107 14.1198 7.84864 14.1198 8.15171 14.6224C8.52867 15.2476 9.47943 15.0581 9.58896 14.336C9.67707 13.7554 10.3492 13.4764 10.8211 13.8246C11.4081 14.2577 12.2142 13.718 12.0395 13.0088C11.899 12.4387 12.4136 11.9231 12.9826 12.0639C13.6903 12.2389 14.2289 11.4312 13.7967 10.8431C13.4492 10.3701 13.7276 9.69653 14.307 9.60837C15.0276 9.49864 15.2168 8.54597 14.5929 8.16821C14.0912 7.86452 14.0912 7.13547 14.5929 6.83178C15.2168 6.45407 15.0277 5.50138 14.307 5.39162C13.7276 5.30334 13.4492 4.62989 13.7967 4.15695C14.2289 3.56879 13.6903 2.76112 12.9826 2.93613C12.4136 3.07687 11.8991 2.5613 12.0395 1.99115C12.2141 1.28199 11.4081 0.742345 10.8211 1.17541C10.3492 1.52356 9.67695 1.2446 9.58896 0.664029C9.47945 -0.0580599 8.5287 -0.247606 8.15171 0.377594C7.84863 0.880237 7.12106 0.880237 6.81798 0.377594C6.44103 -0.247596 5.49027 -0.0580833 5.38073 0.664029C5.29263 1.24462 4.62054 1.5236 4.14855 1.17541C3.56158 0.742345 2.75554 1.28201 2.9302 1.99115C3.07065 2.56126 2.55612 3.07686 1.98713 2.93613C1.2794 2.76113 0.740845 3.56879 1.17304 4.15695C1.52049 4.62989 1.24209 5.30346 0.662688 5.39162C-0.0579425 5.50136 -0.247105 6.45403 0.376831 6.83178C0.878459 7.13548 0.878459 7.86453 0.376831 8.16821Z" />
                      </svg>
                      {t(
                        "Integracija sa CMS-om (WordPress ili prilagođeni sistem)"
                      )}{" "}
                    </li>
                    <li>
                      <svg
                        width={15}
                        height={15}
                        viewBox="0 0 15 15"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M0.376831 8.16821C-0.247095 8.54593 -0.0579659 9.49862 0.662688 9.60837C1.24211 9.69666 1.52052 10.3701 1.17304 10.8431C0.740845 11.4312 1.27942 12.2389 1.98713 12.0639C2.55609 11.9231 3.07065 12.4387 2.9302 13.0088C2.75556 13.718 3.56158 14.2577 4.14855 13.8246C4.62054 13.4764 5.29275 13.7554 5.38073 14.336C5.49024 15.0581 6.44099 15.2476 6.81798 14.6224C7.12107 14.1198 7.84864 14.1198 8.15171 14.6224C8.52867 15.2476 9.47943 15.0581 9.58896 14.336C9.67707 13.7554 10.3492 13.4764 10.8211 13.8246C11.4081 14.2577 12.2142 13.718 12.0395 13.0088C11.899 12.4387 12.4136 11.9231 12.9826 12.0639C13.6903 12.2389 14.2289 11.4312 13.7967 10.8431C13.4492 10.3701 13.7276 9.69653 14.307 9.60837C15.0276 9.49864 15.2168 8.54597 14.5929 8.16821C14.0912 7.86452 14.0912 7.13547 14.5929 6.83178C15.2168 6.45407 15.0277 5.50138 14.307 5.39162C13.7276 5.30334 13.4492 4.62989 13.7967 4.15695C14.2289 3.56879 13.6903 2.76112 12.9826 2.93613C12.4136 3.07687 11.8991 2.5613 12.0395 1.99115C12.2141 1.28199 11.4081 0.742345 10.8211 1.17541C10.3492 1.52356 9.67695 1.2446 9.58896 0.664029C9.47945 -0.0580599 8.5287 -0.247606 8.15171 0.377594C7.84863 0.880237 7.12106 0.880237 6.81798 0.377594C6.44103 -0.247596 5.49027 -0.0580833 5.38073 0.664029C5.29263 1.24462 4.62054 1.5236 4.14855 1.17541C3.56158 0.742345 2.75554 1.28201 2.9302 1.99115C3.07065 2.56126 2.55612 3.07686 1.98713 2.93613C1.2794 2.76113 0.740845 3.56879 1.17304 4.15695C1.52049 4.62989 1.24209 5.30346 0.662688 5.39162C-0.0579425 5.50136 -0.247105 6.45403 0.376831 6.83178C0.878459 7.13548 0.878459 7.86453 0.376831 8.16821Z" />
                      </svg>
                      {t("E-commerce rješenja")}{" "}
                    </li>
                    <li>
                      <svg
                        width={15}
                        height={15}
                        viewBox="0 0 15 15"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M0.376831 8.16821C-0.247095 8.54593 -0.0579659 9.49862 0.662688 9.60837C1.24211 9.69666 1.52052 10.3701 1.17304 10.8431C0.740845 11.4312 1.27942 12.2389 1.98713 12.0639C2.55609 11.9231 3.07065 12.4387 2.9302 13.0088C2.75556 13.718 3.56158 14.2577 4.14855 13.8246C4.62054 13.4764 5.29275 13.7554 5.38073 14.336C5.49024 15.0581 6.44099 15.2476 6.81798 14.6224C7.12107 14.1198 7.84864 14.1198 8.15171 14.6224C8.52867 15.2476 9.47943 15.0581 9.58896 14.336C9.67707 13.7554 10.3492 13.4764 10.8211 13.8246C11.4081 14.2577 12.2142 13.718 12.0395 13.0088C11.899 12.4387 12.4136 11.9231 12.9826 12.0639C13.6903 12.2389 14.2289 11.4312 13.7967 10.8431C13.4492 10.3701 13.7276 9.69653 14.307 9.60837C15.0276 9.49864 15.2168 8.54597 14.5929 8.16821C14.0912 7.86452 14.0912 7.13547 14.5929 6.83178C15.2168 6.45407 15.0277 5.50138 14.307 5.39162C13.7276 5.30334 13.4492 4.62989 13.7967 4.15695C14.2289 3.56879 13.6903 2.76112 12.9826 2.93613C12.4136 3.07687 11.8991 2.5613 12.0395 1.99115C12.2141 1.28199 11.4081 0.742345 10.8211 1.17541C10.3492 1.52356 9.67695 1.2446 9.58896 0.664029C9.47945 -0.0580599 8.5287 -0.247606 8.15171 0.377594C7.84863 0.880237 7.12106 0.880237 6.81798 0.377594C6.44103 -0.247596 5.49027 -0.0580833 5.38073 0.664029C5.29263 1.24462 4.62054 1.5236 4.14855 1.17541C3.56158 0.742345 2.75554 1.28201 2.9302 1.99115C3.07065 2.56126 2.55612 3.07686 1.98713 2.93613C1.2794 2.76113 0.740845 3.56879 1.17304 4.15695C1.52049 4.62989 1.24209 5.30346 0.662688 5.39162C-0.0579425 5.50136 -0.247105 6.45403 0.376831 6.83178C0.878459 7.13548 0.878459 7.86453 0.376831 8.16821Z" />
                      </svg>
                      {t("Podrška i održavanje nakon izrade")}{" "}
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-lg-4 col-md-12 ">
                <div
                  className="service-sidebar"
                  style={{
                    background: "#141414",
                    padding: "25px",
                    borderRadius: "12px",
                    boxShadow: "0 0 20px rgba(0,0,0,0.3)",
                  }}
                >
                  <div
                    className="widget categories"
                    style={{ marginBottom: "30px" }}
                  >
                    <h4 style={{ color: "#fff", marginBottom: "15px" }}>
                      Naše usluge
                    </h4>
                    <ul
                      style={{ listStyle: "none", padding: 0, lineHeight: "2" }}
                    >
                      <li>
                        <Link
                          href="/usluge/izrada-veb-sajta"
                          style={{ color: "#ff6600" }}
                        >
                          {t("Web sajtovi")}
                        </Link>
                      </li>

                      <li style={{ marginLeft: "12px" }}>
                        <Link
                          href="/ponuda-veb-sajt"
                          style={{ color: "#ff6600", fontSize: "14px" }}
                        >
                          ➤ {t("Kalkulator cijene")}
                        </Link>
                      </li>

                      <li>
                        <Link
                          href="/usluge/izrada-veb-aplikacija"
                          style={{ color: "#ff6600" }}
                        >
                          {t("Web aplikacije")}
                        </Link>
                      </li>

                      <li>
                        <Link
                          href="/usluge/izrada-mobilnih-aplikacija"
                          style={{ color: "#ff6600" }}
                        >
                          {t("Mobilne aplikacije")}
                        </Link>
                      </li>

                      <li>
                        <Link href="/usluge/seo" style={{ color: "#ff6600" }}>
                          {t("SEO")}
                        </Link>
                      </li>

                      <li>
                        <Link
                          href="/usluge/video-reklame"
                          style={{ color: "#ff6600" }}
                        >
                          {t("Video montaža")}
                        </Link>
                      </li>

                      <li>
                        <Link
                          href="/usluge/oglasavanje"
                          style={{ color: "#ff6600" }}
                        >
                          {t("Oglašavanje")}
                        </Link>
                      </li>

                      <li>
                        <Link
                          href="/usluge/veb-sigurnost"
                          style={{ color: "#ff6600" }}
                        >
                          {t("Web sigurnost")}
                        </Link>
                      </li>
                    </ul>
                  </div>

                  {/* Forma */}
                  <div
                    className="widget contact-widget"
                    style={{
                      background: "#1a1a1a",
                      padding: "25px",
                      borderRadius: "12px",
                    }}
                  >
                    <h5 style={{ color: "#fff", marginBottom: "15px" }}>
                      Imate pitanje?
                    </h5>

                    <form
                      onSubmit={async (e) => {
                        e.preventDefault();
                        setLoading(true);

                        const form = e.target;
                        const data = Object.fromEntries(
                          new FormData(form).entries()
                        );

                        await fetch("/api/contact", {
                          method: "POST",
                          headers: { "Content-Type": "application/json" },
                          body: JSON.stringify(data),
                        });

                        setTimeout(() => {
                          alert(
                            "Poruka je uspješno poslata!\nNeko iz našeg tima će vas ubrzo kontaktirati.\nHvala na povjerenju!"
                          );
                          form.reset();
                          setLoading(false);
                        }, 3000);
                      }}
                      style={{
                        display: "flex",
                        flexDirection: "column",
                        gap: "15px",
                      }}
                    >
                      <div>
                        <label style={{ color: "#bbb", fontSize: "14px" }}>
                          Ime i prezime
                        </label>
                        <input
                          name="ime"
                          type="text"
                          placeholder="Unesite ime i prezime"
                          style={{
                            width: "100%",
                            padding: "10px 14px",
                            borderRadius: "8px",
                            border: "1px solid #333",
                            background: "#0f0f0f",
                            color: "#fff",
                          }}
                          required
                        />
                      </div>

                      <div>
                        <label style={{ color: "#bbb", fontSize: "14px" }}>
                          Email adresa
                        </label>
                        <input
                          name="email"
                          type="email"
                          placeholder="Unesite email"
                          style={{
                            width: "100%",
                            padding: "10px 14px",
                            borderRadius: "8px",
                            border: "1px solid #333",
                            background: "#0f0f0f",
                            color: "#fff",
                          }}
                          required
                        />
                      </div>

                      <div>
                        <label style={{ color: "#bbb", fontSize: "14px" }}>
                          Djelatnost
                        </label>
                        <input
                          name="djelatnost"
                          type="text"
                          placeholder="Opcionalno"
                          style={{
                            width: "100%",
                            padding: "10px 14px",
                            borderRadius: "8px",
                            border: "1px solid #333",
                            background: "#0f0f0f",
                            color: "#fff",
                          }}
                        />
                      </div>

                      <div>
                        <label style={{ color: "#bbb", fontSize: "14px" }}>
                          Telefon
                        </label>
                        <input
                          name="telefon"
                          type="tel"
                          placeholder="Unesite broj telefona"
                          style={{
                            width: "100%",
                            padding: "10px 14px",
                            borderRadius: "8px",
                            border: "1px solid #333",
                            background: "#0f0f0f",
                            color: "#fff",
                          }}
                          required
                        />
                      </div>

                      <div>
                        <label style={{ color: "#bbb", fontSize: "14px" }}>
                          Poruka
                        </label>
                        <textarea
                          name="poruka"
                          placeholder="Vaša poruka..."
                          rows="4"
                          style={{
                            width: "100%",
                            padding: "10px 14px",
                            borderRadius: "8px",
                            border: "1px solid #333",
                            background: "#ffffff0d",
                            color: "#fff",
                            resize: "none",
                          }}
                          required
                        ></textarea>
                      </div>

                      <button
                        type="submit"
                        style={{
                          background: "#ff6600",
                          color: "#fff",
                          padding: "10px 20px",
                          borderRadius: "8px",
                          fontWeight: "600",
                          cursor: "pointer",
                        }}
                        disabled={loading}
                      >
                        {loading ? "Slanje..." : "Pošalji poruku"}
                      </button>

                      {/* Loader ispod forme */}
                      {loading && (
                        <div style={{ marginTop: "10px", textAlign: "center" }}>
                          <div className="spinner"></div>
                        </div>
                      )}

                      <style jsx>{`
                        .spinner {
                          width: 26px;
                          height: 26px;
                          border: 3px solid #ff6600;
                          border-bottom-color: transparent;
                          border-radius: 50%;
                          margin: 10px auto 0;
                          animation: spin 0.7s linear infinite;
                        }
                        @keyframes spin {
                          to {
                            transform: rotate(360deg);
                          }
                        }
                      `}</style>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="how-we-work-section sec-mar">
          <div className="container">
            <div
              className="row mb-60 wow animate fadeInUp"
              data-wow-delay="200ms"
              data-wow-duration="1500ms"
            >
              <div className="col-lg-12">
                <div className="section-title">
                  <h2>{t("Kako radimo")}</h2>
                </div>
              </div>
            </div>
          </div>
          <div className="work-item">
            <div className="container-fluid">
              <div className="row row-cols-xl-5 row-cols-lg-4 row-cols-md-3 row-cols-sm-2 row-cols-1 gy-5 justify-content-center">
                <div
                  className="col magnetic-item wow animate fadeInUp"
                  data-wow-delay="200ms"
                  data-wow-duration="1500ms"
                >
                  <div className="single-work">
                    <div className="work-icon">
                      <img
                        src="../../assets/img/inner-pages/work-icon-01.svg"
                        alt=""
                      />
                    </div>
                    <div className="work-content">
                      <h3>{t("Upoznavanje & analiza potreba")}</h3>
                      <p>
                        {t(
                          "Projekat započinjemo razgovorom o vašem poslovanju i ciljevima. Na osnovu toga definišemo šta sajt treba da postigne i kome je namijenjen, kako bi dalji razvoj imao jasnu svrhu."
                        )}
                      </p>
                    </div>
                  </div>
                </div>
                <div
                  className="col magnetic-item wow animate fadeInUp"
                  data-wow-delay="300ms"
                  data-wow-duration="1500ms"
                >
                  <div className="single-work">
                    <div className="work-icon">
                      <img
                        src="../../assets/img/inner-pages/work-icon-02.svg"
                        alt=""
                      />
                    </div>
                    <div className="work-content">
                      <h3>{t("Planiranje & struktura sajta")}</h3>
                      <p>
                        {t(
                          `Nakon analize definišemo arhitekturu stranica, sadržaj i funkcionalnosti. Dogovaramo vizuelni pravac, obim posla i rokove, kako bi svi učesnici projekta imali jasnu sliku o ciljevima i dinamici.`
                        )}
                      </p>
                    </div>
                  </div>
                </div>
                <div
                  className="col magnetic-item wow animate fadeInUp"
                  data-wow-delay="400ms"
                  data-wow-duration="1500ms"
                >
                  <div className="single-work">
                    <div className="work-icon">
                      <img
                        src="../../assets/img/inner-pages/work-icon-03.svg"
                        alt=""
                      />
                    </div>
                    <div className="work-content">
                      <h3> {t(`Dizajn & razvoj`)} </h3>
                      <p>
                        {t(
                          `Razvijamo moderan i prilagodljiv dizajn, a zatim prelazimo na tehničku realizaciju i CMS integraciju. Koristimo WordPress ili prilagođena rješenja u zavisnosti od potreba projekta.`
                        )}
                      </p>
                    </div>
                  </div>
                </div>
                <div
                  className="col magnetic-item wow animate fadeInUp"
                  data-wow-delay="500ms"
                  data-wow-duration="1500ms"
                >
                  <div className="single-work">
                    <div className="work-icon">
                      <img
                        src="../../assets/img/inner-pages/work-icon-04.svg"
                        alt=""
                      />
                    </div>
                    <div className="work-content">
                      <h3>{t(`Testiranje & Lansiranje`)}</h3>
                      <p>
                        {t(
                          `Testiramo sajt na različitim uređajima i ekranima, optimizujemo performanse i unosimo završne korekcije. Nakon potvrde objavljujemo sajt i puštamo ga u rad.`
                        )}
                      </p>
                    </div>
                  </div>
                </div>
                <div
                  className="col magnetic-item wow animate fadeInUp"
                  data-wow-delay="600ms"
                  data-wow-duration="1500ms"
                >
                  <div className="single-work">
                    <div className="work-icon">
                      <img
                        src="../../assets/img/inner-pages/work-icon-05.svg"
                        alt=""
                      />
                    </div>
                    <div className="work-content">
                      <h3>{t(`Održavanje & podrška`)}</h3>
                      <p>
                        {t(
                          `Nakon objave nudimo tehničku podršku, ažuriranja i proširenja funkcionalnosti, kako bi sajt ostao stabilan, siguran i usklađen sa budućim potrebama.`
                        )}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="service-sort-driscription-area sec-mar">
          <div className="container">
            <div className="row">
              <div
                className="col-lg-12 wow animate fadeInUp"
                data-wow-delay="200ms"
                data-wow-duration="1500ms"
              >
                <div className="driscription-img magnetic-item">
                  <img
                    className="img-fluid"
                    src="../../assets/img/web2.png"
                    alt=""
                  />
                </div>
              </div>
              <div className="driscription-content">
                <div className="row">
                  <div
                    className="col-md-6 wow animate fadeInUp"
                    data-wow-delay="200ms"
                    data-wow-duration="1500ms"
                  >
                    {" "}
                    <h3>{t(`Zašto odabrati nas?`)}</h3>
                    <p>
                      {t(
                        `Do sada smo realizovali više od 100 projekata za firme u Crnoj Gori, Srbiji i EU, u industrijama kao što su trgovina, usluge, nekretnine, proizvodnja, turizam i marketing. Kvalitetan sajt vrijedi samo ako pomaže prodaji, reputaciji i komunikaciji sa klijentima. Povezujemo dizajn, razvoj i optimizaciju kako bismo vam ponudili funkcionalna rješenja koja rade u praksi i odgovaraju stvarnim potrebama poslovanja.`
                      )}
                    </p>
                  </div>
                  <div
                    className="col-md-6 wow animate fadeInUp"
                    data-wow-delay="300ms"
                    data-wow-duration="1500ms"
                  >
                    {" "}
                    <h3>{t(`Naš pristup garantuje rezultate.`)}</h3>
                    <p>
                      {t(
                        `Svaki projekat tretiramo kao zaseban sistem i prilagođavamo dizajn, sadržaj i funkcionalnosti u skladu sa tipom djelatnosti, industrije i ciljne publike. Ne nudimo površna rješenja, već rješenja koja odgovaraju načinu na koji vaš biznis zaista funkcioniše.`
                      )}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
       <div className="service-faq-area sec-mar">
  <div className="container">
    <div className="row gy-5">
      <div
        className="col-lg-6 wow animate fadeInLeft"
        data-wow-delay="200ms"
        data-wow-duration="1500ms"
      >
        <div className="faq-img magnetic-item">
          <img className="img-fluid" src="../../assets/img/web3.png" alt="" />
        </div>
      </div>

      <div
        className="col-lg-6 d-flex align-items-center wow animate fadeInRight"
        data-wow-delay="300ms"
        data-wow-duration="1500ms"
      >
        <div className="faq-content-area">
          <h2>{t("Često postavljena pitanja")}</h2>
          <div className="accordion" id="accordionExample">

            {/* 1 */}
            <div className="accordion-item">
              <h6 className="accordion-header" id="headingOne">
                <button
                  className="accordion-button"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseOne"
                  aria-expanded="true"
                  aria-controls="collapseOne"
                >
                  {t("Koliko košta izrada web sajta?")}
                </button>
              </h6>
              <div
                id="collapseOne"
                className="accordion-collapse collapse show"
                aria-labelledby="headingOne"
                data-bs-parent="#accordionExample"
              >
                <div className="accordion-body">
                  {t(
                    "Cijena zavisi od složenosti, funkcionalnosti i vrste izrade (WordPress ili custom). Jednostavne prezentacione stranice su povoljnije, dok projekti sa sistemima, e-commerce prodavnicama ili integracijama imaju višu cijenu."
                  )}
                </div>
              </div>
            </div>

            {/* 2 */}
            <div className="accordion-item">
              <h6 className="accordion-header" id="headingTwo">
                <button
                  className="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseTwo"
                  aria-expanded="false"
                  aria-controls="collapseTwo"
                >
                  {t("Koliko traje izrada?")}
                </button>
              </h6>
              <div
                id="collapseTwo"
                className="accordion-collapse collapse"
                aria-labelledby="headingTwo"
                data-bs-parent="#accordionExample"
              >
                <div className="accordion-body">
                  {t(
                    "Vrijeme izrade zavisi od obima projekta, spremnosti materijala i funkcionalnosti koje se implementiraju. Prezentacioni sajtovi se najčešće završavaju u periodu od 10 do 30 dana, dok veći projekti mogu trajati duže zbog dodatnih elemenata kao što su e-commerce sistemi, rad sa bazama podataka, real-time podaci, integracije sa eksternim servisima i napredne administracije."
                  )}
                </div>
              </div>
            </div>

            {/* 3 */}
            <div className="accordion-item">
              <h6 className="accordion-header" id="headingThree">
                <button
                  className="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseThree"
                  aria-expanded="false"
                  aria-controls="collapseThree"
                >
                  {t("Da li mogu unaprijed izračunati cijenu?")}
                </button>
              </h6>
              <div
                id="collapseThree"
                className="accordion-collapse collapse"
                aria-labelledby="headingThree"
                data-bs-parent="#accordionExample"
              >
                <div className="accordion-body">
                  {t(
                    "Na sajtu postoji interaktivni kalkulator koji omogućava da unaprijed izračunate okvirnu cijenu prema vašim potrebama."
                  )}
                  <br /><br />
                  <a href="/ponuda-veb-sajt" style={{color:"#ff6600", fontWeight:600}}>
                    {t("Otvori kalkulator cijene")}
                  </a>
                </div>
              </div>
            </div>

            {/* 4 */}
            <div className="accordion-item">
              <h6 className="accordion-header" id="headingFour">
                <button
                  className="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseFour"
                  aria-expanded="false"
                  aria-controls="collapseFour"
                >
                  {t("Da li mogu naknadno mijenjati sadržaj na sajtu?")}
                </button>
              </h6>
              <div
                id="collapseFour"
                className="accordion-collapse collapse"
                aria-labelledby="headingFour"
                data-bs-parent="#accordionExample"
              >
                <div className="accordion-body">
                  {t(
                    "Da. Koristimo i razvijamo CMS koji omogućava uređivanje tekstova, slika i stranica bez programiranja. Po potrebi obezbjeđujemo i obuku."
                  )}
                </div>
              </div>
            </div>

            {/* 5 */}
            <div className="accordion-item">
              <h6 className="accordion-header" id="headingFive">
                <button
                  className="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseFive"
                  aria-expanded="false"
                  aria-controls="collapseFive"
                >
                  {t("Da li je potreban SEO?")}
                </button>
              </h6>
              <div
                id="collapseFive"
                className="accordion-collapse collapse"
                aria-labelledby="headingFive"
                data-bs-parent="#accordionExample"
              >
                <div className="accordion-body">
                  {t(
                    "SEO je važan jer omogućava da vas potencijalni klijenti pronađu preko pretraživača. Radimo tehnički SEO, on-page SEO i pripremu sadržaja za bolje rangiranje."
                  )}
                </div>
              </div>
            </div>

            {/* 6 */}
            <div className="accordion-item">
              <h6 className="accordion-header" id="headingSix">
                <button
                  className="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseSix"
                  aria-expanded="false"
                  aria-controls="collapseSix"
                >
                  {t("Da li obezbjeđujete održavanje i podršku?")}
                </button>
              </h6>
              <div
                id="collapseSix"
                className="accordion-collapse collapse"
                aria-labelledby="headingSix"
                data-bs-parent="#accordionExample"
              >
                <div className="accordion-body">
                  {t(
                    "Da. Nudimo tehničko održavanje, ažuriranja, sigurnosne kopije i intervencije po potrebi."
                  )}
                </div>
              </div>
            </div>

            {/* 7 */}
            <div className="accordion-item">
              <h6 className="accordion-header" id="headingSeven">
                <button
                  className="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseSeven"
                  aria-expanded="false"
                  aria-controls="collapseSeven"
                >
                  {t("Šta je potrebno da bismo započeli izradu?")}
                </button>
              </h6>
              <div
                id="collapseSeven"
                className="accordion-collapse collapse"
                aria-labelledby="headingSeven"
                data-bs-parent="#accordionExample"
              >
                <div className="accordion-body">
                  {t(
                    "Potrebno je obezbijediti sadržaj koji želite da posjetioci vide na sajtu — opis firme, djelatnosti, usluga, kontakt podatke, logo i fotografije. Ako sadržaj nije spreman, možemo ga pripremiti uz copywriting. Rad počinjemo nakon vaše potvrde da je sadržaj kompletan."
                  )}
                </div>
              </div>
            </div>

            {/* 8 */}
            <div className="accordion-item">
              <h6 className="accordion-header" id="headingEight">
                <button
                  className="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseEight"
                  aria-expanded="false"
                  aria-controls="collapseEight"
                >
                  {t("Da li radite i za firme van Crne Gore?")}
                </button>
              </h6>
              <div
                id="collapseEight"
                className="accordion-collapse collapse"
                aria-labelledby="headingEight"
                data-bs-parent="#accordionExample"
              >
                <div className="accordion-body">
                  {t(
                    "Da. Radimo za klijente u Crnoj Gori, regionu i EU. Komunikacija i isporuka idu online bez obzira na lokaciju."
                  )}
                </div>
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
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="contact-wrapper text-center magnetic-item">
                <h2 className="title">{t("Započnimo saradnju")}</h2>
                <h2 className="content">{t("IT rješenja")}</h2>
                <div className="contact-btn">
                  <Link legacyBehavior href="/kontakt">
                    <a className="magnetic-item">
                      {t("Kontaktirajte nas.")}
                      <svg
                        width={32}
                        height={32}
                        viewBox="0 0 13 13"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M0 1H12M12 1V13M12 1L0.5 12" />
                      </svg>
                    </a>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default ServiceDetailsPage;
