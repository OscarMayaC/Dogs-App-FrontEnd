import SearchBar from '../SearchBar/SearchBar.jsx';
import React from 'react';
import styles from "./Nav.module.css";
import { Link } from "react-router-dom";
import { useDispatch } from 'react-redux';
import { actualRender } from '../../redux/actions.js';

export default function Nav(props) {





    return (
        <div className={styles.nav}>
            <ul className={styles.options}>
                <button className={styles.buttons}>
                    <Link to="/home" onClick={() => props.clikActualRender()} style={{ textDecoration: "none" , color: '#03e9f4'}} >
                        HOME
                    </Link>
                </button>
                <button className={styles.buttons}>
                    <Link to="/about" style={{ textDecoration: "none" , color: '#03e9f4'}} >
                        ABOUT
                    </Link>
                </button>

                <button className={styles.buttons}>
                    <Link to="/createDog" style={{ textDecoration: "none" , color: '#03e9f4'}} >
                        CREATE DOG
                    </Link>
                </button>

                <button className={styles.buttonLogOut}>
                    <Link to="/" style={{ textDecoration: "none" , color: '#03e9f4'}} >
                        LOG OUT
                    </Link>
                </button>
            </ul>

        </div>
    )
}
