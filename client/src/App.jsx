// import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Result from './pages/Result'
import ByCredit from './pages/ByCredit'
import Navbar from './components/Navbar'

const App = () => {
  return (
    <div className='min-h-screen bg-slate-50'>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/result' element={<Result />} />
        <Route path='/byCredit' element={<ByCredit />} />
      </Routes>
    </div>
  )
}

export default App