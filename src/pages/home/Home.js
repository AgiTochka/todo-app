import React, { useState } from "react";
import './Home.css';
import Navigation from '../../components/navigation/navigation.js';
import AddTask from '../../components/addTask/AddTask';





const Home = () => {

    const[modalActive, setModalActive] = useState(false);

    return (
        <div className='main-home'>
            <Navigation/>
            <div className='main-body'>
                <div className='search'><input placeholder='SEARCH'></input></div>
   
                <div className='btn-add'>
                    <button onClick={()=>setModalActive(true)} >+ ADD</button>
                </div>

            </div>
            <AddTask active={modalActive} setActive={setModalActive}/>
        </div>

    )
}

export default Home;