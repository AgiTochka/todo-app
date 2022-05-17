import React from 'react';
import './Home.css';
import Navigation from '../../components/navigation/navigation.js';




const Home = () => {
    return (
        <div className='main-home'>
            <Navigation/>
            <div className='main-body'>
                <div className='search'><input placeholder='SEARCH'></input></div>
   
                <div className='btn-add'>
                    <button >+ ADD</button>
                </div>



            </div>
        </div>
    );
}

export default Home;