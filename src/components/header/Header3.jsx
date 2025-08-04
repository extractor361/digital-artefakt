import Link from "next/link";
import { useRouter } from "next/router";
import React, { useEffect, useReducer, useRef } from "react";

const initialState = {
  activeMenu: "",
  activeSubMenu: "",
  isSidebarOpenMenu: false,
  isLeftSidebarOpen: false,
};

function reducer(state, action) {
  switch (action.type) {
    case "TOGGLE_MENU":
      return {
        ...state,

        activeMenu: state.activeMenu === action.menu ? "" : action.menu,
        activeSubMenu:
          state.activeMenu === action.menu ? state.activeSubMenu : "",
      };
    case "TOGGLE_SUB_MENU":
      return {
        ...state,
        activeSubMenu:
          state.activeSubMenu === action.subMenu ? "" : action.subMenu,
      };
    case "TOGGLE_SIDEBAR_MENU":
      return {
        ...state,
        isSidebarOpenMenu: !state.isSidebarOpenMenu,
      };
    case "setScrollY":
      return { ...state, scrollY: action.payload };
    case "TOGGLE_LEFT_SIDEBAR":
      return {
        ...state,
        isLeftSidebarOpen: !state.isLeftSidebarOpen,
      };
    default:
      return state;
  }
}

