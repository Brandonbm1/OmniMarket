import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";

const Layout = ({ children, page }) => {
  return (
    <>
      <Navbar page={page} />
      {children}
      <Footer />
    </>
  );
};

export default Layout;
