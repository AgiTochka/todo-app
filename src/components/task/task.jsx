import React from 'react';
import './task.css';


class Task extends React.Component {

    makeTask() {
        let completed = this.props.completed;
        return (
            <div className={'card-task ' + (completed ? 'completed' : '')}>
                <button className='btn-check' onClick={() => {
                    this.setState.completed = true;
                }} ></button>
                <h2>{this.props.textTask}</h2>
                <button className='btn-edit'>...</button>
            </div>
        );

    }



        render() {
            return (

                <div>
                    {this.makeTask()}
                </div>
            );
        }
    }

export default Task;