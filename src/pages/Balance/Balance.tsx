import { useContext } from 'react'

import styles from "./Balance.module.css"

import Header from '../../components/Header/Header'
import Navbar from '../../components/Navbar/Navbar'
import ShowProducts from '../../components/ShowProducts/ShowProducts'

import { UserContext } from '../../contexts/UserContext'

const Balance = () => {
    const { user } = useContext(UserContext)

  return (
    <section>
        <Header user={user}/>

        <div className="main_content">
            <Navbar />

            <div className={styles.balance}>
                <h2>Here you can see your products</h2>
                <ShowProducts deleteOption={false} editOption={false}/>
            </div>
        </div>

    </section>
  )
}

export default Balance