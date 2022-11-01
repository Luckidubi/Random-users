import { createContext, useState, useEffect, useContext } from "react";
import { auth } from "./config/app";
import {
  GoogleAuthProvider,
  signInWithPopup,
  signInWithRedirect,
  signOut,
  onAuthStateChanged,
} from "firebase/auth";

const AuthContext = createContext();

export const useAuth = () => useContext(AuthContext);

export default function AuthProvider({ children }) {
  const [user, setUser] = useState({});

  const provider = new GoogleAuthProvider();

  const signInWithGoogle = () => {
    // signInWithRedirect(auth, provider);
    signInWithPopup(auth, provider);
  };

  const logOut = () => {
    signOut(auth);
  };

  useEffect(() => {
    const getUser = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });
    return () => {
      getUser();
    };
  }, []);

  return (
    <AuthContext.Provider
      value={{
        logOut,
        signInWithGoogle,
        user,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}
