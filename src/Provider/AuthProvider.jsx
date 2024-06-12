
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import app from "../firebase/firebase.config";
import axios from "axios";

export const AuthContext = createContext(null);

const auth = getAuth(app);

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  const createUser = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  }

  const signIn = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  }

  const logOut = async () => {
    setLoading(true);
    await axios.get("http://localhost:5000/logout", {
      withCredentials: true,
    })
    return signOut(auth)

  }

  // onAuthStateChange
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, currentUser => {
      setUser(currentUser)
      setLoading(false)
      if (currentUser) {
        axios.post('http://localhost:5000/jwt', { email: currentUser.email }, { withCredentials: true })
          .then(res => {
            console.log(res.data);
            setUser(currentUser);
            setLoading(false);
          })

      }
    })
    return () => {
      return unsubscribe()
    }
  }, [])

  const authInfo = {
    user,
    loading,
    createUser,
    signIn,
    logOut,
    setLoading
  }

  return (
    <AuthContext.Provider value={authInfo}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;