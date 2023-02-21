import React from 'react'
import validate from './Validate.js'
import styles from "./CreateDog.module.css";
import { createNewDog } from '../../redux/actions.js';
import { useDispatch } from 'react-redux';

export default function CreateDog() {

  const dispatch = useDispatch();

  const [dogData, setDogData] = React.useState({
    image: "https://cdn.dribbble.com/users/1201194/screenshots/7197395/media/d5d300c76b56aa290f34cfc39de99c2d.gif",
    name: "",
    height: "",
    weight: "",
    life_span: "",
    Dog_Temperament: []
  })

  const [errors, setErrors] = React.useState({
    name: "",
    height: "",
    weight: "",
    life_span: "",
    Dog_Temperament: ""
  })

  function handleInputChange(event) {
    if (event.target.name == "Dog_Temperament") {
      setDogData({
        ...dogData,
        Dog_Temperament: [event.target.value]
      })
    } else {
      setDogData({
        ...dogData,
        [event.target.name]: event.target.value
      })
    }
    setErrors(validate({
      ...dogData,
      [event.target.name]: event.target.value
    }))
  }

  function handleSubmit(e) {
    e.preventDefault()
    if (!errors.name &&
      !errors.height &&
      !errors.weight &&
      !errors.life_span &&
      !errors.Dog_Temperament &&
      dogData.name) {
      return dispatch(createNewDog(dogData));
    } else {
      window.alert("Please complete all")
    }
  }




  return (
    <div className={styles.div}>
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
            Height
          </label>
          <input className={styles.input} onChange={(event) => handleInputChange(event)} name="height" placeholder='Enter a height' type="text" />
          <p>{errors.height}</p>

          <label className={styles.label} htmlFor="">
            Weight
          </label>
          <input className={styles.input} onChange={(event) => handleInputChange(event)} name="weight" placeholder='Enter a weight' type="text" />
          <p>{errors.weight}</p>

          <label className={styles.label} htmlFor="">
            Life Span
          </label>
          <input className={styles.input} onChange={(event) => handleInputChange(event)} name="life_span" placeholder='Enter a life span' type="text" />
          <p>{errors.life_span}</p>

          <label className={styles.label} htmlFor="">
            Temperaments
          </label>
          <input className={styles.input} onChange={(event) => handleInputChange(event)} name="Dog_Temperament" placeholder='Enter temperaments' type="text" />
          <p>{errors.Dog_Temperament}</p>

          <button className={styles.button} type='submit'>
            Log In
          </button>
        </div>
      </form>
    </div>
  )
}
