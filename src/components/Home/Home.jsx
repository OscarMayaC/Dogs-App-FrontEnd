import React from 'react';
import axios from "axios";
import Card from "../Card/Card.jsx";
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';

import { getAllDogs } from '../../redux/actions.js';



export default function Home(props) {



    const dispatch = useDispatch()
    let allDogs = useSelector((state) => state.dogsRender);
    let { temperaments } = props;




    return (<div>
        <button onClick={() => props.clickNext()}>Next Dogs</button>
        <button onClick={() => props.clickBack()}>Back Dogs</button>

        <select name='temperament' defaultValue={"Default"} >
            <option value="Default" disabled>Select Temperament</option>
            {
                temperaments?.map((temp) => {
                    return (<option value={temp.name} key={temp.id}>{temp.name}</option>)
                })
            }
        </select>
        {

            allDogs?.map((el) => {
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