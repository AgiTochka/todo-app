import React from 'react';
import { Link } from 'react-router-dom';
import './Welcome.css';
import ArtElement from '../../components/artElement/artElement';

const Welcome = () => {
    return (
        <>
            <ArtElement />
            <div className='main-welcome'>
                <div className="text-welcome">
                    <p>TODO</p><p><b>CHECK</b></p><p>.</p>
                </div>
                <div className='btn'>
                    <Link to={"/login"}>
                        <button className='btn-sign'>LOGIN</button>
                    </Link>
                    <Link to={'/register'}>
                        <button className='btn-sign'>SIGNUP</button>
                    </Link>
                </div>
            </div>
        </>
    )
}

export default Welcome;
