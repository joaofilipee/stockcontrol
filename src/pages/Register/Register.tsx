import React from "react";

// CSS
import styles from "./Register.module.css";

// Link
import { Link } from "react-router-dom";

// icons
import { MdOutlineMail } from "react-icons/md";
import { BiLock } from "react-icons/bi"

function Register() {
  return (
    <section id={styles.register}>

      <section className={styles.register}>
        <header>
          <h2>Create an account here</h2>
          <p>Create an account and manage your business stocks.</p>
        </header>

        <form>
          <input type="text" placeholder="Username" />

          <div>
            <MdOutlineMail className={styles.icon}/>
            <input type="text" placeholder="E-mail" />
          </div>
          <div>
            <BiLock className={styles.icon}/>
            <input type="password" placeholder="Password" />
          </div>
          <div>
            <BiLock className={styles.icon}/>
            <input type="password" placeholder="Confirm Password" />
          </div>

          <button>Sign Up</button>
        </form>

        <h4>Don't have an account? <Link to="/login">Create an account</Link></h4>
      </section>

      

    </section>
  );
}

export default Register;
