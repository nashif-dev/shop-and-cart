import React from 'react'
import './App.css'
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Cart from './pages/Cart'
import Wishlist from './pages/Wishlist'
import Views from './pages/Views'
import Pnf from './pages/Pnf'
import Footer from './components/Footer'

function App() {

  return (
    <>
    <Routes>
      <Route path='/' element={<Home/>} />
      <Route path='/cart' element={<Cart/>} />
      <Route path='/wishlist' element={<Wishlist/>} />
      <Route path='/views' element={<Views/>} />
      <Route path='/*' element={<Pnf/>} />
    </Routes>
    <Footer/>
    </>
  )
}

export default App
