import './App.css';

//dependencies
import React from 'react';
import { Routes } from "react-router-dom";
import { Route } from "react-router-dom";
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import axios, { all } from "axios";
import { useDispatch } from 'react-redux';
import { adminDogs } from './redux/actions';
import { saveAllDogs, nextDogs, actualRender, allTemperaments, searchByName } from "./redux/actions.js";

//components
import Welcome from './components/Welcome/Welcome.jsx';
import Home from "./components/Home/Home.jsx";
import Nav from './components/Nav/Nav.jsx';
import Detail from "./components/Detail/Detail.jsx";
import CreateDog from './components/CreateDog/CreateDog';


function App() {

  const location = useLocation();
  const dispatch = useDispatch();


  let [dogsLength, setDogsLength] = React.useState(9)
  const getAllDogs = async () => {
    try {
      let allDogs = await axios(`http://localhost:3001/dogs`);
      allDogs = allDogs.data;

      let DogsLength = allDogs.length;
      setDogsLength(DogsLength);

      dispatch(saveAllDogs(allDogs));
      allDogs = [];
      if (next.startNext == 0) {
        clickNext();
      }
      getAllTemperaments();



    } catch (error) {
      console.log(error)
    }

  }



  let [next, setNext] = React.useState({ startNext: 0, finishNext: 8 })

  function clickNext() {
    if (next.startNext < dogsLength) {
      let SN = next.startNext;
      let FN = next.finishNext;
      let arrayNext = [SN, FN];
      dispatch(nextDogs(arrayNext));
      SN = SN + 8;
      FN = FN + 8;
      setNext({ startNext: SN, finishNext: FN });
    }
  }

  function clickBack() {
    let SN = next.startNext - 8;
    let FN = next.finishNext - 8;
    if (SN >= 0 && FN >= 0) {
      setNext({ startNext: SN, finishNext: FN });
      let arrayNext = [SN, FN];
      dispatch(nextDogs(arrayNext));
    }
  }

  function clikActualRender() {
    let SN = next.startNext;
    let FN = next.finishNext;
    let arrayNext = [SN, FN];
    dispatch(actualRender(arrayNext));
    getAllDogs();
  }



  let [temperaments, setTemperaments] = React.useState([]);
  const getAllTemperaments = async () => {
    setTemperaments([]);
    let temperamentsArray = await axios(`http://localhost:3001/temperaments`);
    temperamentsArray = temperamentsArray.data;
    setTemperaments(temperamentsArray);
  }




  return (
    <div className="App">
      <div>
        {location.pathname === "/" ? null : <Nav clikActualRender={clikActualRender} />}
      </div>
      <Routes>
        <Route path='/' element={<Welcome getAllDogs={getAllDogs} />}></Route>
        <Route path='/home' element={<Home clickNext={clickNext} clickBack={clickBack} temperaments={temperaments} />} />
        <Route path='/detail/:detailId' element={<Detail />} />
        <Route path='/createDog' element={<CreateDog />}></Route>
      </Routes>
      {/* <h1>Henry Dogs</h1> */}
    </div>
  );
}

export default App;
