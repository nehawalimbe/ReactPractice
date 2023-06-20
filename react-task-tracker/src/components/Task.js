import {FaTrashAlt} from 'react-icons/fa'
function Task({task, onDelete, onToggle}) {
    return (<div className={`task ${task.reminder && 'reminder'}`} onDoubleClick={()=>{
    // return (<div className={task.reminder ? 'task reminder' : 'task'} onDoubleClick={()=>{
            onToggle(task.id)
        }}>
        <h3>
            {task.text}
            <FaTrashAlt onClick={()=> {
                onDelete(task.id)
            }}></FaTrashAlt>            
        </h3>
        
        <p>{task.day}</p>
    </div>);
}

export default Task;