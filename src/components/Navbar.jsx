/* eslint-disable react/prop-types */
import { useState } from "react";

import classes from "./Navbar.module.css";
import logoImg from "../assets/images/logo.svg";
import menu_burger from "../assets/images/icon-menu.svg";
import menu_close from "../assets/images/icon-menu-close.svg";

export default function Navbar({ navbarListItems }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className={classes.header}>
      <nav className={classes.nav}>
        <a href="/">
          <img src={logoImg} alt="nav logo" />
        </a>
        <div
          className={`${classes.navMenu} ${isMenuOpen ? classes.showMenu : ""}`}
        >
          <ul className={classes.navList}>
            {navbarListItems.map((item) => (
              <li key={item.title} className={classes.navItem}>
                <a href={item.link}>
                  <span className={classes.underLine}>{item.title}</span>
                </a>
              </li>
            ))}
          </ul>
          <div className={classes.navClose}>
            <button onClick={toggleMenu}>
              <img
                src={menu_close}
                alt="menu close"
                className={classes.buttonImg}
              />
            </button>
          </div>
        </div>

        <div className={classes.navToggle}>
          <button onClick={toggleMenu}>
            <img
              src={menu_burger}
              alt="menu open"
              className={classes.buttonImg}
            />
          </button>
        </div>
      </nav>
    </header>
  );
}
