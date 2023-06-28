import { FormEvent, useContext } from 'react'

import styles from "./ManageProducts.module.css"

import Header from '../../components/Header/Header'
import Navbar from '../../components/Navbar/Navbar'

import { UserContext } from '../../contexts/UserContext'
import { UserDocsContext } from '../../contexts/UserDocsContext'


const ManageProducts = () => {
    const { user } = useContext(UserContext)
    const { documents } = useContext(UserDocsContext)


    const handleSubmit = (e: FormEvent) => {
        e.preventDefault()


    }
  return (
    <section>
        <Header user={user}/>

        <section className="main_content">
            <Navbar />

            <div>
                <form onSubmit={handleSubmit} className={styles.update_form}>

                    <div>
                        <select>
                            {documents?.docs && documents.docs.map(doc => (
                                <option key={doc.id} value={doc.id}>{doc.data().title}</option>
                            ))}

                        </select>
                        
                    </div>

                    <input type="text" placeholder='Amount' className={styles.amount}/>

                    <div className={styles.update_type}>
                        <label>
                            <input type="radio" name="updateType" value="income" />
                            Income
                        </label>
                        
                        <label>
                            <input type="radio" name="updateType" value="expense" />
                            Expense
                        </label>
                    </div>

                    <button className={styles.save}>Save</button>
                </form>

                
            </div>
        </section>

    </section>
  )
}

export default ManageProducts