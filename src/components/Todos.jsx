import React from 'react'
import { Buttons } from './ActionButtons'
import { MainContext, useContext } from '../context/context'

function Todos() {
    const {todoList} = useContext(MainContext)


    return (
        <div className='todoCont'>
            <ul className='todos-ul'>
                {todoList.map((item, index) => {
                    return (
                        <li className="todo" key={index}>
                            <p className='text'>{item.value} {item.id}</p>
                            <div className="buttonGroup">
                            <Buttons todoId={item.id} />
                            </div>
                        </li>
                    )
                }
                )}

            </ul>

        </div>
    )
}

export default Todos
