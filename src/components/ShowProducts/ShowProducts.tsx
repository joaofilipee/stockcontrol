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
            <div>TITLE</div>
            <div>AMOUNT</div>
          </header>
          
          {documents?.docs && documents.docs.map(doc => (

            <div key={doc.id} className={styles.product}>
              <p>{doc.data().title}</p>

              {deleteOption ? <DeleteButton docId={doc.id}/> : doc.data().qty}
            </div>
          ))}
        </div>
    </section>
  )
}

export default ShowProducts