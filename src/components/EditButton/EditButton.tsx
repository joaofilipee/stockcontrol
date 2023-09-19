import { BsFillPencilFill } from "react-icons/bs"

import styles from "./EditButton.module.css"

interface IEditButton {
  docId: string
  fadeOpen: boolean
  setFadeOpen: React.Dispatch<React.SetStateAction<boolean>>
}


const EditButton = ({docId, setFadeOpen, fadeOpen}: IEditButton) => {
  const openOrCloseFade = () => {
    setFadeOpen(fadeOpen ? false : true)
  }

  return (
    <button className={styles.button} onClick={openOrCloseFade}>
        <BsFillPencilFill className={styles.icon}/>
    </button>
  )
}

export default EditButton