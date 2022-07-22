import React from 'react';

import './navigation.css';
import greyHouse from './img/house-grey.png';
import logo from './img/logo.png';
import greyTasks from './img/task-grey.png';


import {NavLink} from 'react-router-dom';


class Navigation extends React.Component {


    render() {
        return (
            <div className='left-pannel'>
                <NavLink to={'/'}>
                <div className='icon'>
                    <img src={logo} alt='logo'></img>
                    </div>
                </NavLink>
                
                <NavLink to={'/home'}>
                    <div
                        className='button button-white'>
                        <img className='img-house' src={greyHouse} alt='logo' ></img>
                    </div>
                </NavLink>
                <NavLink to={"/tasks"}>
                    <div

                        className='button button-white'>
                        <img className='img-tasks' src={greyTasks} alt='logo' ></img>
                    </div>
                </NavLink>

                <div className='white-block'></div>
            </div>
        );
    }
}

export default Navigation;