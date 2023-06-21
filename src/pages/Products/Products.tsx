// styles
import styles from "./Products.module.css"

// components
import Header from "../../components/Header/Header"
import Navbar from "../../components/Navbar/Navbar"
import ShowProducts from "../../components/ShowProducts/ShowProducts"


// firebase
import { db } from "../../firebase/firebase"
import { DocumentData, QuerySnapshot, addDoc, collection, getDocs } from "firebase/firestore"

// context & hooks
import { UserContext } from "../../contexts/UserContext"
import { ProductsContext } from "../../contexts/ProductsContext"
import { ChangeEvent, FormEvent, useContext, useRef, useState, useMemo } from "react"
import { UserDocsContext } from "../../contexts/UserDocsContext"

const Products = () => {
    const { user } = useContext(UserContext)
    const { product, setProduct } = useContext(ProductsContext)
    const { documents } = useContext(UserDocsContext)

    const [title, setTitle] = useState<string>("")

    const buttonRef = useRef<HTMLButtonElement>(null)

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        setTitle(e.target.value)
    }

    const handleSubmit = async(e: FormEvent) => {
        e.preventDefault()
        const formButton = buttonRef.current!

        formButton.disabled = true
        formButton.innerHTML = "Loading..."

        if(title.length < 1){
            return alert("at least 1 character to the product name field.")
        }

        const newProduct = { title, qty: 0 }
        setProduct(state => {
            return [...state, newProduct]
        })
        
        await addDoc(collection(db, user!.uid), newProduct)

        formButton.innerHTML = "Register"
        formButton.disabled = false
    }
  return (
    <section>
        <Header user={user}/>

        <div className="main_content">
            <Navbar />

            <div>
                <form onSubmit={handleSubmit} className={styles.register_product_form}>
                    <input type="text" placeholder="Product name" onChange={handleChange}/>
                    <button ref={buttonRef}>Register</button>
                </form>
                
                <ShowProducts />
            </div>
        </div>

    </section>
  )
}

export default Products
