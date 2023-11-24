import React from 'react'
import Todo from './Todo'

const TodoList = ({ task, setTask }) => {

  return (
    <div className='todoListContainer mt-10 '>
      <ul>
        {task.map((todo) => (
          <Todo text={todo.text} todo={todo} key={todo.id} setTask={setTask} task={task} />
        ))}
      
      </ul>
      {task.length>0 &&
        <div className="clear">
          <button className='clearButton' onClick={() => setTask([])}>Clear</button>
        </div>
      }

    </div>
  )
}

export default TodoList