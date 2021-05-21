import classes from "./about.module.css";
import photo from "../images/photo.jpg";
function About() {
  return (
    <div>
      <h2 className={classes.title}>About Me</h2>
      <div className={classes.container}>
        <div className={`${classes.column} ${classes.columnLeft}`}>
          <img src={photo} />
        </div>
        <div className={`${classes.column} ${classes.columnRight}`}>
          <h2 className={classes.subtitle}>My name is Andreea Farago and I am a student</h2>
          <p>
            I am currently studying Automation and Applied Informatics at
            Politehnica University of Timisoara. Recently, the spark I needed
            ignited the moment I heard my teacher presenting the new optional
            course we had: Web Application Programming. After that, I did some
            research and I realized that this is what I want to do. In a short
            period of time I found myself in love with Web Development. I fell
            ready to take my career to the next level so that's why I am looking
            for an opportunity to advance the skills I already have and continue
            building my career and challanging myself. <br /> I am dedicated,
            organized, honest and a team player. What is really important to me
            and I love doing it is learning new stuff. In this field there is
            certainly more to learn, more problems to solve and more to build
            every day that pass. And for this, I am exceptionally thankful.
          </p>
          <a href="../images/resume.pdf" download>
            Download CV
          </a>
        </div>
      </div>
    </div>
  );
}

export default About;
