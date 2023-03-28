import React from 'react'
import Todo from './Todo' 

export default function TodoList({todos, toggletodos}) {
  return (
   todos.map((todo) => {
    return <Todo key ={todo.id} toggletodos={toggletodos} todo = {todo}/>
   })
  )
}
