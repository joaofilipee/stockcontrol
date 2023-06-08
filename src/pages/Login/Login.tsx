import { ChangeEvent, FormEvent, useState } from "react";

// CSS
import styles from "./Login.module.css";

// Link
import { Link } from "react-router-dom";

// icons
import { MdOutlineMail } from "react-icons/md";
import { BiLock } from "react-icons/bi"

// firebase
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../firebase/firebase";

function Register() {
  const [email, setEmail] = useState<string>("")
  const [password, setPassword] = useState<string>("")

  const handleSubmit = (e: FormEvent) => {
      e.preventDefault()

      signInWithEmailAndPassword(auth, email, password)
      .catch(() => {
        alert("User not found!")
      })
  }

  return (
    <section id={styles.login}>

      <section className={styles.login}>
        <header>
          <h2>Sign in to your account here</h2>
          <p>Sign in to start managing your stocks.</p>
        </header>

        <form onSubmit={handleSubmit}>
          <div>
            <MdOutlineMail className={styles.icon}/>
            <input type="text" placeholder="E-mail" 
            onChange={(e: ChangeEvent<HTMLInputElement>) => setEmail(e.target.value)}/>
          </div>
          <div>
            <BiLock className={styles.icon}/>
            <input type="password" placeholder="Password" 
            onChange={(e: ChangeEvent<HTMLInputElement>) => setPassword(e.target.value)}/>
          </div>

          <button>Sign In</button>
        </form>

        <h4>Don't have an account? <Link to="/register">Sign Up</Link></h4>
      </section>

      
    </section>
  );
}

export default Register;
