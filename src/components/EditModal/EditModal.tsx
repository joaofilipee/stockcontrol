import React, { ChangeEvent, FormEvent, useContext, useState } from 'react'

import styles from "./EditModal.module.css"

import { db } from "../../firebase/firebase"
import { doc, updateDoc, getDoc } from "firebase/firestore"

import { ChangeProductContext } from '../../contexts/ChangeProductContext'
import { UserContext } from '../../contexts/UserContext'
import { ProductsContext } from '../../contexts/ProductsContext'

interface IEditModal {
  fadeOpen: boolean
  setFadeOpen: React.Dispatch<React.SetStateAction<boolean>>
}

const EditModal = ({fadeOpen, setFadeOpen}: IEditModal) => {
  const { productToChange } = useContext(ChangeProductContext)
  const { user } = useContext(UserContext)
  const { setProduct } = useContext(ProductsContext)

  document.documentElement.style.overflow = fadeOpen ? "hidden" : "auto"

  const [newTitle, setNewTitle] = useState<string>("")

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setNewTitle(e.target.value)
  }

  const closeFade = () => {
    setFadeOpen(false)
  }

  const handleSubmit = async(e: FormEvent) => {
    e.preventDefault()

    if(!fadeOpen) {
      return
    }

    if(newTitle.length < 2) {
      return alert("The new title must have at least 3 characters")
    }

    try {
      const documentRef = doc(db, user!.uid, productToChange!.docId)
      const docSnap = await getDoc(documentRef)

      await updateDoc(documentRef, {
        title: newTitle
      })

      setProduct([{title: docSnap.data()!.title, qty: docSnap.data()!.qty}])
      setFadeOpen(false)

    } catch (error) {
      return alert("An error ocurred!")
    }
  }

  return (
    <div className={`${fadeOpen ? styles.modalOpen : styles.modalClose}`}>
      <div className={styles.form}>
        <div className={styles.modal_description}>
          <h1>Edit your product</h1>
          <p>Here you can edit the product's title.</p>
        </div>

        <form onSubmit={handleSubmit}>
          <input type="text" placeholder={productToChange?.title} onChange={handleChange}/>

          <div className={styles.buttons}>
            <button className={styles.back_button} onClick={closeFade}>Back</button>
            <button className={styles.save_button}>Save</button>
          </div>
        </form>
      </div>

      <div className={fadeOpen ? `${styles.fadeOpen}` : `${styles.fadeClose}`} onClick={closeFade}></div>
    </div>
  )
}

export default EditModal