import React from 'react';
import './App.css';
import {
    BrowserRouter as Router,
    Routes,
    Route
} from 'react-router-dom';

import Home from './pages/home/Home';
import Tasks from './pages/tasks/Tasks';
import Registr from './pages/registration/Registration';
import Wellcome from './pages/wellcome/Wellcome';
import Login from './pages/login/Login'

const App = () => {
    return (

        <Router>
            <div className='App'>
                <Routes>
                    <Route path={"/"} element={<Wellcome/>}></Route>
                    <Route path={"/home"} element={<Home />}></Route>
                    <Route path={"/register"} element={<Registr />}></Route>
                    <Route path={"/login"} element={<Login />}></Route>
                    <Route path={"/tasks"} element={<Tasks />}></Route>

                </Routes>
            </div>

        </Router>


    );
}



export default App;