import SearchBar from '../SearchBar/SearchBar.jsx';
import React from 'react';
import styles from "./Nav.module.css";
import { Link } from "react-router-dom";
import { useDispatch } from 'react-redux';
import { actualRender } from '../../redux/actions.js';

export default function Nav(props) {

    
   


    return (
        <div className={styles.nav}>
            <ul className={styles.navBotones}>
                <button className={styles.navButtons}>
                    <Link to="/home" onClick={() => props.clikActualRender()}>
                        HOME
                    </Link>
                </button>
                <button className={styles.navButtons}>
                    <Link to="/about">
                        ABOUT
                    </Link>
                </button>

                <button className={styles.navButtonsLogOut}>
                    <Link to="/">
                        LOG OUT
                    </Link>
                </button>
            </ul>
            <div className={styles.navheader}>


                <SearchBar onSearch={props.onSearch} />
            </div>
        </div>
    )
}
