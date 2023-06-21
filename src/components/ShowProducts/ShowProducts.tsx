import { useContext } from 'react'

// styles
import styles from "./ShowProducts.module.css"

// context
import { UserDocsContext } from '../../contexts/UserDocsContext'

// components
import DeleteButton from '../DeleteButton/DeleteButton'

const ShowProducts = () => {
  const { documents } = useContext(UserDocsContext)

  return (
    <section className={styles.show_products}>
        <div>
          <header className={styles.products_header}>TITLE</header>
          {documents?.docs && documents.docs.map(doc => (

            <div key={doc.id} className={styles.product}>
              <p>{doc.data().title}</p>

              <DeleteButton docId={doc.id}/>
            </div>
          ))}
        </div>
    </section>
  )
}

export default ShowProducts