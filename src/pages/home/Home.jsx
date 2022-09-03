import React, { useState } from "react";
import './Home.css';
import Navigation from '../../components/navigation/navigation';
import Header from "../../components/header/header";
import {useAuth} from "../../hooks/useAuth";

function CurrentDate  () {
    const current = new Date();
    const monthName = current.toLocaleString("en-US", {month: "short"});
    const dayName = current.toLocaleDateString("en-US", { weekday: 'short' });
    return dayName + ' ' + current.getDate() + ' ' + monthName + ', ' + current.getFullYear() ;
}


const Home = () =>{
    const { token } = useAuth();
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