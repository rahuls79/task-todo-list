import './App.css';
import Homepage from './Components/Homepage';
import {useState} from 'react'

function App() {

  // console.log(nightMode);

  const [nightMode,setNightMode] = useState(true);

  console.log(nightMode);


  return (
    <div className="App"  style = {{backgroundColor : !nightMode ? 'white' : 'black'}} >
      <Homepage nightMode = {nightMode} setNightMode = {setNightMode} />
    </div>
  );
}

export default App;
