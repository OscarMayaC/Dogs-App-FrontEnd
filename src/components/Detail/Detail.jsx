import React from 'react'
import { useState } from "react";
import { useParams } from "react-router-dom";
import { useEffect } from 'react';
import styles from "./Detail.module.css";

export default function Detail() {

    const { detailId } = useParams();
    const [dog, setDog] = useState({});
    useEffect(() => {
        // fetch(`http://localhost:3001/dogs/${detailId}`)
        fetch(`https://dogs-app-backend-production.up.railway.app/dogs/${detailId}`)
            .then((response) => response.json())
            .then((dog) => {
                if (dog.name) {
                    setDog(dog);
                } else {
                    window.alert("Dog not found");
                }
            })
            .catch((err) => {
                console.log(err.message);
            });
        // return setDog({});
    }, [detailId]);


    return (
        <div className={styles.allScreen}>

            <div className={styles.details}>
                <div className={styles.divDetails}>
                    <h1 className={styles.dogName}>Name: {dog.name}</h1>
                    <h2>ID: {dog.id}</h2>
                    <h2>Height: {dog.height} cm</h2>
                    <h2>Weight: {dog.weight} kg</h2>
                    <h2>Temperaments: {dog.temperaments}</h2>
                    <h2>Life Span: {dog.life_span}</h2>
                </div>
                <img className={styles.image} src={dog.image} alt={dog.name} />
            </div>
        </div>
    )
}
