import { useState } from 'react';
import './App.css';
import TodoList from './components/TodoList';
import { MainContext } from './context/context'

function App() {

  const [todoList, setTodoList] = useState([])
  const [bloo, setBloo] = useState('true')
  const data = {
    todoList,
    setTodoList,
    bloo
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
