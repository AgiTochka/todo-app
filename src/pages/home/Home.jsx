import React, { useState } from "react";
import './Home.css';
import Navigation from '../../components/navigation/navigation';
import Header from "../../components/header/header";

function CurrentDate  () {
    const current = new Date();
    const monthName = current.toLocaleString("default", {month: "short"});
    const dayName = current.toLocaleDateString("default", { weekday: 'short' });
    return dayName + ' ' + current.getDate() + ' ' + monthName + ', ' + current.getFullYear() + ' | ' + current.getHours() + ':' + current.getMinutes();
}

class Home extends React.Component{
    render() {
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
}

export default Home;