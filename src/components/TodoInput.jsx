import React, {useEffect} from 'react'
import { MainContext, useContext } from '../context/context'

function TodoInput() {
    const { todoList, setTodoList, newValue, setNewValue, isEdit } = useContext(MainContext)

    useEffect(() => {
        console.log(todoList)      
    }, [todoList])

    const addItem = () => {
       const item=  {
        id: Math.floor(Math.random()*9999999),
        value:newValue
       }

       if(!newValue){
        console.log('Boş geçildi')
       }else{
        setTodoList(old => [...old, item])
        setNewValue('')
       }

    }

   
    

    return (
        <div className='formGroup'>
        <input className='todoInput' type="text" placeholder='what do you think' value={newValue} onChange={(e) => setNewValue(e.target.value)}  />

        {!isEdit ? <button className='addButton' onClick={addItem}>Add</button> : <div></div>}
        
        </div>
    )
}

export default TodoInput
