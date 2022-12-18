import React, { useState } from 'react'
import "./ToDoBlock.css"
import moon from "../images/icon-moon.svg";
import sun from "../images/icon-sun.svg";
import ToDoList from './ToDoList';

function ToDoBlock({nightMode,setNightMode}) {

  var style1 = {
    backgroundColor: '#c7cec7',
    color : 'rgb(0, 0, 0)'


  }

  const [input,setInput] = useState("");
  const [todos,setTodos] = useState([]);
  const [image,setImage] = useState(sun);
  const [style,setStyle] = useState(style1)
  const [title,setTitle] = useState(input);

  

  var style2 = {
    backgroundColor: 'rgb(69,67,67)',
    color : 'rgb(255, 255, 255)'

  }


  const onSwitchMode = (event) =>{
    console.log(nightMode);
    setNightMode(!nightMode);
    if(nightMode === true ){
      setImage(moon);
      setStyle(style2);
    }
    else{
      setImage(sun);
      setStyle(style1);
    }
  }
  
  const inputChangeHandler = (event) =>{
    setInput(event.target.value);
  }

  // const AddExpenseHandler = (task) =>{
  //   const taskNew = {
  //       ...task,
  //       id : Math.random().toString()
  //   }
  //   console.log(taskNew);
  //   // props.onAddExpense(expenseNew);
  // }

  const addToList = () =>{
    if (input.trim().length===0){
      return;
    }
    setTodos([...todos,{id : Math.random().toString(), title : input, status : false}]);
    setInput("");
  }

  

  return (
    <div className='toDo'>
      <div className='todo-head'>
        <h2>TO DO</h2>
        <img src = {image} alt = "img"  onClick={onSwitchMode} value={nightMode}></img>
      </div>
      <div className='todo-newtask'>
        <div className='newtask-data'>
          <input type="checkbox" className='checkbox-addItem' />
          <input type="text" className = "input-text" placeholder=" Create a todo..." value={input} onChange={inputChangeHandler}></input>
          <button onClick={addToList} style = {style} className = "button">Add to list</button>
          </div>
      </div>

        <div className='todo-list'>
          <ToDoList todos={todos} setTodos={setTodos} title={title} setTitle={setTitle}></ToDoList>
        </div>
      
    </div>
  )
}

export default ToDoBlock