import React from 'react'
import { useCart } from '../context/CartContext'

export default function ProductCard({product}){
  const { addToCart } = useCart()
  return (
    <div className="card">
      <img src={product.image} alt={product.name} />
      <h3>{product.name}</h3>
      <div className="row">
        <div style={{fontWeight:700}}>${product.price.toFixed(2)}</div>
        <button className="btn small" onClick={()=>addToCart(product)}>Add to Cart</button>
      </div>
    </div>
  )
}
