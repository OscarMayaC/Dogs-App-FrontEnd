import React from 'react'
import styles from "./SearchBar.module.css";
import { useDispatch } from 'react-redux';
import { searchByName } from '../../redux/actions';

export default function (props) {

    const dispatch = useDispatch();

    const [nameofdog, setNameOfDog] = React.useState("")
    const handleChange = e => {
        setNameOfDog(e.target.value)
    }

    function searchClick(event) {
        if (nameofdog.length > 0) {
            event.preventDefault()
            return dispatch(searchByName(nameofdog));
        }
    }

    return (
        <div>
            <div>
                <input placeholder="Enter the name of a dog breed" type="search" className={styles.searchTerm} nameofdog="" onChange={handleChange} />
                <button className={styles.searchButton} onClick={(event) => searchClick(event)}>ADD
                    <i className={styles.fafa}></i>
                </button>
            </div>
        </div>
    )
}
