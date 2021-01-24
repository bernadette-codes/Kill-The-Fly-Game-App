import React from "react";
import "./styles.scss";

const Nav = () => (
  <nav>
    <button className="btn">
      <a
        href="https://bernadetteestacio.site/"
        target="_blank"
        rel="noopener noreferrer"
      >
        Home
      </a>
    </button>
    <button className="btn">
      <span onClick={() => window.location.reload()}>Reset</span>
    </button>
  </nav>
);

export default Nav;
