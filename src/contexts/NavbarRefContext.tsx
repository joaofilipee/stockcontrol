import { createContext, useRef } from "react"

interface INavbarContext {
    navbarRef: React.RefObject<any> | null
}

export const NavbarRefContext = createContext<INavbarContext>({
    navbarRef: null
})

interface INavbarProvider {
    children: React.ReactNode
}

const NavbarRefProvider = ({children}: INavbarProvider) => {
    const navbarRef = useRef(null)

    return (
        <NavbarRefContext.Provider value={{navbarRef}}>
            {children}
        </NavbarRefContext.Provider>
    )
}

export default NavbarRefProvider;