import React from "react";

// CSS
import styles from "./Register.module.css";

// Link
import { Link } from "react-router-dom";

function Register() {
  return (
    <section id={styles.register}>
      <div className={styles.form_section}>
        <h1>Sign Up</h1>

        <form className={styles.form}>
          <label>
            <span>Username</span>
            <input type="text" />
          </label>

          <label>
            <span>E-mail</span>
            <input type="text" />
          </label>

          <label>
            <span>Password</span>
            <input type="password" />
          </label>

          <label>
            <span>Confirm password</span>
            <input type="password" />
          </label>

          <button className={styles.submit}>Sign up</button>
        </form>

        <h5 className={styles.link}>Already have an account? <Link to="/login">Click here</Link></h5>
      </div>
    </section>
  );
}

export default Register;
