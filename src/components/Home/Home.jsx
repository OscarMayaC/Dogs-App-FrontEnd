import React from 'react';
import axios from "axios";
import Card from "../Card/Card.jsx";
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';

import { filterByTemperaments } from '../../redux/actions.js';



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
    }


    return (<div>
        <button onClick={() => props.clickNext()}>Next Dogs</button>
        <button onClick={() => props.clickBack()}>Prev Dogs</button>

        <select name='temperament' defaultValue={"Default"} onChange={aplicateFilters} >
            <option value="Default" disabled>Select Temperament</option>
            {
                temperaments?.map((temp) => {
                    return (<option value={temp.name} key={temp.id}>{temp.name}</option>)
                })
            }
        </select>

        <select name='origin' defaultValue={"Default"} >
            <option value="Default" disabled>Select Origin</option>
            <option>API</option>
            <option>DATABASE</option>
        </select>

        <select name='alphabetical' defaultValue={"Default"} >
            <option value="Default" disabled>Select Order Alphabetical</option>
            <option>Ascending</option>
            <option>Descending </option>
        </select>

        <select name='weight' defaultValue={"Default"} >
            <option value="Default" disabled>Select Order Weight</option>
            <option>Ascending</option>
            <option>Descending </option>
        </select>

        <button>Remove All Filters</button>

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