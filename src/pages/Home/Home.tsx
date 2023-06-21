import { useContext } from 'react'

// styles
import styles from "./Home.module.css"

// context
import { UserContext } from '../../contexts/UserContext'
import Header from '../../components/Header/Header'
import Navbar from '../../components/Navbar/Navbar'

const Home = () => {
    const { user } = useContext(UserContext)

  return (
    <div>
        <Header user={user}/>

        <div className="main_content">
          <Navbar />

          <h1>Home</h1>
        </div>
    </div>
  )
}

export default Home