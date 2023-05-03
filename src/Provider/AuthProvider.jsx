import React, { createContext, useEffect, useState } from "react";

export const AuthContext = createContext();

import {
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
} from "firebase/auth";
import app from "../firebase/firebase.init";

const AuthProvider = ({ children }) => {
  const auth = getAuth(app);

  const [user, setUser] = useState();
  const createUser = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const signInUser = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      // console.log("state changed to " + currentUser);
      console.log(currentUser);
      setUser(currentUser);
    });
    return () => unsubscribe();
  }, []);

  const info = {
    user,
    createUser,
    signInUser,
    auth,
    setUser,
  };
  return <AuthContext.Provider value={info}>{children}</AuthContext.Provider>;
};

export default AuthProvider;
