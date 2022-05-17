import React from 'react';
import './App.css';
import {
    BrowserRouter as Router,
    Routes,
    Route
} from 'react-router-dom';

import Home from './pages/home/Home';
import Tasks from './pages/tasks/Tasks';

const App = () => {
    return (

        <Router>
            <div className='App'>
                <Routes>
                    <Route path={"/"} element={<Home />}></Route>
                    <Route path={"/tasks"} element={<Tasks />}></Route>

                </Routes>
            </div>

        </Router>


    );
}



export default App;