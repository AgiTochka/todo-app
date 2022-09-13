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

const getToken = async (username, password) => {
    try {
        const response = await axios.post(LOGIN_URL,
            JSON.stringify({username, password}),
            {
                headers: {'Content-Type': 'application/json'},
                withCredentials: true
            }
        );

        console.log(JSON.stringify(response?.data));
        const obj = JSON.parse(JSON.stringify(response?.data));
        return obj.id;
    } catch (err) {
        if (err.response?.status >= 500) {
            console.log('No Server Response');
        } else if (err.response?.status >= 400) {
            console.log('Missing Username or Password');
        } else if (err.response?.status <= 199) {
            console.log('Server is not exists');
        } else {
            console.log('Login Failed');
        }
        return undefined;
    }

}
export const AuthProvider = ({children}) => {
    const navigate = useNavigate();
    const [token, setToken] = useState(null);

    const handleLogin = async (e, username, password) => {
        e.preventDefault();

        const token = await getToken(username, password);
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
