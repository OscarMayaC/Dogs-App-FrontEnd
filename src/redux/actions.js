import axios from "axios";

export function saveAllDogs(allDogs) {
    return {
        type: "saveAllDogs",
        payload: allDogs
    }
}

export function nextDogs(arrayNext) {
    return {
        type: "nextDogs",
        payload: arrayNext
    }
}

export function actualRender() {
    return {
        type: "actualRender",
    }
}

export async function allTemperaments(temperamentsArray) {
   
    return {
        type: "allTemperaments",
        payload: temperamentsArray
    }
}

export function filterByTemperaments(temperament){
    return {
        type: "filterByTemperaments",
        payload: temperament
    }
}