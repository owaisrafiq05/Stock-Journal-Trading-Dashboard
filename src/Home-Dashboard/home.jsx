import React from 'react'
import Hero1 from './hero1'
import Hero2 from './hero2'

const home = () => {
  return (
    <div className='bg-gray-800 w-100 h-screen'>
      <Hero1/>
      <br />
      <br />
      <Hero2/>
    </div>
  )
}

export default home
