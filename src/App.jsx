import { useState } from 'react';
import './App.css';
import TodoList from './components/TodoList';
import { MainContext } from './context/context'

function App() {
  const [newValue, setNewValue] = useState('')
  const [todoList, setTodoList] = useState([])
  const data = {
    todoList,
    setTodoList,
    newValue,
    setNewValue
  }

  return (
    <div className="container">
      <h1 className='todoTitle'>TODOS</h1>
      <MainContext.Provider value={data}>
        <TodoList />
      </MainContext.Provider>
    </div>
  );
}

export default App;
