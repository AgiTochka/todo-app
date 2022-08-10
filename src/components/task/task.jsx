import React from 'react';
import './task.css';
import listIcon from './img/list.svg';
import menuIcon from './img/menu.svg';


class Task extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            title: null,
            description: null,
            deadline: null,
            isComplete: false,
            createdAt: null,
        }

    }

    render() {
        const title = this.state.title;
        const description = this.state.description;
        const deadline = this.state.deadline;
        const isComplete = this.state.isComplete;
        const createdAt = this.state.createdAt;

        return (

            <div className='bg-task'>
               <div className='task-data'>
                   <div className='icon'>
                       <img src={listIcon} alt=''/>
                   </div>
                   <div className='task-text'>
                       <h2>{(title!=null) ? title : 'Title'}</h2>
                       <p>{(deadline!=null) ? deadline : 'Deadline'}</p>
                   </div>
               </div>
                <img className='menu-icon' src={menuIcon} alt=''/>
            </div>
        );
    }
}

export default Task;