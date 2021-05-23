import React, { Component } from 'react';
import classes from "../../pages/work.module.css";
import { FaRegHandPointUp } from "react-icons/fa";
function SkillsBox(props) {
  return (
    <div className={classes.box}>
      <div className={classes.item}>
        <img src={props.img} alt={props.title} />
        <h3>{props.title}</h3>
        <p>{props.description}</p>
        <FaRegHandPointUp className={classes.pointer} />
      </div>
    </div>
  );
}
export default SkillsBox;
