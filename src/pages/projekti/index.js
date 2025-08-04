import Breadcrumb from "@/components/common/Breadcrumb";
import Layout from "@/components/layout/Layout";
import Link from "next/link";
import projekti from '@/data/projekti.json';

export default function ProjectPage() {
  return (
    <Layout>
      <Breadcrumb
        pageList="Projekti"
        title="Naši realizovani projekti"
        pageName="PROJEKTI"
      />

      <div className="home3-success-stories-area two sec-mar">
        <div className="container-fluid">
          <div className="row g-4 justify-content-center">
            {projekti.map((proj, idx) => (
              <div
                key={proj.slug}
                className="col-lg-4 col-md-6 col-sm-10 wow animate fadeInUp"
                data-wow-delay={`${200 + (idx % 3) * 100}ms`}
                data-wow-duration="1500ms"
              >
                <div className="success-storie-card">
                  <div className="success-img">
                    <img
                      className="img-fluid magnetic-item"
                      src={proj.heroSlike[0]?.src || '/assets/img/placeholder.png'}
                      alt={proj.naslov}
                    />
                  </div>
                  <div className="success-content">
                    <span>{proj.kategorija}</span>
                    <h3>
                      <Link legacyBehavior href={`/projekti/${proj.slug}`}>
                        <a>{proj.naslov}</a>
                      </Link>
                    </h3>
                    <div className="view-btn">
                      <Link legacyBehavior href={`/projekti/${proj.slug}`}>
                        <a>
                          <svg width={12} height={12} viewBox="0 0 13 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M0 1H12M12 1V13M12 1L0.5 12" />
                          </svg>
                        </a>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          {/* ...pagination ako je potrebno */}
        </div>
      </div>
    </Layout>
  );
}
