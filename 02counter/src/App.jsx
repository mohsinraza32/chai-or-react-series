import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  
  let [counter, setCounter]  = useState(0)

  // let counter = 15;

  const addValue = () => {
    // console.log("clicked" , counter);
    // counter = counter + 1

    setCounter(counter + 1)
    
    }
    
  const removeValue = () => {
    setCounter(counter - 1)
  }

  const resetValue = () => {
    setCounter(counter === 0)
  }
  return (
    <>
      <h1>Counter App with React</h1>
      <h2>Counter Value: {counter}</h2>
      <br />
      <button
       onClick={addValue} 
      >Add Value</button>
      <button
       onClick={removeValue}
      >Remove Value</button>
      <button onClick={resetValue}>Reset</button>
      
    </>
  )
}

export default App
