import React from "react";
import Head from "next/head";

import Footer from "./Footer";
import Header from "./Header";

const Layout = ({ children, title = "Book Best Hotels for your Holidays" }) => {
  return (
    <>
      <Head>
        <title>{title}</title>
      </Head>
      <Header />
      {children}
      <Footer />
    </>
  );
};

export default Layout;
