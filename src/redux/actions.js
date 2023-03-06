

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

// export async function allTemperaments(temperamentsArray) {

//     return {
//         type: "allTemperaments",
//         payload: temperamentsArray
//     }
// }

export function filterByTemperaments(temperament) {
    return {
        type: "filterByTemperaments",
        payload: temperament
    }
}

export function oderByOrigin(origin) {
    return {
        type: "oderByOrigin",
        payload: origin
    }
}

export function orderByName(order) {
    return {
        type: "orderByName",
        payload: order
    }
}

export function oderByWeight(order) {
    return {
        type: "oderByWeight",
        payload: order
    }
}

export function searchByName(nameofdog) {
    return (dispatch) => {
        dispatch({ type: 'searchByName' });

        // fetch(`http://localhost:3001/dogs/name/?beed=${nameofdog}`)
        fetch(`https://dogs-app-backend-production.up.railway.app/dogs/name/?beed=${nameofdog}`)
            .then((response) => response.json())
            .then((dogsSearch) => {
                if (dogsSearch.length > 0) {
                    dispatch({ type: 'searchByName', payload: dogsSearch });
                }
            })
            .catch((error) => {
                dispatch({ type: 'searchByName', payload: error.message });
            });
    };
}

export function createNewDog(newDog) {
    // fetch('http://localhost:3001/dogs'
    fetch('https://dogs-app-backend-production.up.railway.app/dogs', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(newDog)
    })
        .then(response => response.json())
        .then(data => console.log(data))
        .catch(error => console.error(error));
    return {
        type: "createNewDog"
    }
}

export function resetAll() {
    return {
        type: "resetAll"
    }
}