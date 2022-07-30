import React from 'react';
import './header.css';
import iconMenu from './img/menu.svg';

const Header = () => {
    const Pannel = () => {
        const pan = document.getElementById('pannel');
        pan.classList.add('anim');
        console.log('ku');
    }
        return (
            <div className='main-header'>
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