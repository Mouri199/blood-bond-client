import { createContext, useEffect, useState } from "react";
import PropTypes from 'prop-types';
import { GoogleAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import { getAuth } from "firebase/auth";
import { app } from "../Firebase/Firebase.config";
import useAxiosPublic from "../Hook/useAxiosPublic";

export const AuthProvider = createContext(null)

const AuthContributor = ({ children }) => {

    const auth = getAuth(app);
    const googleProvider = new GoogleAuthProvider()
    const [user, setUser] = useState(null);
    const [load, setLoad] = useState(true);
    const axiosPublic = useAxiosPublic()

    const createUser = (email, password) => {
        setLoad(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const loginUser = (email, password) => {
        setLoad(true)
        return signInWithEmailAndPassword(auth, email, password)
    }

    const logoutUser = () => {
        setLoad(true)
        return signOut(auth)
    }

    const updateUser = (name, photo) => {
        setLoad(true)
        return updateProfile(auth.currentUser, {
            displayName: name, photoURL: photo
        });
       
    }

    const signInWithGoogle = () => {
        setLoad(true);
        return signInWithPopup(auth, googleProvider)
    }
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, currentUser => {
            setUser(currentUser)
            if (currentUser) {
                const userInfo = { email: currentUser.email }
                axiosPublic.post('/jwt', userInfo)
                    .then(res => {
                        if (res.data.token) {
                            localStorage.setItem('access-token', res.data.token)
                        }
                    })
            } else {
                localStorage.removeItem('access-token')
            }
            console.log('current user', currentUser);
            setLoad(false)
        });

        return () => {
            return unsubscribe()
        }
    }, [auth,axiosPublic])

    const providerInfo = {
        user,
        load,
        createUser,
        loginUser,
        logoutUser,
        updateUser,
        signInWithGoogle
    }
    return (
        <AuthProvider.Provider value={providerInfo}>
            {children}
        </AuthProvider.Provider>
    );
};

export default AuthContributor;
AuthContributor.propTypes = {
    children: PropTypes.node
}