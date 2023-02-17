
//se usa directamente TYPE y PAYLOAd porque se hace destructuring de ACTIONS,
//sin destructuring debe usarse como actions.type || actions.payload

let initialState = {
    dogsRender: [],
    allDogs: [],
    temperaments: [],
    breeds: [],
    details: []
}

export default function rootReducer(state = initialState, action) {
    switch (action.type) {
        case "saveAllDogs":
            return {
                ...state,
                allDogs: action.payload
            }

        case "nextDogs":
            let dogsToRender = []
            for (let i = action.payload[0]; i < action.payload[1]; i++) {
                dogsToRender.push(state.allDogs[i]);
            }
            let dogsToRenderAux = dogsToRender;
            dogsToRender = [];
            return {
                ...state,
                dogsRender: dogsToRenderAux
            }

        case "actualRender":
            return {
                ...state,
            }

        case "allTemperaments":
            return {
                ...state,
                temperaments: action.payload
            }

        default:
            return state;
    }
}