import { useState } from 'react'
import Home from "./Home-Dashboard/home"
import Dash2 from './Second-Dashboard/dash2'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <Home/>

      
      <Dash2/>
    </div>
  )
}

export default App
