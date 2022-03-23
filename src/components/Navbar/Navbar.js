import React from "react";
import { NavLink } from "react-router-dom";
import s from "./Navbar.module.css";

let Navbar = () => {
  return (
    <nav className={s.nav}>
      <div className={s.wrapper}>
        <div>
          <NavLink to="/profile">Profile</NavLink>
        </div>
        <div>
          <NavLink to="/messages">Messages</NavLink>
        </div>
        <div>
          <NavLink to="/settings">Settings</NavLink>
        </div>
        <div>
          <NavLink to="/musics">Music</NavLink>
        </div>
        <div>
          <NavLink to="/friends">Friends</NavLink>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
