import React from "react";
import s from "./Footer.module.css";

let Footer = () => {
  return (
    <footer className={s.footer}>
      <div>
          <a href='https://www.instagram.com/' target='_blank'>
              Insta
          </a>
        <span className={s.developed}>Разработан 2021</span>
      </div>
    </footer>
  );
};

export default Footer;
