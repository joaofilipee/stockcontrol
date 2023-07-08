import { ReactNode, createContext, useState } from "react";

// firebase types
import { User } from "firebase/auth";

interface UserContextProviderProps {
    children: ReactNode
}

interface IUserContext {
    user: User | null
    displayName: string
    setDisplayName: React.Dispatch<React.SetStateAction<string>>
    setUser: React.Dispatch<React.SetStateAction<User | null>>
}

export const UserContext = createContext<IUserContext>({
    user: null,
    displayName: "",
    setDisplayName: () => {},
    setUser: () => {}
})

export const UserContextProvider = ({children}: UserContextProviderProps) => {
    const [user, setUser] = useState<User | null>(null)
    const [displayName, setDisplayName] = useState<string>("")

    return(
        <UserContext.Provider value={{user, setUser, displayName, setDisplayName}}>
            {children}
        </UserContext.Provider>
    )
}