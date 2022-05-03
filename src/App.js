import { useState, useEffect } from "react";
import { Routes, Route } from 'react-router-dom'; // 路由相关
import Header from './components/Header'
import Footer from './components/Footer'
import Tasks from './components/Tasks'
import AddTask from './components/AddTask'
import About from './components/About'
// import Home from './components/Home'

function App() {
  const [addTaskSeen, setAddTaskSeen] = useState(false)
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    const getTasks = async () => {
      const tasksFromServer = await fetchTasks()
      setTasks(tasksFromServer)
    }
    getTasks();
  }, [])

  // fetch tasks
  const fetchTasks = async () => {
    const response = await fetch("http://localhost:5000/tasks");
    const data = await response.json()
    return data
  }

  // fetch task
  const fetchTask = async (id) => {
    const response = await fetch(`http://localhost:5000/tasks/${id}`);
    const data = await response.json()
    return data
  }

  // add task
  const addTask = async (task) => {
    const response = await fetch('http://localhost:5000/tasks', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(task)
    })

    const data = await response.json()
    setTasks([...tasks, data])

    // const id = Math.floor(Math.random() * 10000) + 1;
    // const newTask = { id, ...task }
    // setTasks([...tasks, newTask]);
  }

  // delete task
  const deleteTask = async (id) => {
    await fetch(`http://localhost:5000/tasks/${id}`, {
      method: 'DELETE'
    })

    setTasks(tasks.filter((task) => task.id !== id));
  }

  // toggle reminder
  const toggleReminder = async (id) => {
    const taskToToggle = await fetchTask(id);
    const updateTask = { ...taskToToggle, reminder: !taskToToggle.reminder }

    const response = await fetch(`http://localhost:5000/tasks/${id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(updateTask)
    });

    const data = await response.json();
    debugger
    setTasks(
      tasks.map(
        task => task.id === id ?
          { ...task, reminder: data.reminder } :
          task
      )
    )
  }

  return (
    <div className="container">
      {/* heading */}
      <Header
        addTaskSeen={addTaskSeen}
        toggleAddTask={() => setAddTaskSeen(!addTaskSeen)}
      />
      <Routes>
        <Route
          path="/"
          exact
          element={
            <>
              {/* control visible of AddTask Block with value of addTaskSeen */}
              {addTaskSeen && <AddTask onAdd={addTask} />}

              {/* task list render */}
              {
                tasks.length > 0 ?
                  (<Tasks tasks={tasks} onDelete={deleteTask} onToggle={toggleReminder} />) :
                  ('No tasks to show here.')
              }
            </>
          }
        />
        {/* <Route exact path='/' element={<Home />} /> */}
        <Route exact path='/about' element={<About />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
