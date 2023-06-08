import { useContext } from 'react'
// firebase
import { signOut } from 'firebase/auth'
import { auth } from '../../firebase/firebase'

// context
import { UserContext } from '../../contexts/UserContext'

const Home = () => {
    const { setUser } = useContext(UserContext)

    const handleLogout = () => {
        signOut(auth).then(() => {
            setUser(null)
        })
    }

  return (
    <div>
        <h1>Home</h1>
        <button onClick={handleLogout}>Log out</button>
    </div>
  )
}

export default Home