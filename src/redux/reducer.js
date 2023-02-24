
//se usa directamente TYPE y PAYLOAd porque se hace destructuring de ACTIONS,
//sin destructuring debe usarse como actions.type || actions.payload

let initialState = {
    dogsRender: [],
    dogsRenderFilters: [],
    dogsRenderReset: [],
    allDogs: [],
    allDogsReserve: []
}

export default function rootReducer(state = initialState, action) {
    switch (action.type) {
        case "saveAllDogs":
            return {
                ...state,
                allDogs: action.payload,
                allDogsReserve: action.payload
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
                const [zero, one, two, three, four, five, six, seven, ...rest] = allDogs;
                return {
                    ...state,
                    dogsRender: [zero, one, two, three, four, five, six, seven],
                    allDogs: allDogs
                }
            } else {
                let allDogs = state.allDogsReserve.filter(dog => dog.id > 264);
                return {
                    ...state,
                    dogsRender: allDogs
                }
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
            const [zero, one, two, three, four, five, six, seven] = allDogsOrderByName;
            return {
                ...state,
                dogsRender: [zero, one, two, three, four, five, six, seven],
                allDogs: allDogsOrderByName
            }

        case "oderByWeight":
            let allDogsOrderByWeight = state.allDogs;
            if (action.payload == "ascending") {
                allDogsOrderByWeight.sort((a, b) => parseInt(a.weight) - parseInt(b.weight));
            }
            else {
                allDogsOrderByWeight.sort((a, b) => parseInt(b.weight) - parseInt(a.weight));
            }
            const [zero0, one1, two2, three3, four4, five5, six6, seven7] = allDogsOrderByWeight;
            return {
                ...state,
                dogsRender: [zero0, one1, two2, three3, four4, five5, six6, seven7],
                allDogs: allDogsOrderByWeight
            }

        case "searchByName":
            if (action.payload) {
                return {
                    ...state,
                    dogsRender: action.payload
                }
            } else {
                return {
                    ...state,
                    dogsRender: [{ name: "No results found", image: "https://media2.giphy.com/media/v1.Y2lkPTc5MGI3NjExZGJhODlhZGQwOTdmNzY5MWEzMGM4YzRhMTk2YjFjNDBkM2RhZmM3ZCZjdD1n/xT0xeuOy2Fcl9vDGiA/giphy.gif", id: 0 }]
                }
            }

        case "createNewDog":
            return {
                ...state
            }


        default:
            return state;
    }
}