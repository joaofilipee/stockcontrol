import { useContext } from 'react'

// styles
import styles from "./ShowProducts.module.css"

// context
import { UserDocsContext } from '../../contexts/UserDocsContext'

// components
import DeleteButton from '../DeleteButton/DeleteButton'

interface IShowProducts {
  deleteOption: boolean
}


const ShowProducts = ({deleteOption}: IShowProducts) => {
  const { documents } = useContext(UserDocsContext)

  return (
    <section className={styles.show_products}>
        <div>
          <header className={styles.products_header}>
            <p>TITLE</p>
            {!deleteOption && <p>AMOUNT</p>}
          </header>
          
          {documents?.docs && documents.docs.map(doc => (

            <div key={doc.id} className={styles.product}>
              <p>{doc.data().title}</p>

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
          ))}
        </div>
    </section>
  )
}

export default ShowProducts