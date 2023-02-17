import React from 'react'
import styles from "./SearchBar.module.css";

export default function (props) {

    const [id, setId] = React.useState("")
    const handleChange = e => {
       setId(e.target.value)
    }

    return (
        <div>
            <div>
                <input placeholder="Enter the name of a dog breed" type="search" className={styles.searchTerm} id="" onChange={handleChange} />
                <button className={styles.searchButton} onClick={() => props.onSearch(id)}>ADD
                    <i className={styles.fafa}></i>
                </button>
            </div>
        </div>
    )
}
