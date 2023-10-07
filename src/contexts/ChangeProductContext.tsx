import { DocumentData, DocumentReference } from "firebase/firestore"
import { createContext, useState } from "react"

interface IProduct {
    title: string
    docId: string
}

interface IChangeProduct {
    productToChange: IProduct | null
    setProductToChange: React.Dispatch<React.SetStateAction<IProduct | null>>
}

interface IChangeProductProvider {
    children: React.ReactNode
}


export const ChangeProductContext = createContext<IChangeProduct>({
    productToChange: null,
    setProductToChange: () => {}
})

const ChangeProductContextProvider = ({children}: IChangeProductProvider) => {
    const [productToChange, setProductToChange] = useState<IProduct | null>(null)

    return (
        <ChangeProductContext.Provider value={{productToChange, setProductToChange}}>
            {children}
        </ChangeProductContext.Provider>
    )
}

export default ChangeProductContextProvider