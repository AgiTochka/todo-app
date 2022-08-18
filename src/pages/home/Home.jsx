import React, { useState } from "react";
import './Home.css';
import Navigation from '../../components/navigation/navigation';
import Header from "../../components/header/header";

const Home = () => {
    const CurrentDate = () =>{
        const current = new Date();
        const monthName = current.toLocaleString("default", {month: "short"});
        const dayName = current.toLocaleDateString("default", { weekday: 'short' });
        return dayName + ' ' + current.getDate() + ' ' + monthName + ', ' + current.getFullYear();
    }
    return (
        <div className='main-home'>
            <Navigation />
            <Header />
            <div className='workspace' id="workspace">
                <h2>Today</h2>
                <p>{CurrentDate()}</p>
            </div>
          
        </div>

    )
}

export default Home;