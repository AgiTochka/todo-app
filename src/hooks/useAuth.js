import {createContext, useState, useContext} from "react";
import {useNavigate} from "react-router-dom";
import axios from "../api/axios";

const LOGIN_URL = '/auth';
export const AuthContext = createContext('');

export const useAuth = () => {
    return useContext(AuthContext);
};

export const fakeAuth = () =>
    new Promise((resolve) => {
        alert('err');
        setTimeout(() => resolve('2342f2f1d131rf12'), 0);
    });

export const AuthProvider = ({children}) => {
    const navigate = useNavigate();
    const [token, setToken] = useState(null);

    const handleLogin = async (e, token) => {
        e.preventDefault();
        if (token !== undefined) {
            console.log(token);
            setToken(token);
            navigate('/home');
        } else {
           console.log('errMsg');
        }
    };

    const handleLogout = () => {
        setToken('');
    };

    const value = {
        token,
        onLogin: handleLogin,
        onLogout: handleLogout,
    };

    return (
        <AuthContext.Provider value={value}>
            {children}
        </AuthContext.Provider>
    );
};
