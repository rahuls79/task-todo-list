import React from 'react'

import darkimg from "../images/bg-desktop-dark.jpg"
import lightimg from "../images/bg-desktop-light.jpg"


function BackgroundMode({nightMode,setNightMode}) {
  if (nightMode){
    return(
        <img src = {darkimg} alt = "dark" />
    )
  }
  if (!nightMode){
    return(
        <img src = {lightimg} alt ="light" />
    )
  }
}


export default BackgroundMode;