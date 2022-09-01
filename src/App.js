import React from 'react';
import './App.css';
import {
    BrowserRouter as Router, Route,
    Routes,
} from 'react-router-dom';
import ProtectedRoute from "./components/ProtectedRoute";
import Welcome from "./pages/welcome/Welcome";
import Login from "./pages/login/Login";
import Registration from "./pages/registration/Registration";
import Home from "./pages/home/Home";
import Tasks from "./pages/tasks/Tasks";
import Calendar from "./pages/calendar/Calendar";
import PageNotFound from "./pages/NotFound/index.js";


const App = () => {
    return (
            <Router>
                <Routes>
                    <Route path={'/'} element={<Welcome/>}/>
                    <Route path={'/login'} element={<Login/>}/>
                    <Route path={'/register'} element={<Registration/>}/>
                    <Route
                        path={'/home'}
                        element={
                            <ProtectedRoute>
                                <Home/>
                            </ProtectedRoute>
                        }
                    />
                    <Route
                        path={'/tasks'}
                        element={
                            <ProtectedRoute>
                                <Tasks/>
                            </ProtectedRoute>
                        }
                    />
                    <Route
                        path={'/calendar'}
                        element={
                            <ProtectedRoute>
                                <Calendar/>
                            </ProtectedRoute>
                        }
                    />
                    <Route path={'/*'} element={<PageNotFound/>}/>
                </Routes>
            </Router>
    );
}

export default App;