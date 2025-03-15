import React from 'react'
import Typed from './Typed'

const About = () => {
  return (
    <div className='flex flex-col font-bold h-screen items-center justify-center text-center text-5xl mt-[-100px] text-white'>
        <h1>Hello from About Route</h1>
        <Typed/>
    </div>
  )
}

export default About