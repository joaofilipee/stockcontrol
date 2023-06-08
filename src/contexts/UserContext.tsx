import { ReactNode, createContext, useState } from "react";

// firebase types
import { User } from "firebase/auth";

interface UserContextProviderProps {
    children: ReactNode
}

interface IUserContext {
    user: User | null
    setUser: React.Dispatch<React.SetStateAction<User | null>>
}

export const UserContext = createContext<IUserContext>({
    user: null,
    setUser: () => {}
})

export const UserContextProvider = ({children}: UserContextProviderProps) => {
    const [user, setUser] = useState<User | null>(null)

    return(
        <UserContext.Provider value={{user, setUser}}>
            {children}
        </UserContext.Provider>
    )
}