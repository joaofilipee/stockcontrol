import React, { createContext, useState } from "react";

interface IProduct {
    title: string
    qty: number
}

interface IProducts {
    product: IProduct[] | null
    setProduct: React.Dispatch<React.SetStateAction<IProduct[]>>
}

interface IProductsProvider {
    children: React.ReactNode
}

export const ProductsContext = createContext<IProducts>({
    product: null,
    setProduct: () => {}
})

const ProductsContextProvider = ({children}: IProductsProvider) => {
    const [product, setProduct] = useState<IProduct[]>([])

    return(
        <ProductsContext.Provider value={{product, setProduct}}>
            {children}
        </ProductsContext.Provider>
    )
}

export default ProductsContextProvider