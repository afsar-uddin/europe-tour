import { useEffect, useState } from 'react';
import { getAuth, signInWithPopup, GoogleAuthProvider, signOut, onAuthStateChanged } from "firebase/auth";
import initAuthenticationFirebase from '../Firebase/Firebase.init';

initAuthenticationFirebase();
const useFirebase = () => {
    const [user, setUser] = useState();
    const auth = getAuth();
    const googleProvider = new GoogleAuthProvider();
    // loanding handling
    const [isLoading, setIsLoading] = useState(true);
    // loging handle 
    const [isLogin, setIsLogin] = useState(true);

    // login with google
    const googleLogin = () => {
        setIsLoading(true);
        console.log(user)
        return signInWithPopup(auth, googleProvider)
    }

    // observe whether user state changed or not 
    useEffect(() => {
        const unsubscribed = onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user)
            } else {
                setUser()
            }
            setIsLoading(false)
        });
        return () => unsubscribed;
    }, []);

    // Logout after sign in
    const logOut = () => {
        setIsLoading(true);
        signOut(auth)
            .then(() => { })
            .finally(() => { setIsLoading(false) });
    }

    return {
        user,
        googleLogin,
        logOut,
        isLoading,
        isLogin
    }
};

export default useFirebase;