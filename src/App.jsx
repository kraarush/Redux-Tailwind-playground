import React from 'react'
import Navbar from './components/shared/Navbar'
import Hero from './components/shared/Hero'
import Analytics from './components/shared/Analytics'
import NewsLetter from './components/shared/NewsLetter'

const App = () => {
  return (
    <div>
      <Navbar/>
      <Hero />
      <Analytics/>
      <NewsLetter />
    </div>
  )
}

export default App