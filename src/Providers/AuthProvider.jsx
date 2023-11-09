import { createContext, useEffect, useState } from "react";
import {
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import app from "../Firebase/firebase.cofig";
// import axios from "axios";
const googleProvider = new GoogleAuthProvider();
export const AuthContext = createContext();
const auth = getAuth(app);

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  //   Creating User
  const createUser = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  //   Checking if user Already exists

    // JWT Related Code
  //   if (currentUser) {
  //     axios.post('http://localhost:5000/jwt', loggedUser, { withCredentials: true })
  //         .then(res => {
  //             if (res.data) {
  //               console.log(res.data);
  //             }
  //         })
  // } else {
  //     axios.post('http://localhost:5000/logout', loggedUser, { withCredentials: true })
  //         .then(res => {
  //             if (res.data) {
  //               res.data
  //             }
  //         })
  // }
  


  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      console.log(currentUser);
      setLoading(false);
    });

    return () => {
      unSubscribe();
    };
  }, []);

  //Google Login

  const signInWithGoogle = () => {
    setLoading(true);
    return signInWithPopup(auth, googleProvider);
  };

  //   Loggin user in

  const signIn = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  //   Loggin out user
  const logOut = () => {
    setLoading(true);
    return signOut(auth);
  };

  const authInfo = {
    user,
    signInWithGoogle,
    loading,
    createUser,
    signIn,
    logOut,
  };

  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
