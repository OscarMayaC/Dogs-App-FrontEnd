import styles from "./Card.module.css";
import { Link } from "react-router-dom";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";

import React from 'react'

export default function Card(props) {
    return (
        <div className={styles.divCard}>
            <Link to={`/detail/${props.id}`}>
                <img className={styles.image} src={props.image} alt={props.image} />

                <h2 className={styles.characterDetails}>{props.name}</h2>

                <h3 className={styles.characterDetails}>Temperament: {props.temperament}</h3>
                <h3 className={styles.characterDetails}>Weight: {props.weight} kg</h3>
            </Link>
        </div>
    )
}
