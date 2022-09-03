import {React, createContext , useState, useContext} from "react";
import { useNavigate } from "react-router-dom";
import { useLocalStorage } from "./useLocalStorage";

export const AuthContext = createContext('');

export const useAuth = () => {
    return useContext(AuthContext);
  };

export const fakeAuth = () =>
  new Promise((resolve) => {
    alert('err');
    setTimeout(() => resolve('2342f2f1d131rf12'), 0);
  });

export const AuthProvider = ({ children }) => {
    const navigate = useNavigate();
    const [token, setToken] = useState(null);
  
    const handleLogin = async (e) => {
        e.preventDefault();
        const token = await fakeAuth();
      alert(token);
      setToken(token);
      alert(token);
      navigate('/home');
    };
  
    const handleLogout = () => {
        alert(token);
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