function Header3() {
  const [state, dispatch] = useReducer(reducer, initialState);
  const headerRef = useRef(null);
  const handleScroll = () => {
    const { scrollY } = window;
    dispatch({ type: "setScrollY", payload: scrollY });
  };
  const currentRoute = useRouter().pathname;
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const toggleMenu = (menu) => {
    dispatch({ type: "TOGGLE_MENU", menu });
  };

  const toggleSubMenu = (subMenu) => {
    dispatch({ type: "TOGGLE_SUB_MENU", subMenu });
  };

  const toggleSidebarMenu = () => {
    dispatch({ type: "TOGGLE_MENU", menu: "" });
    dispatch({ type: "TOGGLE_SUB_MENU", subMenu: "" });
    dispatch({ type: "TOGGLE_SIDEBAR_MENU" });
  };
  const toggleLeftSidebar = () => {
    dispatch({ type: "TOGGLE_LEFT_SIDEBAR" });
  };

  return (
    <>
      <div className={`header-sidebar ${state.isLeftSidebarOpen ? "slide" : ""}`}>
  <div className="sidebar-top">
    <div className="sidebar-log">
      <Link legacyBehavior href="/">
        <a>
          <img src="../assets/img/logo.svg" alt="Digital Artefakt Logo" />
        </a>
      </Link>
    </div>
    <div className="close-btn" onClick={toggleLeftSidebar}>
      <i className="bi bi-x-lg" />
    </div>
  </div>
  <div className="sidebar-content">
    <p>
Sa strašću prema digitalnim tehnologijama, naša kompanija pruža inovativna softverska rešenja koja podržavaju rast i efikasnost vašeg poslovanja. Fokusirani smo na kreiranje funkcionalnih i pouzdanih sistema, prilagođenih vašim potrebama, koji unapređuju rad, komunikaciju i ukupno digitalno prisustvo.
    </p>
  </div>
  <div className="address-card">
    <div className="content">
      <div className="informations">
        <div className="single-info">
          <div className="icon">
            <i className="fas fa-map-marker-alt" />
          </div>
          <div className="info">
            <p>Bulevar Revolucije C-7, Bar, Crna Gora</p>
          </div>
        </div>
        <div className="single-info">
          <div className="icon">
            <i className="fas fa-phone-alt" />
          </div>
          <div className="info">
            <a href="tel:+38268062361">+382 68 062 361</a>
          </div>
        </div>
        <div className="single-info">
          <div className="icon">
            <i className="far fa-envelope" />
          </div>
          <div className="info">
            <a href="mailto:office@digital-artefakt.me">office@digital-artefakt.me</a>
            <a href="mailto:info@digital-artefakt.me">info@digital-artefakt.me</a>
          </div>
        </div>
      </div>
    </div>
    {/* <img src="assets/images/bg/office1.png" alt="image" /> */}
  </div>

  <div className="follow-area">
    <h5 className="blog-widget-title">Kontaktiraj nas</h5>
    <p className="para">Viber & WhatsApp</p>
    <div className="blog-widget-body">
      <ul className="follow-list d-flex flex-row align-items-start gap-4">
     
        <li>
        <a href="viber://chat?number=%2B38268062361" target="_blank" rel="noopener noreferrer" aria-label="Viber">
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 448 512" fill="currentColor">
    <path d="M391.3 24H56.7C43.6 24 32 35.6 32 48.7v414.5c0 13.1 11.6 24.7 24.7 24.7h334.5c13.1 0 24.7-11.6 24.7-24.7V48.7C416 35.6 404.4 24 391.3 24zM207.3 385c-50.5-1.4-94.3-22.2-130.1-60.2C52.1 293.7 32.7 245.2 32 192.4 31.7 165 37.8 139.5 50.3 117.2c9.2-16.3 23.5-24.7 41.3-23.7 13.1.7 25.4 7.3 37.5 20.1 9.9 10.4 19.8 24.2 28.3 40.2 8.2 15.4 6.2 32.5-4.9 45.8-5.6 6.7-10.9 13.5-15.7 20.1-4.8 6.6-10.6 10.8-18 13.3-6.2 2.1-8.3 5.4-8.8 10.5-.6 6.2 2.4 12.7 9.6 20.4 12.4 13.2 28.3 23.7 48.1 31 4.8 1.7 9.6 1.6 14.2-.5 8.4-3.7 14.6-10.4 18.9-18.9 2.4-4.7 4.6-9.5 6.7-14.3 4.3-9.5 11.1-15.3 20.4-16.5 15.9-2.1 30.6.2 44.1 6.8 16.1 7.7 30.4 17.8 42.9 30.3 9.5 9.4 14.7 21.1 14.8 34.4.1 10.2-1.8 20.1-5.6 29.7-4.2 10.9-11.2 19.1-20.8 24.3-14.2 7.5-30.2 11.3-48.1 11.6h-3.5z"/>
  </svg>
</a>


        </li>
        <li>
          <a href="https://wa.me/38268062361" target="_blank" rel="noopener noreferrer">
            <i className="bx bxl-whatsapp" />
          </a>
        </li>
      </ul>
    </div>
  </div>
</div>


      <header
        ref={headerRef}
        className={`header-area2 one ${state.scrollY > 10 ? "sticky" : ""}`}
      >
        <div className="header-logo">
          <Link legacyBehavior href="/">
            <a>
              <img
                alt="image"
                className="logotip img-fluid"
                src="../assets/img/logo.svg"
              />
            </a>
          </Link>
        </div>
        <div
          className={`main-menu ${state.isSidebarOpenMenu ? "show-menu" : ""}`}
        >
          <div className="mobile-logo-area d-lg-none d-flex justify-content-between align-items-center">
            <div className="mobile-logo-wrap">
              <Link legacyBehavior href="/">
                <a>
                  <img alt="image" src="../assets/img/logo.svg" />
                </a>
              </Link>
            </div>
          </div>
          <ul className="menu-list">
            <li className={` ${currentRoute === "/"?"active":""}`}>
              <Link
                href="/"
                className={`drop-down ${
                  state.activeMenu === "home-one" ? "active" : ""
                }`}
                onClick={() => toggleMenu("home-one")}
              >
                Naslovna
              </Link>
              <i
                className={`bi bi-plus dropdown-icon ${
                  state.activeMenu === "home-one" ? "active" : ""
                }`}
                onClick={() => toggleMenu("home-one")}
              />
              
            </li>
            <li>
              <Link legacyBehavior href="/onama">
                <a>O nama</a>
              </Link>
            </li>
            <li className="menu-item-has-children">
  <div
    className="menu-link-wrapper"
    style={{ display: "flex", alignItems: "center", gap: "8px" }}
  >
    <Link href="/usluge" legacyBehavior>
      <a className="drop-down">Usluge</a>
    </Link>
    <i
      className={`bi bi-plus dropdown-icon ${
        state.activeMenu === "usluge" ? "active" : ""
      }`}
      onClick={(e) => {
        e.preventDefault();  // Sprečava prelazak na link
        toggleMenu("usluge");
      }}
      style={{ cursor: "pointer" }}
    />
  </div>

  <ul className={`sub-menu ${state.activeMenu === "usluge" ? "open" : ""}`}>
    <li><Link href="/usluge/izrada-veb-sajta">Veb sajtovi</Link></li>
    <li><Link href="/usluge/izrada-veb-aplikacija">Veb aplikacije</Link></li>
    <li><Link href="/usluge/izrada-mobilnih-aplikacija">Mobilne aplikacije</Link></li>
    <li><Link href="/usluge/seo">SEO</Link></li>
    <li><Link href="/usluge/oglasavanje">Oglašavanje</Link></li>
    <li><Link href="/usluge/veb-sigurnost">Veb sigurnost</Link></li>
  </ul>
</li>



            <li >
              <Link href="/projekti" className="drop-down">
                Projekti
              </Link>
              
              
            </li>
            <li>
              <Link href="/cjenovnik">Cjenovnik</Link>
              
            </li>
            <li><Link href="/kontakt">Kontakt</Link></li>
          </ul>
          <div className="d-lg-none d-block">
            <form className="mobile-menu-form">
              <div className="hotline pt-30">
                <div className="hotline-icon">
                  <svg
                    width={26}
                    height={26}
                    viewBox="0 0 26 26"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M20.5488 16.106C20.0165 15.5518 19.3745 15.2554 18.694 15.2554C18.0191 15.2554 17.3716 15.5463 16.8173 16.1005L15.0833 17.8291C14.9406 17.7522 14.7979 17.6809 14.6608 17.6096C14.4632 17.5108 14.2766 17.4175 14.1175 17.3187C12.4932 16.2871 11.0171 14.9426 9.6013 13.2031C8.91536 12.3361 8.45441 11.6063 8.11968 10.8655C8.56965 10.4539 8.9867 10.0259 9.39277 9.61431C9.54642 9.46066 9.70007 9.30152 9.85372 9.14787C11.0061 7.9955 11.0061 6.50291 9.85372 5.35054L8.35564 3.85246C8.18553 3.68234 8.00993 3.50674 7.8453 3.33115C7.51606 2.99092 7.17034 2.63972 6.81366 2.31047C6.28137 1.78368 5.64483 1.50381 4.97535 1.50381C4.30588 1.50381 3.65836 1.78368 3.10961 2.31047C3.10412 2.31596 3.10412 2.31596 3.09864 2.32145L1.23289 4.20365C0.530497 4.90605 0.129911 5.7621 0.0421114 6.75533C-0.089588 8.35768 0.382335 9.85027 0.744508 10.827C1.63348 13.2251 2.96145 15.4475 4.94243 17.8291C7.34594 20.699 10.2378 22.9653 13.5413 24.5622C14.8034 25.1603 16.4881 25.8682 18.3703 25.9889C18.4855 25.9944 18.6062 25.9999 18.716 25.9999C19.9836 25.9999 21.0482 25.5445 21.8823 24.639C21.8878 24.628 21.8987 24.6226 21.9042 24.6116C22.1896 24.2659 22.5188 23.9531 22.8645 23.6184C23.1005 23.3934 23.3419 23.1574 23.5779 22.9105C24.1212 22.3453 24.4065 21.6868 24.4065 21.0118C24.4065 20.3314 24.1157 19.6783 23.5614 19.1296L20.5488 16.106ZM22.5133 21.8843C22.5078 21.8843 22.5078 21.8898 22.5133 21.8843C22.2993 22.1148 22.0798 22.3233 21.8439 22.5538C21.4872 22.894 21.125 23.2507 20.7848 23.6513C20.2305 24.2439 19.5775 24.5238 18.7215 24.5238C18.6392 24.5238 18.5514 24.5238 18.4691 24.5183C16.8393 24.414 15.3247 23.7775 14.1888 23.2342C11.0829 21.7307 8.35564 19.596 6.08931 16.8907C4.21808 14.6354 2.96694 12.5501 2.13833 10.3112C1.62799 8.94484 1.44142 7.88026 1.52373 6.87606C1.57861 6.23402 1.82554 5.70174 2.281 5.24628L4.15223 3.37504C4.42112 3.12262 4.70647 2.98543 4.98633 2.98543C5.33204 2.98543 5.6119 3.19396 5.7875 3.36956C5.79299 3.37504 5.79847 3.38053 5.80396 3.38602C6.1387 3.69881 6.45697 4.02257 6.79171 4.36828C6.96182 4.54388 7.13742 4.71948 7.31302 4.90056L8.8111 6.39865C9.39277 6.98032 9.39277 7.51809 8.8111 8.09976C8.65196 8.2589 8.49831 8.41804 8.33918 8.57169C7.87823 9.04361 7.43923 9.48261 6.96182 9.91063C6.95085 9.92161 6.93987 9.92709 6.93438 9.93807C6.46246 10.41 6.55026 10.8709 6.64903 11.1837C6.65452 11.2002 6.66001 11.2167 6.6655 11.2331C7.05511 12.177 7.60385 13.0659 8.43795 14.125L8.44344 14.1305C9.95798 15.9962 11.5548 17.4504 13.3163 18.5644C13.5413 18.7071 13.7718 18.8223 13.9913 18.932C14.1888 19.0308 14.3754 19.1241 14.5345 19.2229C14.5565 19.2339 14.5784 19.2503 14.6004 19.2613C14.787 19.3546 14.9626 19.3985 15.1436 19.3985C15.5991 19.3985 15.8845 19.1131 15.9777 19.0198L17.8545 17.1431C18.041 16.9566 18.3374 16.7316 18.6831 16.7316C19.0233 16.7316 19.3032 16.9456 19.4733 17.1322C19.4788 17.1376 19.4788 17.1376 19.4842 17.1431L22.5078 20.1667C23.0731 20.7265 23.0731 21.3026 22.5133 21.8843Z"></path>
                    <path d="M14.0512 6.18495C15.4889 6.4264 16.7949 7.10685 17.8375 8.14947C18.8802 9.19209 19.5551 10.4981 19.8021 11.9358C19.8624 12.298 20.1752 12.5504 20.5319 12.5504C20.5758 12.5504 20.6142 12.5449 20.6581 12.5395C21.0642 12.4736 21.3331 12.0895 21.2672 11.6834C20.9709 9.94387 20.1478 8.35799 18.8911 7.10136C17.6345 5.84473 16.0486 5.0216 14.3091 4.72528C13.903 4.65943 13.5244 4.92832 13.4531 5.3289C13.3817 5.72949 13.6451 6.1191 14.0512 6.18495Z"></path>
                    <path d="M25.9707 11.4691C25.4823 8.60468 24.1324 5.99813 22.0581 3.92387C19.9838 1.8496 17.3773 0.49968 14.5128 0.011294C14.1122 -0.0600432 13.7336 0.214331 13.6623 0.614917C13.5964 1.02099 13.8653 1.39963 14.2714 1.47096C16.8285 1.90447 19.1607 3.11721 21.0155 4.96649C22.8702 6.82125 24.0775 9.15343 24.511 11.7106C24.5714 12.0728 24.8841 12.3252 25.2408 12.3252C25.2847 12.3252 25.3231 12.3197 25.367 12.3142C25.7676 12.2539 26.042 11.8697 25.9707 11.4691Z"></path>
                  </svg>
                </div>
                <div className="hotline-info">
                  <span>Kontaktirajte nas odmah</span>
                  <h6>
                    <a href="tel:+38268062361">+38268062361</a>
                  </h6>
                </div>
              </div>
              <div className="email pt-20 d-flex align-items-center">
                <div className="email-icon">
                  <svg
                    width={26}
                    height={26}
                    viewBox="0 0 26 26"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g clipPath="url(#clip0_461_205)">
                      <path d="M23.5117 3.30075H2.38674C1.04261 3.30075 -0.0507812 4.39414 -0.0507812 5.73827V20.3633C-0.0507812 21.7074 1.04261 22.8008 2.38674 22.8008H23.5117C24.8558 22.8008 25.9492 21.7074 25.9492 20.3633V5.73827C25.9492 4.39414 24.8558 3.30075 23.5117 3.30075ZM23.5117 4.92574C23.6221 4.92574 23.7271 4.94865 23.8231 4.98865L12.9492 14.4131L2.07526 4.98865C2.17127 4.9487 2.27629 4.92574 2.38668 4.92574H23.5117ZM23.5117 21.1757H2.38674C1.93844 21.1757 1.57421 20.8116 1.57421 20.3632V6.70547L12.4168 16.1024C12.57 16.2349 12.7596 16.3008 12.9492 16.3008C13.1388 16.3008 13.3285 16.2349 13.4816 16.1024L24.3242 6.70547V20.3633C24.3242 20.8116 23.96 21.1757 23.5117 21.1757Z"></path>
                    </g>
                  </svg>
                </div>
                <div className="email-info">
                  <span>Email</span>
                  <h6>
                    <a href="mailto:office@digital-artefakt.me">office@digital-artefakt.me</a>
                  </h6>
                </div>
              </div>
            </form>
            <div className="header-btn5">
              <Link legacyBehavior href="/kontakt">
                <a className="primary-btn3">Pošaljite nam upit</a>
              </Link>
            </div>
          </div>
          <div style={{justifyContent:'center'}} className="pt-20 d-flex align-items-center gap-3 viber">
      <a href="viber://chat?number=%2B38268062361" target="_blank" rel="noopener noreferrer" aria-label="Viber">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="26" height="26" fill="#665CAC">
  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.031-.966-.273-.099-.472-.148-.67.15-.197.297-.768.966-.941 1.164-.173.198-.347.223-.644.075-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.019-.458.13-.606.134-.133.297-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.372-.025-.521-.075-.149-.67-1.612-.916-2.205-.242-.579-.487-.5-.67-.51l-.57-.01a1.17 1.17 0 0 0-.84.393c-.297.298-1.113 1.09-1.113 2.654s1.139 3.077 1.297 3.292c.149.198 2.24 3.417 5.426 4.78.759.327 1.35.523 1.812.669.761.242 1.453.208 2.001.126.611-.092 1.86-.76 2.125-1.494.263-.735.263-1.362.185-1.494-.08-.132-.272-.208-.57-.357m-5.397 6.275h-.004a9.86 9.86 0 0 1-4.923-1.327l-.353-.21-3.655.964.976-3.558-.23-.365a9.861 9.861 0 0 1-1.51-5.264c.001-5.45 4.437-9.884 9.888-9.884a9.842 9.842 0 0 1 7.006 2.901 9.824 9.824 0 0 1 2.882 7.008c-.003 5.451-4.437 9.885-9.881 9.885m8.413-18.297A11.917 11.917 0 0 0 12.07.002C5.495.002.004 5.493 0 12.067a11.943 11.943 0 0 0 1.616 6.021L.057 24l6.063-1.591a11.943 11.943 0 0 0 5.96 1.52h.005c6.574 0 11.965-5.491 11.97-12.065a11.922 11.922 0 0 0-3.47-8.442"/>
</svg>

      </a>

      <a href="https://wa.me/38268062361" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="26" height="26" fill="#25D366">
  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.031-.966-.273-.099-.472-.148-.67.15-.197.297-.768.966-.941 1.164-.173.198-.347.223-.644.075-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.019-.458.13-.606.134-.133.297-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.372-.025-.521-.075-.149-.67-1.612-.916-2.205-.242-.579-.487-.5-.67-.51l-.57-.01a1.17 1.17 0 0 0-.84.393c-.297.298-1.113 1.09-1.113 2.654s1.139 3.077 1.297 3.292c.149.198 2.24 3.417 5.426 4.78.759.327 1.35.523 1.812.669.761.242 1.453.208 2.001.126.611-.092 1.86-.76 2.125-1.494.263-.735.263-1.362.185-1.494-.08-.132-.272-.208-.57-.357m-5.397 6.275h-.004a9.86 9.86 0 0 1-4.923-1.327l-.353-.21-3.655.964.976-3.558-.23-.365a9.861 9.861 0 0 1-1.51-5.264c.001-5.45 4.437-9.884 9.888-9.884a9.842 9.842 0 0 1 7.006 2.901 9.824 9.824 0 0 1 2.882 7.008c-.003 5.451-4.437 9.885-9.881 9.885"/>
</svg>

      </a>
    </div>
        </div>
        
        <div className="nav-right d-flex jsutify-content-end align-items-center">
          <div className="sidebar-btn2" onClick={toggleLeftSidebar}>
            <img src="../assets/img/home-3/sidebar-btn.svg" alt="" />
          </div>
          <div
            className={`sidebar-button mobile-menu-btn ${
              state.isSidebarOpenMenu ? "active" : ""
            }`}
            onClick={toggleSidebarMenu}
          >
            <span />
          </div>
        </div>
      </header>
    </>
  );
}

export default Header3;
