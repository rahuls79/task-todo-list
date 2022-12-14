import React from 'react'
import Background from './Background'
import ToDoBlock from './ToDoBlock'
import "./Homepage.css";

function Homepage({nightMode,setNightMode}) {


  // const onSwitchMode = () =>{
  //   setNightMode(!nightMode);
  //   console.log("homepage")
  // }

  return (
    <div className='homepage'>
        <Background nightMode={nightMode}/>
        <ToDoBlock nightMode = {nightMode} setNightMode= {setNightMode} />
    </div>
  )
}

export default Homepage;