export default function validate(inputs) {

    const errors = {};

    if (!inputs.name) {
        errors.name = "Enter a name"
    }
    if (!inputs.height) {
        errors.height = "Enter a height"
    }
    if (!inputs.weight) {
        errors.weight = "Enter a weight"
    }
    if (!inputs.life_span) {
        errors.life_span = "Enter a life_span"
    }
    if (inputs.Dog_Temperament.length == 0) {
        errors.Dog_Temperament = "Enter Temperaments"
    }

    return errors;
}