import React from 'react'
import { CircularProgressbar, buildStyles} from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

const percentage = 66;

const hero1 = () => {
  return (
    <div className='flex justify-evenly align-center pt-8'>
      <div className='flex justify-center align-center flex-col'>
        <div className='py-3 text-center w-44 h-14 bg-[#2E313F] rounded-full flex justify-between align-center border-gray-700 border-2'>
            <h1 className='text-lg text-[#9C9FAF] font-bold ml-4'>WINS</h1>
            <h1 className='text-xl text-[#52CA96] font-semibold mr-12'>2</h1>
        </div>
        <div className='py-3 mt-3 text-center w-44 h-14 bg-[#2E313F] rounded-full flex justify-between align-center border-gray-700 border-2'>
            <h1 className='text-lg text-[#9C9FAF] font-bold ml-4'>LOSSES</h1>
            <h1 className='text-xl text-[#EB4B68] font-semibold mr-12'>2</h1>
        </div>
      </div>
      <div className='w-12 h-12'>
      <CircularProgressbar value={percentage} text={`${percentage}%`} 
      styles={{
        root: {},
        path: {
          stroke: `#52CA96`,
          strokeLinecap: 'butt',
          transition: 'stroke-dashoffset 0.5s ease 0s',
          transformOrigin: 'center center',
        },
        trail: {
          stroke: '#2E313F',
          strokeLinecap: 'butt',
          transformOrigin: 'center center',
        },
        text: {
          fill: '#9C9FAF',
          fontSize: '30px',
        },
        background: {
          fill: '#3e98c7',
        },
      }}
      />;
      </div>
      <div></div>
      <div></div>
    </div>
  )
}

export default hero1
