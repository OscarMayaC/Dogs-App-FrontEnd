import React from 'react';
import { Link } from "react-router-dom";
import styles from "./Welcome.module.css";

export default function Welcome(props) {


    return (
        <div className={styles.allScreen}>
            <h1 className={styles.title}>Welcome to Dogs App</h1>
            <Link to="/home">
                <button className={styles.button} onClick={() => props.getAllDogs()} >Log In</button>
            </Link>
        </div>

    )
}
