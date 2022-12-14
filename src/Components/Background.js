import React from 'react';
import "./Background.css";
import BackgroundMode from "./BackgroundMode";

function Background({nightMode}) {


  return (
    <div className='background'>
      <div className='image'>
        {/* <img src = {darkbg} alt = "darkbg" /> */}
        <BackgroundMode nightMode={nightMode}/>
      </div>      
    </div>
  )
}

export default Background;