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
    <div>
      <Home/>

      
      <Dash2/>
      <div className='w-screen'>
      {/* <Calender/> */}
      <BasicModal/>
      <Modal2/>
      <DayNoteModal/>
      <NewTradeSetupModal/>
      <MyCalendar events={myEventsList} />
      </div>
     
    </div>
  )
}

export default App
