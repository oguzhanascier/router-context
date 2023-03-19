import React from 'react'
import { AiTwotoneDelete, AiFillEdit } from 'react-icons/ai'
function Todos() {

    const todoDelete = () => {
        console.log('delete')
    }
    const todoEdit = () => {
        console.log('todoEdit')
    }



    return (
        <div className='todoCont'>
            <ul className='todosList'>
                <li className='todo'>
                    <p className="text"> Lorem, ipsum dolor sit amet consectetur adipisicing elit. Optio pariatur minima repudiandae recusandae error, eligendi magnam quaerat unde tempora reprehenderit necessitatibus, inventore nulla excepturi provident corporis omnis! Expedita, placeat fuga?</p>
                    <div className="buttonGroup">

                        <button><AiTwotoneDelete /></button>
                        <button><AiFillEdit /></button>
                    </div>
                </li>
                <li className='todo'>
                    <p className="text"> Lorem, ipsum dolor</p>
                    <div className="buttonGroup">
                        <button onClick={todoDelete}><AiTwotoneDelete /></button>
                        <button><AiFillEdit onClick={todoEdit} /></button>
                    </div>
                </li>

            </ul>
        </div>
    )
}

export default Todos
