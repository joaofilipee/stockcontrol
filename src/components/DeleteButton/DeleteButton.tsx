import React, { useContext, useRef } from 'react'

// styles
import styles from "./DeleteButton.module.css"

import { doc, deleteDoc, getDocs, collection } from "firebase/firestore"
import { db } from '../../firebase/firebase'

import { UserContext } from '../../contexts/UserContext'

import { UserDocsContext } from '../../contexts/UserDocsContext'


interface ButtonDeleteProps {
    docId: string
}

const DeleteButton = ({docId}: ButtonDeleteProps) => {
  const deleteBtnRef = useRef<HTMLButtonElement>(null)

    const { user } = useContext(UserContext)
    const { setDocuments } = useContext(UserDocsContext)

    const deleteProduct = async(e: React.MouseEvent) => {
        deleteBtnRef.current!.innerHTML = "Loading..."

        await deleteDoc(doc(db, user!.uid, docId))
        
        setDocuments(await getDocs(collection(db, user!.uid)))
    }

  return (
    <button className={styles.delete_btn} onClick={deleteProduct} ref={deleteBtnRef}>DELETE</button>
  )
}

export default DeleteButton