import React from 'react'
import Todos from './Todos'
import { MainContext, useContext } from '../context/context'

function TodoList() {
   const {bloo}= useContext(MainContext)
    return (
        <div>
            <h2>{bloo}</h2>
        
            <Todos />
            
        </div>
    )
}

export default TodoList
