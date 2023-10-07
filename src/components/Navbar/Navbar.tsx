import styles from "./Navbar.module.css"

import { useContext } from "react"

import { NavLink } from 'react-router-dom'

import { AiOutlineClose } from "react-icons/ai"

import { NavbarRefContext } from "../../contexts/NavbarRefContext"

const Navbar = () => {
  const { navbarRef } = useContext(NavbarRefContext)

  const handleCloseMenu = () => {
    navbarRef!.current.style.width = "0%"
    document.documentElement.style.overflow = "auto";
    document.body.style.overflow = "auto";
  }
  
  return (

    <nav className={styles.navbar} ref={navbarRef}>
      <AiOutlineClose className={styles.close_menu} onClick={handleCloseMenu}/>
        
      <div className={styles.blur}></div>

      <section className={`${styles.route_section} ${styles.register_route}`}>
        <label>
          <span>Products Registration</span>

          <div>
            <NavLink to="/" className={styles.route} onClick={handleCloseMenu}>Register</NavLink>
          </div>
        </label>

      </section>

      <section className={styles.route_section}>
        <label>
          <span>Stocks</span>

          <div>
            <NavLink to="/balance" className={styles.route} onClick={handleCloseMenu}>Balance</NavLink>
          </div>

          <div>
            <NavLink to="/manageproducts" className={styles.route} onClick={handleCloseMenu}>Manage Products</NavLink>
          </div>
          
        </label>

      </section>

    </nav>
  )
}

export default Navbar