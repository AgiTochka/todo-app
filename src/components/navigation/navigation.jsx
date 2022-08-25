import React from 'react';
import {NavLink} from 'react-router-dom';

import './navigation.css';
import iconTaskAct from './img/icon-task-active.svg';
import iconTask from './img/icon-task.svg';
import iconDbAct from './img/icon-db-active.svg';
import iconDb from './img/icon-db.svg';
import iconCalendar from './img/icon-calendar.svg';
import iconCalendarAct from './img/icon-calendar-active.svg';


class Navigation extends React.Component {

    render() {
        const { match, location } = this.props;
        let isActiveHome = false;
        if (window.location.pathname === `/home`) {
            isActiveHome = true;
        }
        let isActiveTask = false;
        if (window.location.pathname === `/tasks`) {
            isActiveTask = true;
        }
        let isActiveCalendar = false;
        if (window.location.pathname === `/calendar`) {
            isActiveCalendar = true;
        }

        return (
            <div className='left-panel' id={'panel'}>
                <NavLink to={'/'}>
                    <div className="text-icon">
                        <p>TODO</p><p><b>CHECK</b></p><p>.</p>
                    </div>
                </NavLink>

                <NavLink to={'/home'}>
                    <div className='button button-color'>
                        <img className='icon-svg' src={isActiveHome ? iconDbAct : iconDb} alt='logo'/>
                        <p>Dashboard</p>
                    </div>
                </NavLink>

                <NavLink to={"/tasks"} >
                    <div className='button button-color'>
                        <img className='icon-svg' src={isActiveTask ? iconTaskAct : iconTask} alt='logo'/>
                        <p>ToDo</p>
                    </div>
                </NavLink>

                <NavLink to={'/calendar'}>
                    <div className='button button-color'>
                        <img className='icon-svg' src={isActiveCalendar ? iconCalendarAct : iconCalendar} alt='logo'/>
                        <p>Calendar</p>
                    </div>
                </NavLink>

                <div className='white-block'></div>
            </div>
        );
    }
}

export default Navigation;