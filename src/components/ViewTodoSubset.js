import React from 'react';
import './ButtonStyles.css';

const ViewTodoSubset = props=>{
    return (
        <div>
            <button onClick={()=>props.showAllTasks('All')}>Show all tasks</button>
            <button onClick={()=>props.showActiveTasks('Active')}>Show active tasks</button>
            <button onClick={()=>props.showCompletedTasks('Completed')}>Show completed tasks</button>
        </div>
    );
}

export default ViewTodoSubset;