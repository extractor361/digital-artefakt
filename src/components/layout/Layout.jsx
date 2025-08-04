// Layout.js
import React from "react";
import Footer3 from "../footer/Footer3";
import Header from "../header/Header3";
import useBodyClass from "@/hooks/useBodyClass";

function Layout({ children }) {
  useBodyClass("home-dark2");

  return (
    <>
      <Header />
      {children}
      <Footer3 />
    </>
  );
}

export default Layout;
