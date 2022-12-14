import React, { useState } from 'react'
import "./ToDo.css"



function ToDo({todo}) {

    let title = (todo.title)

    var style1 ={
        textDecoration : 'none'
    }

    const [count,setCount] = useState(1)
    const [style,setStyle] = useState(style1)

    

    var style2 = {
        textDecoration: 'line-through'
    }


    const checkboxClickHandler = () =>{
        setCount(count+1)
        if(count%2 !==0){
            setStyle(style2);
        }
        else{
            setStyle(style1);
        }
        console.log(count)
    }

  return (
    <div className='todo-itemDetail'>
        <input type="checkbox" className='checkbox-list' onClick={() => checkboxClickHandler()}/>
        <p style={style}>{title}</p>
    </div>
  )
}

export default ToDo