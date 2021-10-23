import { useEffect, useState } from 'react';
import {
  getAuth,
  signOut,
  signInWithPopup,
  GoogleAuthProvider,
  onAuthStateChanged,
} from 'firebase/auth';
import initAppAuth from '../Pages/Login/Firebase/firebase.init';

initAppAuth();

const useFirebase = () => {
  const [user, setUser] = useState({});
  const [error, setError] = useState('');
  const auth = getAuth();
  const singInWithGoogle = () => {
    const provider = new GoogleAuthProvider();
    return signInWithPopup(auth, provider);
  };
  const logOut = () => {
    signOut(auth)
      .then(() => {
        // Sign-out successful.
        setUser({});
      })
      .catch((error) => {
        // An error happened.
        setError(error.message);
      });
  };
  useEffect(() => {
    const unsubscribed = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
      } else {
        setUser({});
      }
    });
    return () => unsubscribed;
  }, []);

  return {
    singInWithGoogle,
    user,
    error,
    logOut,
  };
};

export default useFirebase;
