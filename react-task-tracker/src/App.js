import './App.css';
import AddTask from './components/AddTask';
import Header from './components/Header';
import Tasks from './components/Tasks';
import { useState, useEffect } from 'react';


function App() {
  const [showAddTaskForm, setShowAddTaskForm] = useState(false);
  const [tasks, setTask] = useState([]);

  useEffect(() => {
    const getTasks = async () => {
      let taskData = await fetchTasks();
      setTask(taskData);
    }

    getTasks();
  }, []);

  const fetchTasks = async () => {
    let response = await fetch('http://localhost:5000/tasks');
    let data = await response.json();
    console.log('task data ->', data);
    return data;
  }

  const addTask = (task) => {
    console.log(task);
    let id = [...tasks].length + 1;
    console.log('id ->', id);
    let newTask = { id, ...task };
    setTask([...tasks, newTask]);
  }

  const deleteTask = (id) => {
    setTask(tasks.filter((task) => {
      return task.id !== id;
    }));
  }

  const toggleReminder = (id) => {
    let newTask = tasks.map((task) => {
      if (task.id === id) {
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
      <Header title='Task Tracker' onAdd={() => {
        setShowAddTaskForm(!showAddTaskForm);
      }} showAddTaskForm={showAddTaskForm} />
      {showAddTaskForm && <AddTask onAdd={addTask}></AddTask>}
      {tasks.length > 0 ? <Tasks tasks={tasks} onDelete={deleteTask} onToggle={toggleReminder}></Tasks> : 'No tasks to display'}
    </div>
  );
}

export default App;
