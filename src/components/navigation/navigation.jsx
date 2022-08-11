import React from 'react';
import './navigation.css';
import iconTaskAct from './img/icon-task-active.svg';
import iconTask from './img/icon-task.svg';
import iconDbAct from './img/icon-db-active.svg';
import iconDb from './img/icon-db.svg';
import {NavLink} from 'react-router-dom';


class Navigation extends React.Component {


    render() {
        const { match, location } = this.props;
        let isActive = false;
        if (window.location.pathname === `/home`) {
            isActive = true;
        }
        return (
            <div className='left-pannel' id={'pannel'}>
                <NavLink to={'/'}>
                    <div className="text-icon">
                        <p>TODO</p><p><b>CHECK</b></p><p>.</p>
                    </div>
                </NavLink>

                <NavLink to={'/home'}>
                    <div className='button button-color'>
                        <img className='icon-svg' src={isActive ? iconDbAct : iconDb} alt='logo'/>
                        <p>Dashboard</p>
                    </div>
                </NavLink>
                <NavLink to={"/tasks"} >
                    <div className='button button-color'>
                        <img className='icon-svg' src={isActive ? iconTask : iconTaskAct} alt='logo'/>
                        <p>ToDo</p>
                    </div>
                </NavLink>

                <div className='white-block'></div>
            </div>
        );
    }
}

export default Navigation;