import React, { Component } from 'react';
import classes from "./contact.module.css";
import Card from "../components/Card";
import Info from "../components/contact/Info";
import { FaUserAlt } from "react-icons/fa";
import { FaMapMarkerAlt } from "react-icons/fa";
import { IoIosMail } from "react-icons/io";
import { AiOutlineWhatsApp } from "react-icons/ai";
import img from "../images/contact.png";
function Contact(){
    return (
        <div>
        <Card>
            <h2 className={classes.title}>Contact me</h2>
            <h2>I'd love to hear from you</h2>
            <p>Please, feel free to use the info below to contact me. Let's work together !</p>
            <div className={classes.container}>
                <div className={classes.columnLeft}>
                    <div className={classes.boxItem}>
                        <FaUserAlt className={classes.icon}/>
                        <Info head="Name" subtitle="Andreea Farago"></Info>
                    </div> 
                    <div className={classes.boxItem}>
                        <FaMapMarkerAlt className={classes.icon}/>
                        <Info head="Address" subtitle="Timis, Romania"></Info>
                    </div> 
                    <div className={classes.boxItem}>
                        <IoIosMail className={classes.icon}/>
                        <Info head="Email" subtitle="andreea.farago@outlook.com"></Info>
                    </div> 
                    <div className={classes.boxItem}>
                        <AiOutlineWhatsApp className={classes.icon}/>
                        <Info head="Phone" subtitle="+40753409073"></Info>
                    </div> 
                </div>
                <div className={classes.columnRight}><img src={img} /></div>
            </div>
            </Card>
            <footer>
                Created by <span>Andreea Farago</span> | <a href="https://github.com/andreea-farago"><span>Github</span></a>
            </footer> 
        </div>
    );
}

export default Contact;