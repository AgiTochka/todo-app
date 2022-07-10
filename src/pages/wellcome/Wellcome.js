import React from 'react';
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
                <p>TODO</p><p><b>CHECK</b></p><p>.</p>

                <div className='btn'>
                    <button className='btn-sign'>LOGIN</button>
                    <button className='btn-sign'>SIGNUP</button>
                </div>

            </div>


        </>


    )
}

export default Wellcome;
