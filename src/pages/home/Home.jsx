import React, { useState } from "react";
import './Home.css';
import Navigation from '../../components/navigation/navigation';
import Header from "../../components/header/header";





const Home = () => {


    return (
        <div className='main-home'>
            <Navigation />
            <Header />
            <div className='workspace' id="workspace">
            </div>
          
        </div>

    )
}

export default Home;