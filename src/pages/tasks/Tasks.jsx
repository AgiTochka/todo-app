import React from 'react';
import Navigation from '../../components/navigation/navigation.jsx';
import Task from '../../components/task/task'

import './Tasks.css';
import Header from "../../components/header/header";

const Tasks = () => {
    return (

        <div className='main-task'>
            <Navigation/>
            <Header/>
            <div id='workspace' className='workspaceTask '>

                <div className='task-space'>
                    <button className='btn-create'>Create Task</button>
                    <Task />
                    <Task />
                    <Task />
                    <Task />
                    <Task />
                    <Task />
                    <Task />
                    <Task />
                    <Task />
                    <Task />
                </div>

            </div>
        </div>

    )
}


export default Tasks;