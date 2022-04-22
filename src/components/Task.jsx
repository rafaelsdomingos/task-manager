import React from "react";
import "./Task.css"
import {CgClose, CgInfo} from "react-icons/cg"

const Task = ({task, handleTaskClick, handleTaskDeletion}) => {
    return (
        <div 
            className="task-container"
            style={task.completed ? {borderLeft: "10px solid #685B8A"}: {} }
        >
            <div className="task-title" onClick={ () => handleTaskClick(task.id) }>
                {task.title}
            </div>

            <div className="buttons-container" >

                <button 
                    className="see-task-details-button"
                >
                    <CgInfo />
                </button>

                <button 
                    className="remove-task-button" 
                    onClick={() => handleTaskDeletion(task.id)}
                >
                    <CgClose />
                </button>
                
            </div>
        </div>
    );
}

export default Task;