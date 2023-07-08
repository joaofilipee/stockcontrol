import styles from "./Header.module.css"

import { User, signOut } from 'firebase/auth'
import { auth } from "../../firebase/firebase"

import { useRef, useContext } from "react"

import { BsFillBoxSeamFill } from "react-icons/bs"
import { BiLogOutCircle } from "react-icons/bi"

import { UserContext } from "../../contexts/UserContext"

interface NavbarProps {
    user: User | null
}

const Header = ({ user } : NavbarProps) => {
    const { displayName } = useContext(UserContext)

    const signOutRef = useRef<HTMLDivElement>(null)

    const handleShowSignOutButton = (e: React.MouseEvent) => {
        const displayValue = signOutRef.current!.style.opacity
        signOutRef.current!.style.opacity = displayValue !== "1" ? "1" : "0"
    }

    const handleLogOut = (e: React.MouseEvent) => {
        if(signOutRef.current!.style.opacity === "1"){
            signOut(auth)
        }
    }

  return (
    <header className={styles.header}>
        <BsFillBoxSeamFill className={styles.icon}/>

        <aside className={styles.userBar}>
            <button onClick={handleShowSignOutButton} className={styles.username}>{displayName ? displayName : user?.displayName}</button>

            <div className={styles.options} ref={signOutRef} onClick={handleLogOut}>
                <BiLogOutCircle className={styles.logout_svg}/>
                <p>Sign out</p>
            </div>
        </aside>
    </header>
  )
}

export default Header