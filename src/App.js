import Header from './components/Header'
import Tasks from './components/Tasks'
import { useState } from "react";

function App() {
  const [tasks, setTasks] = useState([
    {
      id: 1,
      text: 'have dinner',
      day: '2022.5.1',
      reminder: true
    },
    {
      id: 2,
      text: 'sleep',
      day: '2022.5.2',
      reminder: false
    },
    {
      id: 3,
      text: 'play game',
      day: '2022.5.3',
      reminder: false
    }
  ]);

  // delete task
  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  }

  // toggle reminder
  const toggleReminder = (id) => {
    console.log(id);
    setTasks(
      tasks.map(
        task => task.id === id ?
          { ...task, reminder: !task.reminder } :
          task
      )
    )
  }

  return (
    <div className="container">
      <Header />
      {
        tasks.length > 0 ?
          (<Tasks tasks={tasks} onDelete={deleteTask} onToggle={toggleReminder} />) :
          ('No tasks to show here.')
      }
    </div>
  );
}

export default App;
