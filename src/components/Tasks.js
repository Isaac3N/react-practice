//states are immutable therefore they cant be changed but they can be updated using setTasks 
import Task from './Task';
const Tasks = ({tasks, onDelete, onToggle}) => {
    return (
        <>
         {tasks.map((task) => (
             <Task 
                key= {task.id} 
                task={task}
                onDelete={onDelete} 
                onToggle = {onToggle}/>
         ))}   
        </>
    )
}

export default Tasks

