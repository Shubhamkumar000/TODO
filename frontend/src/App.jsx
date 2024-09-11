import { useState } from 'react'
import { useEffect } from 'react';
import { CreateTodo } from './Component/CreateTodo'
import { Todos } from './Component/todos'

function App() {
  const [todos, setTodos] = useState([]);
  useEffect(() => {
  fetch("http://localhost:3000/todos")
  .then(async function(res) {
    const json = await res.json();
    setTodos(json.todos);
  })
},[]);

  return (
 
 <div>
  <CreateTodo></CreateTodo>
  <Todos todos={todos}></Todos>
  </div>
   
  )
}

export default App
