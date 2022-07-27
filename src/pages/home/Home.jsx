import React, { useState } from "react";
import './Home.css';
import Navigation from '../../components/navigation/navigation';
import AddTask from '../../components/addTask/AddTask';
import Header from "../../components/header/header";





const Home = () => {

    const [modalActive, setModalActive] = useState(false);

    return (
        <div className='main-home'>
            <Navigation />
            <Header />
          
        </div>

    )
}

export default Home;