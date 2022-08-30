import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import CircularProgress from '@mui/material/CircularProgress';

import { auth } from '../firebase/config';

export const AuthContext = React.createContext();

const AuthProvider = ({ children }) => {
    const navigate = useNavigate();
    const [user, setUser] = useState({});
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const unsubcribe = auth.onAuthStateChanged((user) => {
            console.log(user);
            if (user) {
                const { displayName, email, photoURL, uid } = user;
                setUser({
                    displayName,
                    email,
                    photoURL,
                    uid,
                });
                setIsLoading(false);
                navigate('/');
            } else {
                navigate('/login');
            }
        });

        return () => {
            unsubcribe();
        }
    }, [navigate]);

    return (
        <AuthContext.Provider value={{ user }}>
            {isLoading ? <CircularProgress /> : children}
        </AuthContext.Provider>
    )
}

export default AuthProvider;