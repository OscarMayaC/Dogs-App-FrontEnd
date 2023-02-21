export default function validate(inputs) {

    const errors = {};

    if (!inputs.name) {
        errors.name = "Enter a name"
    }
    if (!inputs.minHeight) {
        errors.minHeight = "Enter a min height"
    }
    if (!inputs.maxHeight) {
        errors.maxHeight = "Enter a max height"
    }
    if (!inputs.minWeight) {
        errors.minWeight = "Enter a min weight"
    }
    if (!inputs.maxWeight) {
        errors.maxWeight = "Enter a max weight"
    }
    if (!inputs.minLife_span) {
        errors.minLife_span = "Enter a min life_span"
    }
    if (!inputs.maxLife_span) {
        errors.maxLife_span = "Enter a max life_span"
    }
    if (!inputs.Dog_TemperamentOne) {
        errors.Dog_Temperament = "Enter a Temperament"
    }
    if (!inputs.Dog_TemperamentTwo) {
        errors.Dog_TemperamentTwo = "Enter a Temperament"
    }
    let regOnlyNumbers = /^-?\d*\.?\d*$/
    if (!regOnlyNumbers.test(inputs.minHeight)) {
        errors.minHeight = "Only numbers"
    }
    if (!regOnlyNumbers.test(inputs.maxHeight)) {
        errors.minHeight = "Only numbers"
    }
    if (!regOnlyNumbers.test(inputs.minWeight)) {
        errors.minHeight = "Only numbers"
    }
    if (!regOnlyNumbers.test(inputs.maxWeight)) {
        errors.minHeight = "Only numbers"
    }
    if (!regOnlyNumbers.test(inputs.minLife_span)) {
        errors.minHeight = "Only numbers"
    }
    if (!regOnlyNumbers.test(inputs.maxLife_span)) {
        errors.minHeight = "Only numbers"
    }
    if (inputs.minHeight > inputs.maxHeight) {
        errors.maxHeight = "Must be bigger"
    }
    if (inputs.maxWeight < inputs.minWeight) {
        errors.maxHeight = "Must be bigger"
    }
    if (inputs.maxLife_span < inputs.minLife_span) {
        errors.maxHeight = "Must be bigger"
    }
    if (!/^[a-zA-Z]+$/.test(inputs.name)) {
        errors.name = "Only letters"
    }
    if (!/^[a-zA-Z]+$/.test(inputs.Dog_TemperamentOne)) {
        errors.Dog_TemperamentOne = "Only letters"
    }
    if (!/^[a-zA-Z]+$/.test(inputs.Dog_TemperamentTwo)) {
        errors.Dog_TemperamentTwo = "Only letters"
    }
    return errors;
}