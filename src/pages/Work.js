import React, { Component } from 'react';
import classes from "./work.module.css";
import box1 from "../images/box1.png";
import box2 from "../images/box2.png";
import box3 from "../images/box3.png";
import SkillsBox from "../components/skills/SkillsBox";
import Card from "../components/Card";
import project1 from "../images/randomQuoteMachine.png";
import project2 from "../images/game.png";
function Work() {
  return (
    <Card>
      <div className={classes.title}>My Skills</div>
      <div className={classes.container}>
        <SkillsBox
          img={box1}
          title="HTML & CSS"
          description="Member of the freeCodeCamp community, I picked up those awesome skills throught self-driven learning. I consolidated those skills on different online learning platforms like W3Schools, Udemy and YouTube."
        ></SkillsBox>
        <SkillsBox
          img={box2}
          title="JavaScript"
          description="Variables, Data Types, Operators | Control Structures | Functions | Arrays and Iterables | Classes and Object-oriented Programming | Working with the DOM | Working with Events"
        ></SkillsBox>
        <SkillsBox
          img={box3}
          title="Front End Development Libraries"
          description="React | Bootstrap | And a little bit of: jQuery and Sass"
        ></SkillsBox>
      </div>
      <div className={classes.title}>My Projects</div>
      <div className={classes.projectContainer}>
        <div className={classes.project}>
          <div className={classes.text}>
            <div>
              <h3>Random Quote Machine</h3>
              <p>
                Random quotes shown over the planet's most beautiful landscapes,
                seen from space.
              </p>
              <p>
                Built using: <span>HTML, CSS, BOOTSTRAP, REACT</span>
              </p>
            </div>
            <div className={classes.button}>
              <a
                type="button"
                href="https://codepen.io/andreea-farago/pen/BapOoJY"
              >
                View project
              </a>
            </div>
          </div>
          <div className={classes.photo}>
            <img src={project1} />
          </div>
        </div>
        <div className={`${classes.project} ${classes.projectReverse}`}>
          <div className={classes.photo}>
            <img src={project2} />
          </div>
          <div className={classes.text}>
            <div>
              <h3>Javascript Game</h3>
              <p>
                Lizard spock is an expansion pack for the much-loved game of
                rock paper scissors.{" "}
              </p>
              <p>
                Built using: <span>HTML, CSS, JAVASCRIPT</span>
              </p>
            </div>
            <div className={classes.button}>
              <a
                type="button"
                href="https://codepen.io/andreea-farago/pen/JjEwdVv"
              >
                View project
              </a>
            </div>
          </div>
        </div>
      </div>
    </Card>
  );
}

export default Work;
