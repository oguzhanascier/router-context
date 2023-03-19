import React from 'react'
import { AiTwotoneDelete, AiFillEdit } from 'react-icons/ai'
function Todos() {
    return (
        <div className='todoCont'>
            <ul className='todosList'>
                <li className='todo'>
                    <p className="text"> Lorem, ipsum dolor sit amet consectetur adipisicing elit. Optio pariatur minima repudiandae recusandae error, eligendi magnam quaerat unde tempora reprehenderit necessitatibus, inventore nulla excepturi provident corporis omnis! Expedita, placeat fuga?</p>
                    <div className="buttonGroup">
                        <AiTwotoneDelete />
                        <AiFillEdit />
                    </div>
                </li>
                <li className='todo'>
                    <p className="text"> Lorem, ipsum dolor</p>
                    <div className="buttonGroup">
                        <AiTwotoneDelete />
                        <AiFillEdit />
                    </div>
                </li>

            </ul>
        </div>
    )
}

export default Todos
