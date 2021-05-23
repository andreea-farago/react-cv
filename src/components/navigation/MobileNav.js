import React, { Component } from 'react';
import NavLinks from "./NavLinks";
import classes from "./Nav.module.css";
import { RiMenu3Fill } from "react-icons/ri";
import { RiCloseFill } from "react-icons/ri";
import { useState } from "react";
function MobileNav() {
  const [open, setOpen] = useState(false);
  const burgerIcon = (
    <RiMenu3Fill
      className={classes.burger}
      size="40px"
      color="#4d5198"
      onClick={() => setOpen(!open)}
    />
  );
  const closeIcon = (
    <RiCloseFill
      className={classes.burger}
      size="40px"
      color="#4d5198"
      onClick={() => setOpen(!open)}
    />
  );
  return <nav className={classes.mobileNav}>
      {open ? closeIcon : burgerIcon}
      {open && <NavLinks />}</nav>;
}

export default MobileNav;
