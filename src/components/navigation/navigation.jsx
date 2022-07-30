import React from 'react';
import './navigation.css';
import iconTask from './img/icon-task.svg';
import iconDb from './img/icon-db.svg';
import { NavLink } from 'react-router-dom';


class Navigation extends React.Component {


    render() {
        return (
            <div className='left-pannel' id={'pannel'}>
                <NavLink to={'/'}>
                    <div className="text-icon">
                        <p>TODO</p><p><b>CHECK</b></p><p>.</p>
                    </div>
                </NavLink>

                <NavLink to={'/home'}>
                    <div className='button button-white'>
                        <img className='icon-svg' src={iconDb} alt='logo' />
                        <p>Dashboard</p>
                    </div>
                </NavLink>
                <NavLink to={"/tasks"}>
                    <div className='button button-dark'>
                        <img className='icon-svg' src={iconTask} alt='logo' />
                        <p>ToDo</p>
                    </div>
                </NavLink>

                <div className='white-block'></div>
            </div>
        );
    }
}

export default Navigation;