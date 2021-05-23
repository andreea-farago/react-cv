import React, { Component } from 'react';
import { Link } from "react-router-dom";
import classes from "./Nav.module.css";
function NavLinks() {
  return (
    <ul>
      <li className={classes.border}>
        <Link to="/">HOME</Link>
      </li>
      <li className={classes.border}>
        <Link to="/about">ABOUT</Link>
      </li>
      <li className={classes.border}>
        <Link to="/work">WORK</Link>
      </li>
      <li className={classes.background}>
        <Link to="/contact">CONTACT</Link>
      </li>
    </ul>
  );
}

export default NavLinks;
