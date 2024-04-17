import React from "react";
import styles from "../src/styles/Layout.module.css";
import Nav from "./Nav";
import Header from "./Header";
import Meta from "./Meta";

const Layout = ({ children }) => {
  return (
    <>
      <Meta />
      <Nav></Nav>
      <div className={styles.container}>
        <h1>Hello on Every Page</h1>
        <Header />
        <main className={styles.main}>{children}</main>
      </div>
    </>
  );
};

export default Layout;
