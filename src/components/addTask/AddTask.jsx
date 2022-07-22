import React from 'react';
import './AddTask.css';


const AddTask = ({ active, setActive }) => {

    return (
        <div className={active ? 'modal-main active' : 'modal-main'} onClick={() => setActive(false)}>
            <div className='modal-dialog' onClick={e => e.stopPropagation()}>
                <form>
                    <div className='title'>
                        <h2>Make Task</h2>
                        <button className='btn-close' onClick={() => setActive(false)}>X</button>

                    </div>
                    <div className='input-field'>
                        <input className='task-title' type='text' placeholder='Title'></input>
                        <textarea className='task-description' type='text' placeholder='Description'></textarea>
                        <div className='deadline'>
                            <label>Deadline: </label>
                            <input className='task-date' type='date'></input>
                        </div>
                        <button className='btn-sub'>Submit</button>
                    </div>

                </form>
            </div>
        </div>

    );

}

export default AddTask;
