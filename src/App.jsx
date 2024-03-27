import { useState } from 'react'
import Home from "./Home-Dashboard/home"
import Dash2 from './Second-Dashboard/dash2'
import './App.css'
import Calender from './Components/Calender'
import BasicModal from './Components/Modal'
import Modal2 from './Components/Modal2'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <Home/>

      
      <Dash2/>
      <div className='w-screen'>
      {/* <Calender/> */}
      <BasicModal/>
      <Modal2/>
      </div>
     
    </div>
  )
}

export default App
