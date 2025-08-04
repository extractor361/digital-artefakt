import Breadcrumb from "@/components/common/Breadcrumb";
import Layout from "@/components/layout/Layout";
import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";
import projekti from '@/data/projekti.json';


function ProjectDetailsPage({ project }) {
  const router = useRouter();

  const currentIndex = projekti.findIndex(p => p.slug === project.slug);

  // Prethodni projekat ako postoji
  const prevProject = currentIndex > 0 ? projekti[currentIndex - 1] : null;
  // Sledeći projekat ako postoji
  const nextProject = currentIndex < projekti.length - 1 ? projekti[currentIndex + 1] : null;

  if (router.isFallback) {
    return <div>Učitavanje projekta...</div>;
  }

  return (
    <Layout>
      <Breadcrumb
        pageList="Detalji Projekta"
        title={`Detalji projekta: ${project.slug}`}
        pageName={`Detalji projekta: ${project.naslov}`}
      />
      <div className="portfolio-details sec-mar">
        <div className="container ">
          <div className="row g-4 mb-80">
            <div className="col-lg-7">
              <div className="portfolio-img magnetic-item">
                <img
                  className="img-fluid"
                  src={project.heroSlike[0].src}
                  alt=""
                />
              </div>
            </div>
            <div className="col-lg-5">
              <div className="row g-4">
                <div className="col-lg-12">
                  <div className="portfolio-img magnetic-item">
                    <img
                      className="img-fluid"
                  src={project.heroSlike[1].src}
                      alt=""
                    />
                  </div>
                </div>
                <div className="col-lg-12">
                  <div className="portfolio-img magnetic-item">
                    <img
                      className="img-fluid"
                  src={project.heroSlike[2].src}
                      alt=""
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="row gy-5">
            <div className="col-lg-8">
              <div className="portfolio-content">
                <h3>Pregled Projekta - {project.naslov}</h3>
                <p>
                  {project.tekst}
                </p>
                <p>
                  {project.pregled.tekst}
                </p>
                <div className="working-process">
                  <h3>Tok projekta</h3>
                  <div className="row g-4 justify-content-center">
                    <div className="col-xl-4 col-sm-6">
                      <div className="single-process magnetic-item">
                        <div className="icon">
                          <img
                            src="assets/img/inner-pages/research.svg"
                            alt=""
                          />
                        </div>
                        <span>Korak 01</span>
                        <h3>{project.proces[0].naslov}</h3>
                        <p>
                          {project.proces[0].tekst}
                        </p>
                      </div>
                    </div>
                    <div className="col-xl-4 col-sm-6">
                      <div className="single-process magnetic-item">
                        <div className="icon">
                          <img
                            src="assets/img/inner-pages/devlopment.svg"
                            alt=""
                          />
                        </div>
                        <span>Korak 02</span>
                        <h3>{project.proces[1].naslov}</h3>
                        <p>
                          {project.proces[1].tekst}
                        </p>
                      </div>
                    </div>
                    <div className="col-xl-4 col-sm-6">
                      <div className="single-process magnetic-item">
                        <div className="icon">
                          <img src="assets/img/inner-pages/deploy.svg" alt="" />
                        </div>
                        <span>Korak 03</span>
                        <h3>{project.proces[2].naslov}</h3>
                        <p>
                          {project.proces[2].tekst}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="row g-4 mb-55">
                  <div className="col-lg-7 col-sm-6">
                    <div className="portfolio-img magnetic-item">
                      <img
                        className="img-fluid"
                        src={project.heroSlike[3].src}
                        alt=""
                      />
                    </div>
                  </div>
                  <div className="col-lg-5 col-sm-6">
                    <div className="portfolio-img magnetic-item">
                      <img
                        className="img-fluid"
                        src={project.heroSlike[4].src}
                        alt=""
                      />
                    </div>
                  </div>
                </div>
                <h3>Rezultat</h3>
                <p>
                  {project.rezultat.tekst}
                </p>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="portfolio-info">
                <ul>
                  <li>
                    <span>Klijent:</span>
                    <h5>{project.detaljiProjekta.klijent}</h5>
                  </li>
                  <li>
                    <span>Kompanija:</span>
                    <h5>{project.detaljiProjekta.klijent}</h5>
                  </li>
                  <li>
                    <span>Lokacija:</span>
                    <h5>{project.detaljiProjekta.lokacija}</h5>
                  </li>
                  <li>
                    <span>Tip projekta/industrija:</span>
                    <h5>{project.detaljiProjekta.industrija}</h5>
                  </li>
                  <li>
                    <span>Rok realizacije:</span>
                    <h5>{project.detaljiProjekta.trajanje}</h5>
                  </li>
                </ul>
              </div>
              <div className="portfolio-details-sm-banner">
                <div className="section-title-5">
                  <h2>
                    Spreman za<br />
                    <span>saradnju sa nama?</span>
                  </h2>
                  <div className="get-btn">
                    <Link legacyBehavior href="/contact">
                      <a className="primary-btn3">Kontaktirajte nas</a>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
         <div className="row">
  <div className="col-lg-12">
    <div className="details-navigation">

      {/* PREVIOUS project */}
      {prevProject && (
        <div className="single-navigation">
          <div className="content">
            <Link legacyBehavior href={`/projekti/${prevProject.slug}`}>
              <a>Prošli</a>
            </Link>
            <h4>
              <Link legacyBehavior href={`/projekti/${prevProject.slug}`}>
                <a>{prevProject.naslov}</a>
              </Link>
            </h4>
          </div>
          <Link legacyBehavior href={`/projekti/${prevProject.slug}`}>
            <a className="img">
              <img
                src={prevProject.heroSlike[0].src}
                alt={prevProject.naslov}
              />
              <div className="arrow">
                <svg
                  width={12}
                  height={12}
                  viewBox="0 0 13 13"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M0 1H12M12 1V13M12 1L0.5 12" />
                </svg>
              </div>
            </a>
          </Link>
        </div>
      )}

      {/* NEXT project */}
      {nextProject && (
        <div className="single-navigation two">
          <Link legacyBehavior href={`/projekti/${nextProject.slug}`}>
            <a className="img">
              <img
                src={nextProject.heroSlike[0].src}
                alt={nextProject.naslov}
              />
              <div className="arrow">
                <svg
                  width={12}
                  height={12}
                  viewBox="0 0 13 13"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M0 1H12M12 1V13M12 1L0.5 12" />
                </svg>
              </div>
            </a>
          </Link>
          <div className="content">
            <Link legacyBehavior href={`/projekti/${nextProject.slug}`}>
              <a>Sledeći</a>
            </Link>
            <h4>
              <Link legacyBehavior href={`/projekti/${nextProject.slug}`}>
                <a>{nextProject.naslov}</a>
              </Link>
            </h4>
          </div>
        </div>
      )}

    </div>
  </div>
</div>

        </div>
      </div>
    </Layout>
  );
}

export async function getStaticPaths() {
  const paths = projekti.map(proj => ({
    params: { pojedinacni: proj.slug }
  }));

  return {
    paths,
    fallback: true,
  };
}

export async function getStaticProps({ params }) {
  const project = projekti.find(proj => proj.slug === params.pojedinacni);

  if (!project) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      project,
    },
  };
}



export default ProjectDetailsPage;
