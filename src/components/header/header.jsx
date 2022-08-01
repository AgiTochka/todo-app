import React from 'react';
import './header.css';
import iconMenu from './img/menu.svg';

const Header = () => {
    const Pannel = () => {
        const pan = document.getElementById('pannel');
        const header = document.getElementById('header');
        const workspace = document.getElementById('workspace');

        pan.classList.toggle('anim');
        header.classList.toggle('animHeader');
        workspace.classList.toggle('animWorkspace');
    }
        return (
            <div className='main-header' id='header'>
                <div className='menu'>
                    <button onClick={()=>Pannel()}> <img src={iconMenu} alt={''} /></button>
                    <h2>ToDo</h2>
                </div>
                <div className='userInfo'>
                    <label>Username</label>
                </div>
                <div className='search'>
                    <input placeholder='Search Project' />
                </div>

            </div>
        );
}
export default Header;