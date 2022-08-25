import React from 'react';
import './App.css';
import {
    BrowserRouter as Router,
    Routes,
    Route,
    Navigate, useLocation
} from 'react-router-dom';

import Home from './pages/home/Home';
import Tasks from './pages/tasks/Tasks';
import Registr from './pages/registration/Registration';
import Wellcome from './pages/wellcome/Wellcome';
import Login from './pages/login/Login'
import useAuth from "./context/AuthProvider";
import RequireAuth from './context/PrivateRoute';
import Calendar from "./pages/calendar/Calendar";

const App = () => {
    const { isAuthenticated } = useAuth();

    return (
        <Router>
            <div className='App'>
                <Routes>
                    <Route path={"/"} element={<Wellcome/>}></Route>
                    <Route path={"/home"} element={<Home/>}></Route>
                    <Route path={"/register"} element={<Registr />}></Route>
                    <Route path={"/login"} element={<Login />}></Route>
                    <Route path={"/tasks"} element={<Tasks />}></Route>
                    <Route path={"/calendar"} element={<Calendar/>}></Route>
                    <Route path='*' element={<Navigate to={isAuthenticated ? '/home' : '/'} />} />
                </Routes>
            </div>
        </Router>
    );
}

export default App;