import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import { useCart } from '../context/CartContext'

export default function Header(){
  const { totalCount } = useCart()
  const loc = useLocation()

  return (
    <header className="header">
      <div className="brand">
        <img src="https://images.unsplash.com/photo-1501004318641-b39e6451bec6?auto=format&fit=crop&w=80&q=60" alt="logo" style={{width:44,height:44,objectFit:'cover',borderRadius:8}}/>
        <div>
          <h1>Paradise Nursery</h1>
          <div style={{fontSize:12,color:'#666'}}>Houseplants & Joy</div>
        </div>
      </div>
      <div className="nav">
        {loc.pathname !== '/products' && <Link to="/products">Products</Link>}
        {loc.pathname !== '/cart' && <Link to="/cart">Cart</Link>}
        <Link to="/cart"><span className="cart-badge">🛒 <strong style={{marginLeft:6}}>{totalCount}</strong></span></Link>
      </div>
    </header>
  )
}
