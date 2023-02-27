import styles from "./Card.module.css";
import { Link } from "react-router-dom";


import React from 'react'

export default function Card(props) {
    return (
        <div className={styles.divCard}>
            <Link to={`/detail/${props.id}`} style={{ textDecoration: "none" }}>
                <img className={styles.image} src={props.image} alt={props.image} />

                <h2 className={styles.titleCard}>{props.name}</h2>

                <h3 className={styles.letters}>Temperament: {props.temperament}</h3>
                <h3 className={styles.letters}>Weight: {props.weight} kg</h3>
            </Link>
        </div>
    )
}
