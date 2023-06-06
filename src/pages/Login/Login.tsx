import React from "react";

// CSS
import styles from "./Login.module.css";

// Link
import { Link } from "react-router-dom";

// icons
import { MdOutlineMail } from "react-icons/md";
import { BiLock } from "react-icons/bi"

function Register() {
  return (
    <section id={styles.login}>

      <section className={styles.login}>
        <header>
          <h2>Sign in to your account here</h2>
          <p>Sign in to start managing your stocks.</p>
        </header>

        <form>
          <div>
            <MdOutlineMail className={styles.icon}/>
            <input type="text" placeholder="E-mail" />
          </div>
          <div>
            <BiLock className={styles.icon}/>
            <input type="password" placeholder="Password" />
          </div>

          <button>Sign In</button>
        </form>

        <h4>Already have an account? <Link to="/register">Sign In</Link></h4>
      </section>

      

    </section>
  );
}

export default Register;
