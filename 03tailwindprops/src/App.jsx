import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Card from "./components/Card"
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  let object = {
    name:"mohsin",
    fatherName:"raza",
    nationality:"pakistan"
  };

  let newArr = [1,23,5,5,6]

  return (
    <>
     <h1 className='bg-red-400 text-black p-4 rounded-xl mb-4 '>Tailwind test</h1>

     <Card userName="Mohsin" btnText="Click me"/>
     <Card userName="Raza" />
    </>
  )
}

export default App
