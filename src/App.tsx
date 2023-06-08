import React, { useState } from "react";

// routes
import AppRoutes from "./appRoutes/AppRoutes";

// context
import { UserContext } from "./contexts/UserContext";
import { useContext } from "react";

// firebase
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "./firebase/firebase";

function App() {
  const { setUser } = useContext(UserContext);

  onAuthStateChanged(auth, async(newUser) => {
    if(newUser) {
      setUser(newUser)
    }
  })

  return <AppRoutes />;
}

export default App;
