import React from 'react'
import validate from './Validate.js'
import styles from "./CreateDog.module.css";
import { createNewDog } from '../../redux/actions.js';
import { useDispatch } from 'react-redux';

export default function CreateDog(props) {

  const dispatch = useDispatch();

  const [dogData, setDogData] = React.useState({
    image: "https://cdn.dribbble.com/users/1201194/screenshots/7197395/media/d5d300c76b56aa290f34cfc39de99c2d.gif",
    name: "",
    minHeight: "",
    maxHeight: "",
    minWeight: "",
    maxWeight: "",
    minLife_span: "",
    maxLife_span: "",
    Dog_TemperamentOne: "",
    Dog_TemperamentTwo: "",
  })

  const [errors, setErrors] = React.useState({
    name: "",
    minHeight: "",
    maxHeight: "",
    minWeight: "",
    maxWeight: "",
    minLife_span: "",
    maxLife_span: "",
    Dog_TemperamentOne: "",
    Dog_TemperamentTwo: "",
  })

  function handleInputChange(event) {
    setDogData({
      ...dogData,
      [event.target.name]: event.target.value
    })
    setErrors(validate({
      ...dogData,
      [event.target.name]: event.target.value
    }))
  }

  function handleSubmit(e) {
    e.preventDefault()
    if (!errors.name &&
      !errors.minHeight &&
      !errors.maxHeight &&
      !errors.minWeight &&
      !errors.maxWeight &&
      !errors.minLife_span &&
      !errors.maxLife_span &&
      !errors.Dog_TemperamentOne &&
      !errors.Dog_TemperamentTwo &&
      dogData.name) {
      let newDog = {
        image: dogData.image,
        name: dogData.name,
        height: dogData.minHeight + " " + "-" + " " + dogData.maxHeight,
        weight: dogData.minWeight + " " + "-" + " " + dogData.maxWeight,
        life_span: dogData.minLife_span + " " + "-" + " " + dogData.maxLife_span + " " + "years",
        Dog_Temperament: [dogData.Dog_TemperamentOne, dogData.Dog_TemperamentTwo]
      }
      dispatch(createNewDog(newDog));
      console.log(newDog)
      return window.alert("Your new dog has been created")
    } else {
      console.log(errors)
      console.log(dogData.Dog_TemperamentTwo)
      window.alert("Please complete all")
    }
  }

  let { temperaments } = props;


  return (
    <div className={styles.allScreen}>
      <div className={styles.feedbacform}>
        <form onSubmit={((e) => {
          handleSubmit(e)
        })} className={styles.form} >
          <div>
            <label className={styles.label} htmlFor="">
              Name
            </label>
            <input className={styles.input} onChange={(event) => handleInputChange(event)} name="name" placeholder='Enter a name' type="text" />
            <p>{errors.name}</p>

            <label className={styles.label} htmlFor="">
              Min Height
            </label>
            <input className={styles.input} onChange={(event) => handleInputChange(event)} name="minHeight" placeholder='Enter a height' type="text" />
            <p>{errors.minHeight}</p>

            <label className={styles.label} htmlFor="">
              Max Height
            </label>
            <input className={styles.input} onChange={(event) => handleInputChange(event)} name="maxHeight" placeholder='Enter a height' type="text" />
            <p>{errors.maxHeight}</p>

            <label className={styles.label} htmlFor="">
              Min Weight
            </label>
            <input className={styles.input} onChange={(event) => handleInputChange(event)} name="minWeight" placeholder='Enter a weight' type="text" />
            <p>{errors.minWeight}</p>

            <label className={styles.label} htmlFor="">
              Max Weight
            </label>
            <input className={styles.input} onChange={(event) => handleInputChange(event)} name="maxWeight" placeholder='Enter a weight' type="text" />
            <p>{errors.maxWeight}</p>

            <label className={styles.label} htmlFor="">
              Min Life Span
            </label>
            <input className={styles.input} onChange={(event) => handleInputChange(event)} name="minLife_span" placeholder='Enter a life span' type="text" />
            <p>{errors.minLife_span}</p>

            <label className={styles.label} htmlFor="">
              Max Life Span
            </label>
            <input className={styles.input} onChange={(event) => handleInputChange(event)} name="maxLife_span" placeholder='Enter a life span' type="text" />
            <p>{errors.maxLife_span}</p>

            <label className={styles.label} htmlFor="">
              Select the first temperament
            </label>
            <select name='Dog_TemperamentOne' defaultValue={"Default"} onChange={(event) => handleInputChange(event)} >
              <option value="Default" disabled>Select Temperament</option>
              {
                temperaments?.map((temp) => {
                  return (<option value={temp.name} key={temp.id}>{temp.name}</option>)
                })
              }
            </select>

            <div></div>

            <label className={styles.label} htmlFor="">
              Select the second temperament
            </label>
            <select name='Dog_TemperamentTwo' defaultValue={"Default"} onChange={(event) => handleInputChange(event)} >
              <option value="Default" disabled>Select Temperament</option>
              {
                temperaments?.map((temp) => {
                  return (<option value={temp.name} key={temp.id}>{temp.name}</option>)
                })
              }
            </select>

            <button className={styles.button} type='submit'>
              Create
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}
