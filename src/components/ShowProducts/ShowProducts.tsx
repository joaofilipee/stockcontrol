import { useContext, useState } from 'react'

// styles
import styles from "./ShowProducts.module.css"

// context
import { UserDocsContext } from '../../contexts/UserDocsContext'

// components
import DeleteButton from '../DeleteButton/DeleteButton'
import EditButton from '../EditButton/EditButton'
import EditModal from '../EditModal/EditModal'

interface IShowProducts {
  deleteOption: boolean
  editOption: boolean
}


const ShowProducts = ({deleteOption, editOption}: IShowProducts) => {
  const { documents } = useContext(UserDocsContext)
  const [fadeOpen, setFadeOpen] = useState<boolean>(false)

  const closeFade = () => {
    setFadeOpen(false)
  }

  return (
    <section className={styles.show_products}>
        <div>
          <header className={styles.products_header}>
            <p>TITLE</p>
            {!deleteOption && <p>AMOUNT</p>}
          </header>
          
          {documents?.docs && documents.docs.map(doc => (

            <div key={doc.id} className={styles.product}>
              <p className={styles.title}>{doc.data().title}</p>

              <div className={styles.buttons}>
                {editOption && <EditButton docId={doc.id} setFadeOpen={setFadeOpen} fadeOpen={fadeOpen}/>}

                {deleteOption ? <DeleteButton docId={doc.id}/> : (
                  <p className={styles.amount}>
                    {doc.data().qty > 999 ? "999+" : 
                    ( 
                      doc.data().qty < -999 ? "-999" : 
                      doc.data().qty
                  )}
                  </p>
                )}
              </div>
            </div>
          ))}
        </div>

        <EditModal />

        <div className={fadeOpen ? `${styles.fadeOpen}` : `${styles.fadeClose}`} onClick={closeFade}></div>
    </section>
  )
}

export default ShowProducts