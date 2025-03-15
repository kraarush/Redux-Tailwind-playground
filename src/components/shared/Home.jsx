import React from 'react'
import Hero from './Hero'
import Analytics from './Analytics'
import NewsLetter from './NewsLetter'
import Counter from '@/features/counter/Counter'

const Home = () => {
  return (
    <div>
        <Hero/>
        <Analytics/>
        <NewsLetter/>
    </div>
  )
}

export default Home