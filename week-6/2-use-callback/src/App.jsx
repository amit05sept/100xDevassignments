import { useState } from 'react'
import './App.css'
import { Assignment1 } from './components/Assignment1'
import { Assignment2 } from './components/Assignment2'

function App() {
  const [counter , setCounter] = useState(0);
  return (
    <>
    {/* <button  onClick={()=>setCounter(counter+1)}>click me {counter}</button> */}
      {/* <Assignment1 /> */}
      <Assignment2 />
    </>
  )
}

export default App
