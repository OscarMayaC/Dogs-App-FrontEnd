
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

        // case "resetFiltersAndOrders":
        //     return {
        //         ...state,
        //         dogsRender: state.dogsRenderReset
        //     }

        case "oderByOrigin":
            let allDogs = state.allDogs;
            if (action.payload == "api") {
                allDogs = allDogs.filter(dog => dog.id < 265);
            } else {
                allDogs = allDogs.filter(dog => dog.id > 264);
            }
            return {
                ...state,
                dogsRender: allDogs
            }

        case "orderByName":
            let allDogsOrderByName = state.allDogs;
            if (action.payload == "ascending") {
                allDogsOrderByName.sort((a, b) => {
                    let nameA = a.name.toLowerCase();
                    let nameB = b.name.toLowerCase();
                    if (nameA < nameB) {
                        return -1
                    }
                    if (nameA > nameB) {
                        return 1
                    } else {
                        return 0;
                    }
                })
            } else {
                allDogsOrderByName.sort((a, b) => {
                    let nameA = a.name.toLowerCase();
                    let nameB = b.name.toLowerCase();
                    if (nameA > nameB) {
                        return -1
                    }
                    if (nameA < nameB) {
                        return 1
                    } else {
                        return 0;
                    }
                })
            }
            return {
                ...state,
                dogsRender: allDogsOrderByName
            }

        case "oderByWeight":
            let allDogsOrderByWeight = state.allDogs;
            if (action.payload == "ascending") {
                allDogsOrderByWeight.sort((a, b) => parseInt(a.weight) - parseInt(b.weight));
            }
            else {
                allDogsOrderByWeight.sort((a, b) => parseInt(b.weight) - parseInt(a.weight));
            }
            return {
                ...state,
                dogsRender: allDogsOrderByWeight
            }

        case "searchByName":
            return {
                ...state,
                dogsRender: action.payload
            }

        case "createNewDog":
            return {
                ...state
            }


        default:
            return state;
    }
}