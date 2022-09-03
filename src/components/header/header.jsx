import React from 'react';
import { useAuth } from '../../hooks/useAuth';
import './header.css';
import iconMenu from './img/menu.svg';
import iconSearch from './img/search.svg';

const Header = () => {
    const Panel = () => {
        const pan = document.getElementById('panel');
        const header = document.getElementById('header');
        const workspace = document.getElementById('workspace');

        pan.classList.toggle('anim');
        header.classList.toggle('animHeader');
        workspace.classList.toggle('animWorkspace');
    }

    let pageName = '';
    if (window.location.pathname === `/home`) {
        pageName = 'Dashboard';
    }
    if (window.location.pathname === `/tasks`) {
        pageName = 'ToDo';
    }
    if (window.location.pathname === `/calendar`) {
        pageName = 'Calendar';
    }

    return (
        <div className='main-header' id='header'>
            <div className='menu'>
                <button onClick={() => Panel()}> <img src={iconMenu} alt={''} /></button>
                <h2>{pageName}</h2>
            </div>

            <div className='rightSide'>
                <div className='userInfo'>
                    <div className='user'>
                        <label className='userName'>Username</label>
                        <label className='userDescription'>User Description</label>
                    </div>

                    <div className='userAvatar'></div>
                </div>

                <div className='search'>
                    <input placeholder='Search Project ...' />
                    <img className='btnSearch' src={iconSearch} alt='' />
                </div>
            </div>
        </div>
    );
}

export default Header;