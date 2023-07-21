import './App.css';
import AddTask from './components/AddTask';
import Header from './components/Header';
import Tasks from './components/Tasks';
import Footer from './components/Footer';
import About from './components/About';
import { useState, useEffect } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

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
    return data;
  }

  const fetchTask = async (id) => {
    let response = await fetch(`http://localhost:5000/tasks/${id}`);
    let data = await response.json();
    return data;
  }

  const addTask = async (task) => {
    const response = await fetch(`http://localhost:5000/tasks`, {
      method: 'POST',
      headers: {
        'Content-type': 'application/json'
      },
      body: JSON.stringify(task)
    });
    const newTask = await response.json();
    console.log('new Task ->', newTask);
    setTask([...tasks, newTask]);
  }

  const deleteTask = async (id) => {
    await fetch(`http://localhost:5000/tasks/${id}`, {
      method: 'DELETE'
    });
    setTask(tasks.filter((task) => {
      return task.id !== id;
    }));
  }

  const toggleReminder = async (id) => {
    let serverTask = await fetchTask(id);
    console.log('server task ->', serverTask);
    serverTask.reminder = !serverTask.reminder;
    let response = await fetch(`http://localhost:5000/tasks/${id}`, {
      method: 'PUT',
      headers: {
        'Content-type': 'application/json'
      },
      body: JSON.stringify(serverTask)
    });
    let updatedTask = await response.json();
    let newTask = tasks.map((task) => {
      if (task.id === id) {
        task.reminder = updatedTask.reminder;
        return task;
      } else {
        return task
      }
    });
    setTask(newTask);
  }

  return (
    <BrowserRouter>
      <div className="container">
        <Header title='Task Tracker' onAdd={() => {
          setShowAddTaskForm(!showAddTaskForm);
        }} showAddTaskForm={showAddTaskForm} />
        <Routes>
          <Route path='/' exact element={ 
            (<>
              {showAddTaskForm && <AddTask onAdd={addTask}></AddTask>}
              {tasks.length > 0 ? <Tasks tasks={tasks} onDelete={deleteTask} onToggle={toggleReminder}></Tasks> : 'No tasks to display'}          
            </>)}>
          </Route>
          <Route path='/about' element={<About />}></Route>
        </Routes>        
        <Footer></Footer>
      </div>
    </BrowserRouter>   
  );
}

export default App;
