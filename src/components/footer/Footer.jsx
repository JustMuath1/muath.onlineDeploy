import React from "react";
import "./footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__container container">
        <h1 className="footer__title">Muath</h1>
        <ul className="footer__list">
          <li>
            <a href="#About" className="footer__link">
              About
            </a>
          </li>
          <li>
            <a href="#services" className="footer__link">
              Projects
            </a>
          </li>
          <li>
            <a href="#participating" className="footer__link">
              Participating
            </a>
          </li>
        </ul>
        <div className="footer__social">
          <a
            href="https://mobile.twitter.com/muath_online"
            className="footer__social-link"
            target={"_blank"}
            rel="noreferrer"
          >
            <i class="uil uil-twitter-alt"></i>
          </a>
          <a
            href="https://github.com/JustMuath1"
            className="footer__social-link"
            target={"_blank"}
            rel="noreferrer"
          >
            <i class="uil uil-github-alt"></i>
          </a>
          <a
            href="https://wa.me/966556297083"
            className="footer__social-link"
            target={"_blank"}
            rel="noreferrer"
          >
            <i class="uil uil-whatsapp"></i>
          </a>
        </div>
        <spn className="footer__copy">
          &#169; Muath Al-Ghamdi. All right reserved
        </spn>
      </div>
    </footer>
  );
};

export default Footer;
