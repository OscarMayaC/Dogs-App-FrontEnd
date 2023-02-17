import React from 'react';
// import { useNavigate } from 'react-router-dom';
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getDogs } from '../../redux/actions';


export default function Welcome(props) {


    return (
        <div>
            <h1>Welcome to Dogs App</h1>
            <Link to="/home">
                {/* <button >Log In</button> */}
                <button onClick={() => props.getAllDogs()} >Log In</button>
            </Link>
        </div>

    )
}
