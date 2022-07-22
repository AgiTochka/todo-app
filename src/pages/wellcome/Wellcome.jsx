import React from 'react';
import { Link } from 'react-router-dom';
import './Wellcome.css';

const Wellcome = () => {

    return (
        <>
            <div className='header-wellcome'>
                <div className='responsive-box one'>
                    <div className='circle '></div>
                </div>
                <div className='responsive-box two'>
                    <div className='circle'></div>
                </div>
            </div>
            <div className='main-wellcome'>
                <div className="text-wellcome">
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

export default Wellcome;
