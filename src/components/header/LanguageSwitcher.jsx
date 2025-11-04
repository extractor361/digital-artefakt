"use client";
import { useRouter } from "next/router";

const LanguageSwitcher = () => {
  const router = useRouter();
  const { locale, locales, pathname, query } = router;

  const toggleLanguage = () => {
    // Promijeni na drugi jezik
    const nextLocale = locale === "en" ? "sr" : "en";
    router.push({ pathname, query }, undefined, { locale: nextLocale });
  };

  return (
    <button
      onClick={toggleLanguage}
      style={{
        marginLeft: "1rem",
        padding: "0.3rem 0.8rem",
        border: "1px solid #ccc",
        borderRadius: "4px",
        background: "#fff",
        cursor: "pointer",
      }}
    >
      {locale.toUpperCase()}
    </button>
  );
};

export default LanguageSwitcher;
