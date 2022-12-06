import React from "react";
import "./Footer.css";

export default function Footer() {
  return (
    <footer className="footer">
      <ul className="menu">
        <li className="menu__item">
          <a className="menu__link" href="#">
            Home
          </a>
        </li>
        <li className="menu__item">
          <a className="menu__link" href="#">
            Product
          </a>
        </li>
        <li className="menu__item">
          <a className="menu__link" href="#">
            Contact us
          </a>
        </li>
      </ul>
      <p>Made by @Vista</p>
    </footer>
  );
}
