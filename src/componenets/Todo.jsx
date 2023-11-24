import React from 'react'
import { RiDeleteBin6Line } from 'react-icons/ri'
import { TiTick } from 'react-icons/ti'
import TodoDetail from './TodoDetail'

const Todo = ({ text, task, setTask, todo }) => {

  const deleteHandler = () => {
    setTask(task.filter((el) => el.id !== todo.id))
  }

  const completeHandler = () => {
    setTask(task.map((item) => {
      if (item.id === todo.id) {
        return {
          ...item,
          isDone: !item.isDone
        }
      }
      return item
    }))
  }

  return (
    <div className={`task ${todo.isDone ? "completed" : ""}`}>
      <div className="taskItem">
        {text}
      </div>
      <div className="actions">

        <button className='complete' onClick={completeHandler}><TiTick size={30} /></button>
        <button className='delete' onClick={deleteHandler}><RiDeleteBin6Line size={20} color='red' /></button>

      </div>

    </div>
  )
}

export default Todo