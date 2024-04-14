import NavStyles from "../src/styles/Nav.module.css";
import Link from "next/link";

import React from "react";

const Nav = () => {
  return (
    <nav className={NavStyles.nav}>
      <ul>
        <li>
          <Link href="/">Home</Link>
        </li>
        <li>
          <Link href="/about">About</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
