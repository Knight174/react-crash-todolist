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
    console.log('delete', id)
  }

  return (
    <div className="container">
      <Header />
      <Tasks tasks={tasks} />
    </div>
  );
}

export default App;
