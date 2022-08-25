import React from 'react';
import './AddTask.css';
import ArtElement from "../artElement/artElement";
import arrowBack from './img/arrow-short_left.svg';

const AddTask = ({active, setActive}) => {
    const artStyle = {
        width: '70vw',
    }

    return (
        <div className={active ? 'modalMain active' : 'modalMain'} onClick={() => setActive(false)}>
            <div className='modalDialog' onClick={e => e.stopPropagation()}>
                <div className='title'>
                    <ArtElement difStyle={artStyle}/>
                </div>

                <div className='headerTask'>
                    <button className='btnClose' onClick={() => setActive(false)}>
                        <img src={arrowBack} alt=''/>
                    </button>

                    <div className='inputTaskMain'>
                        <p>Name</p>
                        <input className='nameTask' type='text'/>
                        <p>Date</p>
                        <input type='date' className='nameTask'/>
                    </div>
                </div>

                <div className='inputField'>
                    <p>Description</p>
                    <textarea maxLength="255" className='descriptionTask' type='text' placeholder='Description'></textarea>
                    <button className='btnSub'>Create Task</button>
                </div>
            </div>
        </div>
    );
}

export default AddTask;
