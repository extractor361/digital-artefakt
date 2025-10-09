import Link from "next/link";
import { useRouter } from "next/router";
import React, { useEffect, useReducer, useRef } from "react";
import { useTranslations } from "next-intl";

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
  const t = useTranslations(); // hook za prevod
  const [state, dispatch] = useReducer(reducer, initialState);
  const headerRef = useRef(null);
  const currentRoute = useRouter().pathname;

  const handleScroll = () => {
    const { scrollY } = window;
    dispatch({ type: "setScrollY", payload: scrollY });
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = (menu) => dispatch({ type: "TOGGLE_MENU", menu });
  const toggleSubMenu = (subMenu) => dispatch({ type: "TOGGLE_SUB_MENU", subMenu });
  const toggleSidebarMenu = () => {
    dispatch({ type: "TOGGLE_MENU", menu: "" });
    dispatch({ type: "TOGGLE_SUB_MENU", subMenu: "" });
    dispatch({ type: "TOGGLE_SIDEBAR_MENU" });
  };
  const toggleLeftSidebar = () => dispatch({ type: "TOGGLE_LEFT_SIDEBAR" });

  return (
    <>
      {/* Sidebar */}
      <div className={`header-sidebar ${state.isLeftSidebarOpen ? "slide" : ""}`}>
        <div className="sidebar-top">
          <div className="sidebar-log">
            <Link href="/" legacyBehavior>
              <a><img src="../assets/img/logo.svg" alt="Digital Artefakt Logo" /></a>
            </Link>
          </div>
          <div className="close-btn" onClick={toggleLeftSidebar}><i className="bi bi-x-lg" /></div>
        </div>
        <div className="sidebar-content">
          <p>{t('Header.sidebarText')}</p>
        </div>
        <div className="follow-area">
          <h5 className="blog-widget-title">{t('Header.contactUs')}</h5>
          <p className="para">{t('Header.viberWhatsapp')}</p>
        </div>
      </div>

      {/* Header */}
      <header ref={headerRef} className={`header-area2 one ${state.scrollY > 10 ? "sticky" : ""}`}>
        <div className="header-logo">
          <Link href="/" legacyBehavior>
            <a><img className="logotip img-fluid" src="../assets/img/logo.svg" alt="Digital Artefakt Logo" /></a>
          </Link>
        </div>

        <ul className="menu-list">
          <li className={currentRoute === "/" ? "active" : ""}>
            <Link href="/">{t('Header.home')}</Link>
          </li>
          <li>
            <Link href="/onama">{t('Header.about')}</Link>
          </li>
          <li className="menu-item-has-children">
            <div className="menu-link-wrapper">
              <Link href="/usluge">{t('Header.services')}</Link>
              <i
                className={`bi bi-plus dropdown-icon ${state.activeMenu === "usluge" ? "active" : ""}`}
                onClick={(e) => { e.preventDefault(); toggleMenu("usluge"); }}
              />
            </div>
            <ul className={`sub-menu ${state.activeMenu === "usluge" ? "open" : ""}`}>
              <li><Link href="/usluge/izrada-veb-sajta">{t('Header.websites')}</Link></li>
              <li><Link href="/usluge/izrada-veb-aplikacija">{t('Header.webApps')}</Link></li>
              <li><Link href="/usluge/izrada-mobilnih-aplikacija">{t('Header.mobileApps')}</Link></li>
              <li><Link href="/usluge/seo">{t('Header.seo')}</Link></li>
              <li><Link href="/usluge/oglasavanje">{t('Header.ads')}</Link></li>
              <li><Link href="/usluge/veb-sigurnost">{t('Header.security')}</Link></li>
            </ul>
          </li>
          <li><Link href="/projekti">{t('Header.projects')}</Link></li>
          <li><Link href="/cjenovnik">{t('Header.pricing')}</Link></li>
          <li><Link href="/faq">{t('Header.faq')}</Link></li>
          <li><Link href="/kontakt">{t('Header.contact')}</Link></li>
        </ul>

        <div className="nav-right d-flex justify-content-end align-items-center">
          <div className="sidebar-btn2" onClick={toggleLeftSidebar}>
            <img src="../assets/img/home-3/sidebar-btn.svg" alt="" />
          </div>
          <div
            className={`sidebar-button mobile-menu-btn ${state.isSidebarOpenMenu ? "active" : ""}`}
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
