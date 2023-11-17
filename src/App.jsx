import {BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import React from 'react'
import './App.css'
import Login from './pages/Login'
import Register from './pages/Register'


function App() {
  return (
    // <Router>
    //   <Routes>
    //     <Route path='/' element={<Login/>} />
    //     <Route path='/re' element={<Register/>} />
    //   </Routes>
    // </Router>
    <Router>
      <Routes>
        <Route path='/' element={<Login/>}></Route>
        <Route path='/register' element={<Register/>}></Route>
      </Routes>
    </Router>
  )
}

export default App