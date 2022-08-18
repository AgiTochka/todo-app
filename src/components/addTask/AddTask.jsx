import React from 'react';
import './AddTask.css';
import ArtElement from "../artElement/artElement";
import arrowBack from './img/arrow-short_left.svg';


const AddTask = ({active, setActive}) => {
    const artStyle = {
        width: '70vw',
    }
    return (
        <div className={active ? 'modal-main active' : 'modal-main'} onClick={() => setActive(false)}>
            <div className='modal-dialog' onClick={e => e.stopPropagation()}>
                <div className='title'>
                    <ArtElement difStyle={artStyle}/>
                </div>

                <div className='header-task'>
                    <button className='btn-close' onClick={() => setActive(false)}>
                        <img src={arrowBack} alt=''/>
                    </button>
                    <div className='inputTaskMain'>
                        <p>Name</p>
                        <input className='nameTask' type='text'/>
                        <p>Date</p>
                        <input type='date' className='nameTask'/>
                    </div>
                </div>
                <div className='input-field'>
                    <p>Description</p>
                    <textarea maxLength="255" className='task-description' type='text' placeholder='Description'></textarea>
                    <button className='btn-sub'>Create Task</button>
                </div>
            </div>
        </div>

    );

}

export default AddTask;
