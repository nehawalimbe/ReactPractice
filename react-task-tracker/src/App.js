import './App.css';
import Header from './components/Header';
import Tasks from './components/Tasks';
import { useState } from 'react';


function App() {
  const [tasks, setTask] = useState([{
    id: 1,
    text: 'PTM',
    day: 'June 6th at 10:30am',
    reminder: true,
  }, {
    id: 2,
    text: "Dentist's Appointment",
    day: 'June 8th at 6:30pm',
    reminder: true,
  }, {
    id: 3,
    text: 'Go to Movie',
    day: 'June 4th at 11:15am',
    reminder: true,
  }, {
    id: 4,
    text: 'Grocery Shopping',
    day: 'June 10th at 2:00pm',
    reminder: true,
  }]);

  const deleteTask = (id) => {
    console.log('delete ->', id);
    setTask(tasks.filter((task)=> {
      return task.id !== id;
    }));
  }
  return (
    <div className="container">
      <Header title='Task Tracker' />
      <Tasks tasks={tasks} onDelete={deleteTask}></Tasks>
    </div>
  );
}

export default App;
