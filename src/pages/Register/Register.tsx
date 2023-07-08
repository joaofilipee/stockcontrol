import{ ChangeEvent, FormEvent, useState, useContext } from "react";

import styles from "./Register.module.css";

import { Link } from "react-router-dom";

import { MdOutlineMail } from "react-icons/md";
import { BiLock } from "react-icons/bi"

import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth } from "../../firebase/firebase"

import { UserContext } from "../../contexts/UserContext"

function Register() {
  const { setDisplayName } = useContext(UserContext)

  const [userName, setUserName] = useState<string>("")
  const [email, setEmail] = useState<string>("")
  const [password, setPassword] = useState<string>("")
  const [confirmPassword, setConfirmPassword] = useState<string>("")

  const handleSubmit = async(e: FormEvent) => {
    e.preventDefault()

    if(userName.length < 3) {
      return alert("Your username must have at least 3 characters.")
    } 
    else if(password !== confirmPassword) {
      return alert("Your password is different.")
    }

    const registeredUser = await createUserWithEmailAndPassword(auth, email, password)
    updateProfile(registeredUser.user, {
      displayName: userName
    }).then(() => setDisplayName(userName))
  }


  
  return (
    <section id={styles.register}>

      <section className={styles.register}>
        <header>
          <h2>Create an account here</h2>
          <p>Create an account and manage your business stocks.</p>
        </header>

        <form onSubmit={handleSubmit}>
          <input type="text" placeholder="Username" onChange={(e: ChangeEvent<HTMLInputElement>) => setUserName(e.target.value)}/>

          <div>
            <MdOutlineMail className={styles.icon}/>
            <input type="text" placeholder="E-mail" onChange={(e: ChangeEvent<HTMLInputElement>) => setEmail(e.target.value)}/>
          </div>
          <div>
            <BiLock className={styles.icon}/>
            <input type="password" placeholder="Password" onChange={(e: ChangeEvent<HTMLInputElement>) => setPassword(e.target.value)}/>
          </div>
          <div>
            <BiLock className={styles.icon}/>
            <input type="password" placeholder="Confirm Password" onChange={(e: ChangeEvent<HTMLInputElement>) => setConfirmPassword(e.target.value)}/>
          </div>

          <button>Sign Up</button>
        </form>

        <h4>Already have an account? <Link to="/login">Sign In</Link></h4>
      </section>

      

    </section>
  );
}

export default Register;
function err(reason: any): PromiseLike<never> {
  throw new Error("Function not implemented.");
}

