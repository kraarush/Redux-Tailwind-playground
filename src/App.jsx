import React from 'react'
import Navbar from './components/shared/Navbar'
import Hero from './components/shared/Hero'
import Analytics from './components/shared/Analytics'
import NewsLetter from './components/shared/NewsLetter'
import { Route, Routes } from 'react-router-dom'
import Contact from './components/shared/Contact'
import About from './components/shared/About'
import Home from './components/shared/Home'
import Counter from './features/counter/Counter'

const App = () => {
  return (
    <div>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/contact' element={<Contact/>} />
        <Route path='/about' element={<About/>} />
        <Route path='/counter' element={<Counter/>} />
      </Routes>
    </div>
  )
}

export default App