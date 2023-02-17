const axios = require("axios");


const nextDogs = async () => {
    try {

        let result = await axios(`http://localhost:3001/dogs`)
        let breeds = result.data
        let verificationDogs = [];
        let auxiliarA = 0;
        let auxiliarB = 7;
        if (breeds.length > 0) {
            for (let i = auxiliarA; i < auxiliarB; i++) {
                verificationDogs.push(breeds[i]);
            }
            auxiliarA++;
            auxiliarB++;
            return verificationDogs;

        } else {
            window.alert("No existen dogs")
        }
    } catch (error) {
        console.log(error.message);
        window.alert("ocurrio un error")
    }

}


module.exports = nextDogs;