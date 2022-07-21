import React from 'react'
import './App.css'
import Home from './pages/Home'
import Create from './pages/Create'
import Explore from './pages/Explore'
import About from './pages/About'
import { Routes, Route } from 'react-router-dom'
import { PizzaProvider } from './context/pizzaContext'

function App() {
  return (
    <PizzaProvider>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/create' element={<Create />} />
        <Route path='/explore' element={<Explore />} />
        <Route path='/about' element={<About />} />
      </Routes>
    </PizzaProvider>
  )
}

export default App
