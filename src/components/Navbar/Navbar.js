import React from "react";
import s from './Navbar.module.css'

let Navbar = () => {
  return (
    <nav className={s.nav}>
      <div>Profile</div>
      <div>Messages</div>
    </nav>
  );
};

export default Navbar;