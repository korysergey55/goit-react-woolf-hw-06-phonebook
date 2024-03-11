import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setFilter } from 'redax/slice/slice'

import styles from './styles.module.css'

const Filter = () => {
  const dispatch = useDispatch()
  const { filter } = useSelector((state) => state.contacts.filter)

  const handleFilter = (evt) => {
    dispatch(setFilter(evt.target.value))
  }

  return (
    <div className={styles.mainContainer} >
      <div className={styles.inputContainer}>
        <label className={styles.labelName} htmlFor="filter">
          Find contact by name
        </label>
        <input
          className={styles.inputName}
          name="filter"
          value={filter}
          type="text"
          id="filter"
          placeholder='Enter name '
          onChange={handleFilter}
        ></input>
      </div>
    </div >
  );
}

export default Filter;