import React, {useState} from 'react';

// routes
import AppRoutes from './appRoutes/AppRoutes';

// context
import { UserContext } from './contexts/UserContext';
import { useContext } from 'react';

// firebase
import { getAuth, onAuthStateChanged } from "firebase/auth"

function App() {
  // const [currentUser, setCurrentUser] = useState<{}>()

  const {setUser} = useContext(UserContext)

  const auth = getAuth()
  onAuthStateChanged(auth, user => {
    if(user) {
      setUser(user)
    }
  })

  return (
        <AppRoutes />   
  );
}

export default App;
