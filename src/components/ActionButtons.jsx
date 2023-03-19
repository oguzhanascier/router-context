import React from 'react'
import { AiTwotoneDelete, AiFillEdit } from 'react-icons/ai'


function Buttons({ todoId }) {
    const todoDelete = (id) => {
        console.log(id)
        console.log('tık')
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
