import { useContext } from 'react'

// styles
import styles from "./ShowProducts.module.css"

// context
import { UserDocsContext } from '../../contexts/UserDocsContext'


const ShowProducts = () => {
  const { documents } = useContext(UserDocsContext)

  return (
    <section className={styles.show_products}>
        {documents?.docs && documents.docs.map(doc => (
          <div key={doc.id} className={styles.product}>
            <p>{doc.data().title}</p>
            <button className={styles.delete_btn}>Delete</button>
          </div>
        ))}
    </section>
  )
}

export default ShowProducts