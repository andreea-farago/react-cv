import React, { Component } from 'react';
import classes from "./home.module.css";
import { Link } from "react-router-dom";
import Typical from "react-typical";
function Home(){
    return (
        <div className={classes.container}>
            <div className={classes.text}>
                <div className={classes.row1}>Hello, my name is </div>
                <div className={classes.row2}>Andreea Farago</div>
                <div className={classes.row3}>And I'm a {" "}
                <span>
                <Typical loop={Infinity} wrapper="b" steps={[
                    "Web Developer", 1000,
                    "Student", 1000,
                    "Friend", 1000,
                    "Team-player", 1000
                ]}/>
                </span>
                <div><button><Link to="/contact">Get in touch</Link></button></div>
                </div>
            </div>
        </div>
    );
}

export default Home;