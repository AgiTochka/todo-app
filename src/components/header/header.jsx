import React from 'react';
import './header.css';
import iconMenu from './img/menu.svg';

class Header extends React.Component {
    render() {
        return (
            <div className='main-header'>
                <div className='menu'>
                    <button> <img src={iconMenu} /></button>
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
}
export default Header;