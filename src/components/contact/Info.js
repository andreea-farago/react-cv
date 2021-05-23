import React, { Component } from 'react';
import classes from "../../pages/contact.module.css";
function InfoBox(props){
    return (
        <div className={classes.info}>
            <div className={classes.head}>{props.head}</div>
            <div className={classes.subtitle}>{props.subtitle}</div>
        </div>
    );
}
export default InfoBox;