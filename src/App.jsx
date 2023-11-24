import { useEffect, useState } from 'react'
import './App.css'
import ToDoInput from './componenets/ToDoInput'
import TodoList from './componenets/TodoList'

function App() {

  const [todoInput, setTodoInput] = useState("")
  const [task, setTask] = useState([])

  useEffect(() => {
    saveTodo()
  }, [task])

  useEffect(() => {
    getTodo()
  }, [])

  const saveTodo = () => {
    window.localStorage.setItem("task", JSON.stringify(task))
  }

  const getTodo = () => {
    if (window.localStorage.getItem("task") === null) {
      window.localStorage.setItem("task", JSON.stringify([]))
    } else {
      setTask(JSON.parse(window.localStorage.getItem("task")))
    }
  }


  return (
    <div className='App'>
      <ToDoInput todoInput={todoInput} setTodoInput={setTodoInput} task={task} setTask={setTask} />
      <TodoList task={task} setTask={setTask} />
    </div>
  )
}

export default App
