

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
            if (dogsToRender.length > 0) {
                return {
                    ...state,
                    dogsRender: dogsToRender,
                    dogsRenderFilters: dogsToRender,
                    dogsRenderReset: dogsToRender
                }
            } else {
                return {
                    ...state
                }
            }

        // case "allTemperaments":
        //     return {
        //         ...state,
        //         temperaments: action.payload
        //     }

        case "filterByTemperaments":
            const filterByTemper = state.allDogsReserve;
            const withThisTemper = [];
            for (let i = 0; i < filterByTemper.length; i++) {
                if (filterByTemper[i].temperament) {
                    if (filterByTemper[i].temperament.includes(action.payload)) {
                        withThisTemper.push(filterByTemper[i])
                    }
                }
            }
            let arrayFirstWithThisT = [];
            let restWithThisTemper = [];
            for (let j = 0; j < withThisTemper.length; j++) {
                if (j < 8) {
                    arrayFirstWithThisT.push(withThisTemper[j]);
                } else {
                    restWithThisTemper.push(withThisTemper[j]);
                }
            }
            return {
                ...state,
                dogsRender: arrayFirstWithThisT,
                allDogs: withThisTemper
            }

        case "oderByOrigin":
            let allDogs = state.allDogsReserve;
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
                if (allDogs.length > 0) {
                    let arrayFirstByOrigin = []
                    for (let i = 0; i < 8; i++) {
                        if (allDogs[i]) {
                            arrayFirstByOrigin.push(allDogs[i]);
                        }
                    }
                    return {
                        ...state,
                        dogsRender: arrayFirstByOrigin,
                        allDogs: allDogs
                    }
                } else {
                    return {
                        ...state,
                        dogsRender: [{ name: "No results found", image: "https://media2.giphy.com/media/v1.Y2lkPTc5MGI3NjExZGJhODlhZGQwOTdmNzY5MWEzMGM4YzRhMTk2YjFjNDBkM2RhZmM3ZCZjdD1n/xT0xeuOy2Fcl9vDGiA/giphy.gif", id: 0 }]
                    }
                }
            }


        case "orderByName":
            const instance = state.allDogs;
            let allDogsOrderByName = instance;
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
            let firstByNameRender = [];
            for (let i = 0; i < 8; i++) {
                if (allDogsOrderByName[i]) {
                    firstByNameRender.push(allDogsOrderByName[i]);
                }
            }
            return {
                ...state,
                dogsRender: firstByNameRender,
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
            let firstByWeightRender = [];
            for (let i = 0; i < 8; i++) {
                if (allDogsOrderByWeight[i]) {
                    firstByWeightRender.push(allDogsOrderByWeight[i]);
                }
            }
            return {
                ...state,
                dogsRender: firstByWeightRender,
                allDogs: allDogsOrderByWeight
            }

        case "searchByName":
            if (action.payload) {
                let firstRenderSearchByName = [];
                for (let i = 0; i < 8; i++) {
                    if (action.payload[i]) {
                        firstRenderSearchByName.push(action.payload[i]);
                    }
                }
                return {
                    ...state,
                    dogsRender: firstRenderSearchByName,
                    allDogs: action.payload
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

        case "resetAll":
            const instanceDR = state.allDogsReserve;
            instanceDR.sort((a, b) => {
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
            const [zeroR, oneR, twoR, threeR, fourR, fiveR, sixR, sevenR] = instanceDR;
            return {
                ...state,
                dogsRender: [zeroR, oneR, twoR, threeR, fourR, fiveR, sixR, sevenR],
                allDogs: instanceDR
            }


        default:
            return state;
    }
}