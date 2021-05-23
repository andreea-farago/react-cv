import React, { Component } from 'react';
import classes from "./card.module.css";

function Card(props){
    return (
        <div className={classes.card}>{props.children}</div>
    );
}

export default Card;