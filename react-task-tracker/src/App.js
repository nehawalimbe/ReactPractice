import './App.css';
import AddTask from './components/AddTask';
import Header from './components/Header';
import Tasks from './components/Tasks';
import { useState } from 'react';


function App() {
  const [showAddTaskForm, setShowAddTaskForm] = useState(false);
  const [tasks, setTask] = useState([{
    id: 1,
    text: 'PTM',
    day: 'June 6th at 10:30am',
    reminder: true,
  }, {
    id: 2,
    text: "Dentist's Appointment",
    day: 'June 8th at 6:30pm',
    reminder: false,
  }, {
    id: 3,
    text: 'Go to Movie',
    day: 'June 4th at 11:15am',
    reminder: true,
  }, {
    id: 4,
    text: 'Grocery Shopping',
    day: 'June 10th at 2:00pm',
    reminder: false,
  }]);

  const addTask = (task) => {
    console.log(task);
    let id = [...tasks].length + 1;
    console.log('id ->', id);
    let newTask = {id, ...task};
    setTask([...tasks, newTask]);
  }

  const deleteTask = (id) => {
    setTask(tasks.filter((task)=> {
      return task.id !== id;
    }));
  }
  
  const toggleReminder = (id) => {
    let newTask = tasks.map((task) => {
      if(task.id === id) {
        task.reminder = !task.reminder;
        return task;
      } else {
        return task
      }
    });
    setTask(newTask);
  }
  
  return (
    <div className="container">
      <Header title='Task Tracker' onAdd={()=> {
        setShowAddTaskForm(!showAddTaskForm);
      }} showAddTaskForm={showAddTaskForm}/>
      {showAddTaskForm && <AddTask onAdd={addTask}></AddTask>} 
      {tasks.length > 0 ? <Tasks tasks={tasks} onDelete={deleteTask} onToggle={toggleReminder}></Tasks>  : 'No tasks to display'}
    </div>
  );
}

export default App;
