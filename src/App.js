import './App.css';

//dependencies
import React from 'react';
import { Routes } from "react-router-dom";
import { Route } from "react-router-dom";
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import axios from "axios";
import { useDispatch } from 'react-redux';
import { saveAllDogs, nextDogs, resetAll } from "./redux/actions.js";

//components
import Welcome from './components/Welcome/Welcome.jsx';
import Home from "./components/Home/Home.jsx";
import Nav from './components/Nav/Nav.jsx';
import Detail from "./components/Detail/Detail.jsx";
import CreateDog from './components/CreateDog/CreateDog';
import About from './components/About/About';


function App() {

  const navigate = useNavigate();
  const [access, setAccess] = React.useState(false);
  useEffect(() => {
    !access && navigate("/");
    // eslint-disable-next-line
  }, [access]);

  const location = useLocation();
  const dispatch = useDispatch();


  let [dogsLength, setDogsLength] = React.useState(9)
  const getAllDogs = async () => {
    setAccess(true);
    try {
      // let allDogs = await axios(`http://localhost:3001/dogs`);
      let allDogs = await axios(`https://dogs-app-backend-production.up.railway.app/dogs`);
      allDogs = allDogs.data;

      let DogsLength = allDogs.length;
      setDogsLength(DogsLength);

      dispatch(saveAllDogs(allDogs));
      allDogs = [];
      if (next.startNext == 0) {
        dispatch(nextDogs([0, 8]))
      }
      getAllTemperaments();



    } catch (error) {
      console.log(error)
    }

  }



  let [next, setNext] = React.useState({ startNext: 0, finishNext: 8 })

  function clickNext() {
    if (next.startNext < dogsLength) {
      let SN = next.startNext + 8;
      let FN = next.finishNext + 8;
      dispatch(nextDogs([SN, FN]));
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

  let [temperaments, setTemperaments] = React.useState([]);
  const getAllTemperaments = async () => {
    try {
      setTemperaments([]);
      // let temperamentsArray = await axios(`http://localhost:3001/temperaments`);
      let temperamentsArray = await axios(`https://dogs-app-backend-production.up.railway.app/temperaments`);
      temperamentsArray = temperamentsArray.data;
      setTemperaments(temperamentsArray);
    } catch (error) {
      console.log(error)
    }
  }

  function Reset() {
    setNext({ startNext: 0, finishNext: 8 });
    dispatch(resetAll());
  }

  async function refreshAllDogs() {
    await getAllDogs()
  }

  return (
    <div className="App">
      <div>
        {location.pathname === "/" ? null : <Nav refreshAllDogs={refreshAllDogs} />}
      </div>
      <Routes>
        <Route path='/' element={<Welcome getAllDogs={getAllDogs} />}></Route>
        <Route path='/home' element={<Home clickNext={clickNext} clickBack={clickBack} temperaments={temperaments} Reset={Reset} />} />
        <Route path='/detail/:detailId' element={<Detail />} />
        <Route path='/createDog' element={<CreateDog getAllDogs={getAllDogs} temperaments={temperaments} />}></Route>
        <Route path='/about' element={<About />} />
      </Routes>
    </div>
  );
}

export default App;
