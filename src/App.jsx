import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Landing from './pages/Landing'
import Products from './pages/Products'
import Cart from './pages/Cart'
import Header from './components/Header'

export default function App(){
  return (
    <div className="app-root">
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Landing/>} />
          <Route path="/products" element={<Products/>} />
          <Route path="/cart" element={<Cart/>} />
        </Routes>
      </main>
    </div>
  )
}
