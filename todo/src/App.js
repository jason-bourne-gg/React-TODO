import React, {useState, useRef, useEffect} from "react";
import TodoList from "./TodoList";
// import uuidv4 from 'uuid/v4';
import { v4 as uuidv4 } from 'uuid';

const LOCAL_STORAGE_KEY = 'todo-storage'

function App() {
  const [todos, setTodos] = useState([])
  const todoNameRef = useRef()

  useEffect (() => {
    const storedtodos = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY))
    if (storedtodos) setTodos(storedtodos)
  },[])

  useEffect (() =>{
    localStorage.setItem (LOCAL_STORAGE_KEY, JSON.stringify(todos))
  }, [todos])

  function toggletodos(id) {
    const newtodos = [...todos]
    const todo = newtodos.find(todos =>todo.id === id)
    todo.completed = !todo.completed
    setTodos(newtodos)
  }

  function handleAddTodo (e) {
    const name = todoNameRef.current.value
    if (name === '') return
    //console.log(name)
    setTodos (oldtodos => {
      return ([...oldtodos, {id:uuidv4(), name:name, completed: false}])
    })
    todoNameRef.current.value = null

  }

  return (
    //this is JSX (javascript XML); react's version of HTML
    <>
    {/*above syntax is shorthand of <fragment></fragment>  */}
      <TodoList todos = {todos} toggletodos={toggletodos}/>
      <input ref= {todoNameRef} type="text"></input>
      <button onClick={handleAddTodo}> ADD TODO </button> 
      <button> Clear TODOs </button> 
      <div>0 left ToDo</div>
    </>
  );
}

export default App;
