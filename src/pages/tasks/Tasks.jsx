import React from 'react';
import Navigation from '../../components/navigation/navigation.jsx';
import Task from '../../components/task/task'

import './Tasks.css';

const Tasks = () => {
    return (
        <div className='main-task'>
            <Navigation/>
            <div className='main-body'>
                <button className='all-todo'>ALL TODO</button>
                <div className='border'>
                    <form>
                        <fieldset>
                            <legend>TODO</legend>
                            <Task nameTask='Hello' textTask='Do this' completed = {false}></Task>
                        </fieldset>
                    </form>
                </div>
                <div className='border'>
                    <form>
                        <fieldset>
                            <legend>COMPLETED</legend>
                            <Task textTask='Complete!' completed = {true} />
                        </fieldset>
                    </form>
                </div>
            </div>
        </div>
    )
}


export default Tasks;