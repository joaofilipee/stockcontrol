import React from 'react'

import styles from "./Navbar.module.css"

// router
import { NavLink } from 'react-router-dom'

const Navbar = () => {
  return (

    <nav className={styles.navbar}>
        
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