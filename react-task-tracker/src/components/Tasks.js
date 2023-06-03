
import Task from "./Task";

function Tasks({tasks, onDelete}) {    
    return (<div>
        {tasks.map(element => (
            <Task task={element} onDelete={onDelete}></Task>
        ))}
    </div>);
}
export default Tasks;
