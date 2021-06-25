import React from "react";
import Head from "next/head";

import Footer from "./Footer";
import Header from "./Header";

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Layout = ({ children, title = "Book Best Hotels for your Holidays" }) => {
  return (
    <>
      <Head>
        <title>{title}</title>
      </Head>
      <Header />
      <ToastContainer position="bottom-right" />
      {children}
      <Footer />
    </>
  );
};

export default Layout;
