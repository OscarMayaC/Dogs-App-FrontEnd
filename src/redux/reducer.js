
//se usa directamente TYPE y PAYLOAd porque se hace destructuring de ACTIONS,
//sin destructuring debe usarse como actions.type || actions.payload

let initialState = {
    dogsRender: [],
    dogsRenderFilters: [],
    dogsRenderReset: [],
    allDogs: []
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
            for (let i = action.payload[0]; i < action.payload[1] && i < state.allDogs.length; i++) {
                dogsToRender.push(state.allDogs[i]);
            }
            let dogsToRenderAux = dogsToRender;
            dogsToRender = [];
            return {
                ...state,
                dogsRender: dogsToRenderAux,
                dogsRenderFilters: dogsToRenderAux,
                dogsRenderReset: dogsToRenderAux
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

        case "filterByTemperaments":
            const filterByTemper = state.allDogs;
            const withThisTemper = [];
            for (let i = 0; i < filterByTemper.length; i++) {
                if (filterByTemper[i].temperament) {
                    if (filterByTemper[i].temperament.includes(action.payload)) {
                        withThisTemper.push(filterByTemper[i])
                    }
                }
            }
            return {
                ...state,
                dogsRender: withThisTemper,
                dogsRenderFilters: withThisTemper
            }

        default:
            return state;
    }
}