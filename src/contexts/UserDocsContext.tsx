// hooks
import { createContext, useState, ReactNode, useContext, useEffect } from "react"

// firebase
import { QuerySnapshot, DocumentData, getDocs, collection } from "firebase/firestore"
import { db } from "../firebase/firebase"

// contexts
import { UserContext } from "./UserContext"
import { ProductsContext } from "./ProductsContext"

interface IUserDocs {
    documents: QuerySnapshot<DocumentData> | null
}

interface IUserDocsProvider {
    children: ReactNode
}

export const UserDocsContext = createContext<IUserDocs>({
    documents: null
})

const UserDocsContextProvider = ({children}: IUserDocsProvider) => {
    const [documents, setDocuments] = useState<QuerySnapshot<DocumentData> | null>(null)

    const { user } = useContext(UserContext)
    const { product } = useContext(ProductsContext)

    useEffect(() => {
        if(user) {
            getDocs(collection(db, user!.uid)).then( docs => {
                setDocuments(docs)
            })
            .catch(err => {
                alert(err.message)
            })
        }
    }, [user, product])

    return(
        <UserDocsContext.Provider value={{documents}}>
            {children}
        </UserDocsContext.Provider>
    )
}

export default UserDocsContextProvider