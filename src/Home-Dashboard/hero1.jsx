import React from 'react'
import { CircularProgressbar, buildStyles} from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import ChartComponent from './ChartComponent';

const percentage = 67;
const percentage2 = 33;
const percentage3 = 0;
const percentage4 = 0;
const percentage5 = 10;
const percentage6 = 4;

const hero1 = () => {
  return (
    <div className='inline md:flex md:justify-evenly md:items-center lg:flex lg:justify-evenly lg:items-center pt-8'>
      <div className='w-[100%] lg:w-[30%]'>
        <ChartComponent/>
      </div>
      
    <div className='flex w-[100%] md:w-[70%] lg:w-[70%] justify-evenly items-center pt-8'>
      {/* part 1 */}
      <div className='flex justify-center items-center flex-col gap-y-2'>
        <div className='flex justify-around gap-x-4 items-center'>
          <div className='py-3 text-center w-44 h-14 bg-[#2E313F] rounded-full flex justify-between items-center border-gray-700 border-2'>
              <h1 className='text-lg text-[#9C9FAF] font-bold ml-4'>WINS</h1>
              <h1 className='text-xl text-[#52CA96] font-semibold mr-12'>2</h1>
          </div>
          <div className='w-12 h-12 my-auto'>
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
                transform: 'rotate(0.25turn)',
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
        </div>
        <div className='flex justify-around gap-x-4 items-center'>
            <div className='py-3  text-center w-44 h-14 bg-[#2E313F] rounded-full flex justify-between items-center border-gray-700 border-2'>
                <h1 className='text-lg text-[#9C9FAF] font-bold ml-4'>LOSSES</h1>
                <h1 className='text-xl text-[#EB4B68] font-semibold mr-12'>2</h1>
            </div>
            <div className='w-12 h-12 my-auto'>
            <CircularProgressbar value={percentage2} text={`${percentage2}%`} 
            styles={{
              root: {},
              path: {
                stroke: `#EB4B68`,
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
        </div>
      </div>


      {/* part 2 */}
      <div className='flex justify-center items-center flex-col gap-y-2'>
        <div className='flex justify-around gap-x-4 items-center'>
          <div className='py-3 text-center w-44 h-14 bg-[#2E313F] rounded-full flex justify-between items-center border-gray-700 border-2'>
              <h1 className='text-lg text-[#9C9FAF] font-bold ml-4'>OPEN</h1>
              <h1 className='text-xl text-[#52CA96] font-semibold mr-12'>0</h1>
          </div>
          <div className='w-12 h-12 my-auto'>
            <CircularProgressbar value={percentage3} text={`${percentage3}%`} 
            styles={{
              root: {},
              path: {
                stroke: `#52CA96`,
                strokeLinecap: 'butt',
                transition: 'stroke-dashoffset 0.5s ease 0s',
                transformOrigin: 'center center',
              },
              trail: {
                stroke: '#9C9FAF',
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
        </div>
        <div className='flex justify-around gap-x-4 items-center'>
            <div className='py-3  text-center w-44 h-14 bg-[#2E313F] rounded-full flex justify-between items-center border-gray-700 border-2'>
                <h1 className='text-lg text-[#9C9FAF] font-bold ml-4'>WASH</h1>
                <h1 className='text-xl text-[#52CA96] font-semibold mr-12'>0</h1>
            </div>
            <div className='w-12 h-12 my-auto'>
            <CircularProgressbar value={percentage4} text={`${percentage4}%`} 
            styles={{
              root: {},
              path: {
                stroke: `#EB4B68`,
                strokeLinecap: 'butt',
                transition: 'stroke-dashoffset 0.5s ease 0s',
                transformOrigin: 'center center',
              },
              trail: {
                stroke: '#9C9FAF',
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
        </div>
      </div>


      {/* part 3 */}
      <div className='flex justify-center items-center flex-col gap-y-2'>
        <div className='flex justify-around gap-x-4 items-center'>
          <div className='py-3 text-center w-44 h-14 bg-[#2E313F] rounded-full flex justify-between items-center border-gray-700 border-2'>
              <h1 className='text-lg text-[#9C9FAF] font-bold ml-4'>AVG W</h1>
              <h1 className='text-xl text-[#52CA96] font-semibold mr-8'>$146</h1>
          </div>
          <div className='w-12 h-12 my-auto'>
            <CircularProgressbar value={percentage5} text={`${percentage5}%`} 
            styles={{
              root: {},
              path: {
                stroke: `blue`,
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
        </div>
        <div className='flex justify-around gap-x-4 items-center'>
            <div className='py-3  text-center w-44 h-14 bg-[#2E313F] rounded-full flex justify-between items-center border-gray-700 border-2'>
                <h1 className='text-lg text-[#9C9FAF] font-bold ml-4'>AVG L</h1>
                <h1 className='text-xl text-[#EB4B68] font-semibold mr-8'>-$198</h1>
            </div>
            <div className='w-12 h-12 my-auto'>
            <CircularProgressbar value={`${percentage6}`} text={`-${percentage6}%`} 
            styles={{
              root: {},
              path: {
                stroke: `#EB4B68`,
                strokeLinecap: 'butt',
                transition: 'stroke-dashoffset 0.5s ease 0s',
                transformOrigin: 'center center',
              },
              counterClockwise: 'true',
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
        </div>
      </div>

      <div className='flex items-center'>
      <div className='flex justify-center align-start flex-col px-8 bg-[#2E313F] rounded-3xl border-gray-700 border-2 py-2'>
          <h1 className='text-xl text-left text-[#9C9FAF] font-semibold mr-40'>PnL</h1>
          <h1 className='text-center text-2xl font-semibold text-[#52CA96]'>$94.00</h1>
          <div className='px-8 bg-[#52CA9633] rounded-full mx-auto mt-2'><p className='text-white text-left mx-0 font-semibold'>0.0%</p></div>
      </div>
      </div>            
      </div>


    </div>
  )
}

export default hero1
