import React from 'react';
import axios from "axios";
import Card from "../Card/Card.jsx";
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import SearchBar from '../SearchBar/SearchBar.jsx';
import styles from "./Home.module.css";

import {
    filterByTemperaments, resetFiltersAndOrders, oderByOrigin,
    orderByName, oderByWeight
} from '../../redux/actions.js';



export default function Home(props) {

    const dispatch = useDispatch()
    let reduxState = useSelector((state) => state);
    let { temperaments } = props;

    function aplicateFilters(event) {
        event.preventDefault();
        const { name, value } = event.target;
        if (name == "temperament") {
            return dispatch(filterByTemperaments(value));
        }
        // if (name == "reset") {
        //     return dispatch(resetFiltersAndOrders());
        // }
        if (name == "origin") {
            return dispatch(oderByOrigin(value));
        }
        if (name == "alphabetical") {
            return dispatch(orderByName(value));
        }
        if (name == "weight") {
            return dispatch(oderByWeight(value));
        }
    }


    return (<div className={styles.allScreen}>
        <SearchBar />

        <button className={styles.buttonNext} onClick={() => props.clickNext()}>Next Dogs</button>
        <button className={styles.buttonPrev} onClick={() => props.clickBack()}>Prev Dogs</button>

        <select className={styles.select} name='temperament' defaultValue={"Default"} onChange={aplicateFilters} >
            <option value="Default" disabled>Select Temperament</option>
            {
                temperaments?.map((temp) => {
                    return (<option value={temp.name} key={temp.id}>{temp.name}</option>)
                })
            }
        </select>

        <select className={styles.select} name='origin' defaultValue={"Default"} onChange={aplicateFilters} >
            <option value="Default" disabled>Select Origin</option>
            <option value="api">API</option>
            <option value="database">DATABASE</option>
        </select>

        <select className={styles.select} name='alphabetical' defaultValue={"Default"} onChange={aplicateFilters} >
            <option value="Default" disabled>Select Order Alphabetical</option>
            <option value="ascending">Ascending</option>
            <option value="descending">Descending </option>
        </select>

        <select className={styles.select} name='weight' defaultValue={"Default"} onChange={aplicateFilters} >
            <option value="Default" disabled>Select Order Weight</option>
            <option value="ascending">Ascending</option>
            <option value="descending">Descending </option>
        </select>

        <button className={styles.buttonReset} onClick={() => props.Reset()}>Reset T&O</button>

        {/* <button name='reset' value="reset" onClick={aplicateFilters}>Remove All Filters</button> */}

        {

            reduxState.dogsRender?.map((el) => {
                return (
                    <Card
                        key={el.id}
                        id={el.id}
                        name={el.name}
                        image={el.image}
                        temperament={el.temperament}
                        weight={el.weight}
                    />
                )
            })}
      
      

    </div>);
}