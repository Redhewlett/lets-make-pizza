import React from 'react'
import './App.css'
import Home from './pages/Home'
import Create from './pages/Create'
import { Routes, Route } from 'react-router-dom'
import Switch from 'react-router'

function App() {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/create' element={<Create />} />
    </Routes>
  )
}

export default App
