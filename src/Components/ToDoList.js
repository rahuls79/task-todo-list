import React from 'react'
import "./ToDoList.css";
import cross from "../images/icon-cross.svg";
import ToDo from './ToDo';

function ToDoList({todos,setTodos}) {
  


    const removeItemHandler = (id) =>{
        const updatedList = todos.filter((l) => l.id !== id)
        console.log(updatedList);
        setTodos([...updatedList]);
    }
    

    return (
    <div>
        <div className='todo-items'>
            {todos.map((todo) => 
                 (<li className='list-class'  key = {todo.id} status = {todo.status}> 
                    <ToDo todo={todo}/> <img src = {cross} alt =""  onClick={() => removeItemHandler(todo.id)}/> 
                </li> ) 
            )}
        </div>
    </div>
  )
}

export default ToDoList;