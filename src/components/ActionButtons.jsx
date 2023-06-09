import React, { useState } from 'react'
import { AiTwotoneDelete, AiFillEdit, AiFillCheckCircle } from 'react-icons/ai'
import { MainContext, useContext } from '../context/context'


function Buttons({ todoId }) {
    const { todoList, setTodoList, setNewValue, newValue, isEdit, setIsEdit } = useContext(MainContext)
    const [getId, setGetId] = useState(null)
    const todoDelete = (id) => {
        const newTodoList = todoList.filter(item => item.id !== todoId)
        setTodoList(newTodoList)


    }
    const todoEdit = (id) => {
        setIsEdit(true)
        setGetId(id)
        todoList.map((todo) => todo.id === id ? setNewValue(todo.value) : " ")
    }

    const todoUpdate = () => {
        const updatedList = todoList.map((item) => item.id === getId ? { ...item, value: newValue } : item)
        setTodoList(updatedList);
        setNewValue(""); 
        setIsEdit(false);


    }



    return (
        <>

            {!isEdit ? <>
                <button onClick={() => todoDelete(todoId)}><AiTwotoneDelete /></button>
                <button onClick={() => todoEdit(todoId)}><AiFillEdit /></button>
            </>
                :
                <button className='updateButton' onClick={todoUpdate}>UPDATE</button>

            }





        </>
    )
}

export { Buttons }
