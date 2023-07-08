import { ChangeEvent, FormEvent, useContext, useRef, useState } from 'react'

import styles from "./ManageProducts.module.css"

import Header from '../../components/Header/Header'
import Navbar from '../../components/Navbar/Navbar'
import Error from '../../components/Error/Error'

import { UserContext } from '../../contexts/UserContext'
import { UserDocsContext } from '../../contexts/UserDocsContext'
import { ProductsContext } from '../../contexts/ProductsContext'

import { doc, updateDoc, getDoc } from "firebase/firestore"
import { db } from '../../firebase/firebase'


const ManageProducts = () => {
    const { user } = useContext(UserContext)
    const { documents } = useContext(UserDocsContext)
    const { setProduct } = useContext(ProductsContext)

    const [amount, setAmount] = useState<string>("")
    const [errorMessage, setErrorMessage] = useState<string>("")

    const amountRef = useRef<HTMLInputElement>(null)
    const errorRef = useRef<HTMLDivElement>(null)
    const radioRef = useRef<HTMLInputElement>(null)
    const selectRef = useRef<HTMLSelectElement>(null)
    const saveButtonRef = useRef<HTMLButtonElement>(null)

    const showErrorMessage = (message: string) => {
        setErrorMessage(message)
        errorRef.current!.style.display = "flex"

        setTimeout(() => {
            errorRef.current!.style.display = "none"
            setErrorMessage("")
        }, 2000)
    }

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        setAmount(e.target.value)
    }


    const handleSubmit = async(e: FormEvent) => {
        e.preventDefault()
        saveButtonRef.current!.innerHTML = "Loading..."
        saveButtonRef.current!.disabled = true

        if(Number(amount) <= 0) {
            return showErrorMessage("The amount must be greater than 0.")
        }

        if(radioRef.current!.checked) {
            const documentRef = doc(db, user!.uid, selectRef.current!.value)
            const docSnap = await getDoc(documentRef)

            await updateDoc(documentRef, {
                qty: docSnap.data()!.qty + Number(amount)
            })

            setProduct([{title: docSnap.data()!.title, qty: docSnap.data()!.qty}])
            
        } else {
            const documentRef = doc(db, user!.uid, selectRef.current!.value)
            const docSnap = await getDoc(documentRef)

            await updateDoc(documentRef, {
                qty: docSnap.data()!.qty - Number(amount)
            })

            setProduct([{title: docSnap.data()!.title, qty: docSnap.data()!.qty}])
        }

        saveButtonRef.current!.innerHTML = "Save"
        saveButtonRef.current!.disabled = false
    }

  return (
    <section>
        <Header user={user}/>

        <section className="main_content">
            <Navbar />

            <div>
                <Error message={errorMessage} errorRef={errorRef}/>

                <form onSubmit={handleSubmit} className={styles.update_form}>

                    <div className={styles.inputs}>

                        <select ref={selectRef}>
                            {documents?.docs && documents.docs.map(doc => (
                                <option key={doc.id} value={doc.id}>{doc.data().title}</option>
                            ))}
                        </select>

                        <input type="number" placeholder='Amount' className={styles.amount} onChange={handleChange} ref={amountRef}/>
                        
                    </div>

                    <div className={styles.types}>
                        <div className={styles.update_type}>
                            <label>
                                <input type="radio" name="updateType" value="income" defaultChecked ref={radioRef}/>
                                Income
                            </label>
                            
                            <label>
                                <input type="radio" name="updateType" value="expense" />
                                Expense
                            </label>
                        </div>

                        <button className={styles.save} ref={saveButtonRef}>Save</button>
                    </div>
                </form>

            </div>
        </section>

    </section>
  )
}

export default ManageProducts