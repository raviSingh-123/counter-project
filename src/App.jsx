import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [counter, setCounter] = useState(0)
   
  const addValue = ()=>{
    // console.log("clicked",counter);
    setCounter(counter+1);
  }

  const removeValue = ()=>{
    // console.log("clicked",counter);
    if(counter>0){
      setCounter(counter-1);
    }
  }

  const resetValue = ()=>{
    // console.log("clicked",counter);
    setCounter(counter-counter);
  }
  return (
    <>
      <h2>So start the first project that is counter with chai aur react by Hitesh sir</h2>
      <p>If you want to increase one value then clicked on add value.</p>
      <p>If you want to decrease one value then clicked on remove value.</p>
      <p>If you want counter value is 0  then clicked on reset.</p>
      <h3>Counter Value:{counter}</h3>

      <button onClick={addValue}>Add Value</button>
      <button onClick={removeValue}>Remove Value</button>
      <button onClick={resetValue}>Reset</button>
    </>
  )
}

export default App
