import { useState } from 'react'
import Home from "./Home-Dashboard/home"
import Dash2 from './Second-Dashboard/dash2'
import './App.css'
import Calender from './Components/Calender'
import BasicModal from './Components/Modal'
import Modal2 from './Components/Modal2'
import DayNoteModal from './Components/Modal3'
import NewTradeSetupModal from './Components/Modal4'
import MyCalendar from './Components/Calender'
import moment from 'moment';
const myEventsList = [
  {
    start: new Date(),
    end: new Date(moment().add(1, "days")),
    title: "Some title",
  },
  // Add more events as needed
];
function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='overflow-hidden'>
      <Home/>

      
      <Dash2/>
      <div className='w-screen bg-gray-800 h-screen'>
      {/* <Calender/> */}
      {/* <BasicModal/> */}
      <div className='flex gap-x-8'>
      <Modal2/>
      <DayNoteModal/>
      <NewTradeSetupModal/>
      </div>
      <br />
      <br />
      <MyCalendar events={myEventsList} />
      </div>
     
    </div>
  )
}

export default App
