import React, { Component } from 'react';
import NavLinks from "./NavLinks";
import classes from "./Nav.module.css";
function DesktopNav (){
    return (
        <nav className={classes.desktopNav}>
            <NavLinks />
        </nav>
    );
}

export default DesktopNav;