import styles from "./Navbar.module.css"

import { useContext } from "react"

import { NavLink } from 'react-router-dom'

import { NavbarRefContext } from "../../contexts/NavbarRefContext"

const Navbar = () => {
  const { navbarRef } = useContext(NavbarRefContext)
  
  return (

    <nav className={styles.navbar} ref={navbarRef}>
        
      <section className={styles.route_section}>
        <label>
          <span>Products Registration</span>

          <div>
            <NavLink to="/" className={styles.route}>Register</NavLink>
          </div>
        </label>

      </section>

      <section className={styles.route_section}>
        <label>
          <span>Stocks</span>

          <div>
            <NavLink to="/balance" className={styles.route}>Balance</NavLink>
          </div>

          <div>
            <NavLink to="/manageproducts" className={styles.route}>Manage Products</NavLink>
          </div>
          
        </label>

      </section>

    </nav>
  )
}

export default Navbar