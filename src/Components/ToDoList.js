import React from 'react'
import "./ToDoList.css";
import cross from "../images/icon-cross.svg";
import ToDo from './ToDo';

function ToDoList({todos,setTodos,title,set}) {
  
    // const addToList = () =>{
    //    setTodos([...todos,{id : Math.random().toString(), value : todos.title, status : false}]);
    //    console.log(todos)
    // }

    // const [title,setTitle] = useState((todos.title));


    const removeItemHandler = (id) =>{
        // setKey(key);

        // var l = todos.length-1;
        // console.log(l)
        // var id = todos[l].id;
        // console.log(id)
        const updatedList = todos.filter((l) => l.id !== id)
        console.log(updatedList);
        setTodos([...updatedList]);
    }
    
//     const checkboxClickHandler = (title,id) =>{

//         var updatedTitle = todos.filter(l => {
//             if(l.id === id) { // checking just the category, but you can check if any of more fields contains the conditions 
//                 l.title = title + "hi";
//             }
//         // const updatedTitle = todos.filter((l) => 
//         // l.title = title + "hi")
//         // setTitle(title + "hello");
//         console.log(updatedTitle);
//         // setTitle(updatedTitle);
        
//     })
// }

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