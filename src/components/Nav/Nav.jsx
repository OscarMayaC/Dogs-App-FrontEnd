import React from 'react';
import styles from "./Nav.module.css";
import { Link } from "react-router-dom";


export default function Nav(props) {

    return (
        <div className={styles.nav}>
            <ul className={styles.options}>
                <Link to="/home" onClick={() => props.clikActualRender()} style={{ textDecoration: "none", color: '#03e9f4' }} >
                    <button className={styles.buttons}>
                        HOME
                    </button>
                </Link>

                <Link to="/createDog" style={{ textDecoration: "none", color: '#03e9f4' }} >
                    <button className={styles.buttons}>
                        CREATE DOG
                    </button>
                </Link>

                <Link to="/about" style={{ textDecoration: "none", color: '#03e9f4' }} >
                    <button className={styles.buttons}>
                        ABOUT
                    </button>
                </Link>

                <Link to="/" style={{ textDecoration: "none", color: '#03e9f4' }} >
                    <button className={styles.buttonLogOut}>
                        LOG OUT
                    </button>
                </Link>
            </ul>

        </div>
    )
}
