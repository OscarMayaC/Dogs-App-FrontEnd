import React from 'react'
import styles from "./About.module.css";
import DeveloperPhoto from "./TheDeveloper.jpg";

export default function About() {
    return (
        <div className={styles.allScreen}>

            <div className={styles.details}>
                <div className={styles.divDetails}>
                    <h1 className={styles.dogName}>Thanks for being here!</h1>
                    <h2>My name is Oscar Maya,
                        I am a Mexican Full Stack Web Developer, this App
                        has been created with JavaScript, Node.js, Express, Postgres, Sequelize, React, Redux and CSS.</h2>
                    <a href="https://www.linkedin.com/in/oscarmayacuellar/">
                        <img className={styles.imageLinks} src='https://cdn-icons-png.flaticon.com/512/174/174857.png' alt='linkedin logo'></img>
                    </a>
                    <a href="https://github.com/OscarMayaC">
                        <img className={styles.imageLinks} src="https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png" alt="github logo" />
                    </a>
                </div>
                <img src={DeveloperPhoto} alt="DeveloperPhoto" className={styles.imageDeveloper} />
            </div>
        </div>
    )
}
