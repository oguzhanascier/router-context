import React from 'react'
import { AiTwotoneDelete, AiFillEdit } from 'react-icons/ai'
import { MainContext, useContext } from '../context/context'


function Buttons({ todoId }) {
    const {todoList,setTodoList} = useContext(MainContext)
    const todoDelete = (id) => {
        const newTodoList= todoList.filter(item => item.id !== todoId)
        setTodoList(newTodoList)
      

    }
    const todoEdit = () => {
        console.log('todoEdit')
    }

    return (
        <>
            <button onClick={() => todoDelete(todoId)}><AiTwotoneDelete /></button>
            <button><AiFillEdit onClick={todoEdit} /></button>
        </>
    )
}

export { Buttons }
