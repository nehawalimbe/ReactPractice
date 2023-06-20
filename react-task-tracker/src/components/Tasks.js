
import Task from "./Task";

function Tasks({tasks, onDelete, onToggle}) {    
    return (<div>
        {tasks.map(element => (
            <Task key={element.id} task={element} onDelete={onDelete} onToggle={onToggle}></Task>
        ))}
    </div>);
}
export default Tasks;
