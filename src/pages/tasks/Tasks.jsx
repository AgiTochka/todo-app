import React, {useState} from 'react';
import './Tasks.css';
import Navigation from '../../components/navigation/navigation.jsx';
import Task from '../../components/task/task'
import Header from "../../components/header/header";
import AddTask from "../../components/addTask/AddTask";

const Tasks = () => {
    const [modalActive, setModalActive] = useState(false);

    return (
        <div className='main-task'>
            <Navigation/>
            <Header/>
            <div id='workspace' className='workspaceTask '>
                <div className='task-space'>
                    <button className='btn-create' onClick={() => setModalActive(true)} >Create Task</button>
                    <Task />
                    <Task />
                </div>
            </div>
            <AddTask active={modalActive} setActive={setModalActive} />
        </div>
    )
}

export default Tasks;