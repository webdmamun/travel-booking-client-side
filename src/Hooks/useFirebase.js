import { useEffect, useState } from "react";
import initAuth from "./../Firebase/Firebase.init";
import {
  getAuth,
  signInWithPopup,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  GoogleAuthProvider,
  onAuthStateChanged,
  updateProfile,
  signOut,
} from "firebase/auth";

initAuth();
const useFirebase = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [user, setUser] = useState({});
  const [error, setError] = useState("");

  const auth = getAuth();
  const googleProvider = new GoogleAuthProvider();

  // Handle Google Sgin in
  const signInGoogle = () => {
    return signInWithPopup(auth, googleProvider);
  };

  // get value
  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };
  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  // Handle Registration
  const handleRegistration = (e) => {
    e.preventDefault();
    if (password.length < 6) {
      setError("Password Must be at least 6 characters long!");
      return;
    }
    createUserWithEmailAndPassword(auth, email, password)
      .then((result) => {
        const user = result.user;
        console.log(user);
        setError("");
        setUserName();
      })
      .catch((error) => {
        setError(error.message);
      });
  };

  // Update New User Name
  const setUserName = () => {
    updateProfile(auth.currentUser, { displayName: name }).then((result) => {});
  };

  // Handle Log In
  const handleLogIn = (e) => {
    e.preventDefault();
    signInWithEmailAndPassword(auth, email, password)
      .then((result) => {
        setUser(result.user);
      })
      .catch((error) => {
        setError(error.message);
      });
  };

  // Handle Log out
  const logOut = () => {
    signOut(auth)
      .then(() => {
        // Sign-out successful.
        setUser({});
      })
      .catch((error) => {
        // An error happened.
        setUser(error.message);
      });
  };

  // Observe user state change
  useEffect(() => {
    const unsubscribed = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
      } else {
        setUser({});
      }
    });
    return () => unsubscribed;
  }, [auth]);

  return {
    user,
    error,
    signInGoogle,
    handleNameChange,
    handleEmailChange,
    handlePasswordChange,
    handleRegistration,
    handleLogIn,
    logOut,
  };
};

export default useFirebase;
