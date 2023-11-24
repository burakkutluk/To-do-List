import React, { useEffect, useState } from 'react'

const ToDoInput = ({ todoInput, setTodoInput, task, setTask }) => {

    useEffect(() => {
        addTodo()
    }, [])

    const handleChange = (e) => {
        setTodoInput(e.target.value)
    }

    const addTodo = () => {

        if (todoInput == "") {
            return
        } 
        else {
            setTask([
                ...task,
                { text: todoInput, id: Math.random(), isDone: false }
            ])
        }

        setTodoInput("")
    }

    return (
        <div className='todoInput w-8/12'>

            <input className='input w-8/12 mt-16 p-2 outline-none border-2 border-red-700 bg-neutral-800' type="text" placeholder='Enter your task' value={todoInput} onChange={handleChange} onSubmit={addTodo} />

            <button className='button w-1/12 p-2 bg-red-700 h-[43px] text-white' onClick={addTodo}>Add</button>

        </div>
    )
}

export default ToDoInput