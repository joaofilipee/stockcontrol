import { BsFillPencilFill } from "react-icons/bs"

import { useContext } from "react"

import styles from "./EditButton.module.css"

import { db } from "../../firebase/firebase"
import { doc, getDoc } from "firebase/firestore"

import { ChangeProductContext } from "../../contexts/ChangeProductContext"
import { UserContext } from "../../contexts/UserContext"

interface IEditButton {
  docId: string
  fadeOpen: boolean
  setFadeOpen: React.Dispatch<React.SetStateAction<boolean>>
}


const EditButton = ({setFadeOpen, fadeOpen, docId}: IEditButton) => {
  const { setProductToChange } = useContext(ChangeProductContext)
  const { user } = useContext(UserContext)

  const openOrCloseFadeAndSetProductToChange = async() => {
    const documentRef = doc(db, user!.uid, docId)
    const docSnap = await getDoc(documentRef)
    
    setProductToChange({docId, title: docSnap.data()!.title})
    setFadeOpen(fadeOpen ? false : true)

    window.scrollTo({top: 0})
  }

  return (
    <button className={styles.button} onClick={openOrCloseFadeAndSetProductToChange}>
        <BsFillPencilFill className={styles.icon}/>
    </button>
  )
}

export default EditButton