import React from 'react'


import styles from "./EditModal.module.css"

const EditModal = () => {
  return (
    <div className={styles.modal}>
      <h1>Edit your product's name</h1>

      <form>
        <input type="text" />

        <button>Save</button>
      </form>
    </div>
  )
}

export default EditModal