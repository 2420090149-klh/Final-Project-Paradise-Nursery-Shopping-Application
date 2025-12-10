import React from 'react'
import { useNavigate } from 'react-router-dom'
import { useCart } from '../context/CartContext'

export default function Cart(){
  const { items, increase, decrease, removeFromCart, totalCount, totalPrice, clear } = useCart()
  const nav = useNavigate()

  return (
    <div>
      <h2>Your Cart</h2>
      <div style={{marginBottom:8}}>Total items: <strong>{totalCount}</strong></div>
      <div style={{marginBottom:8}}>Total cost: <strong>${totalPrice.toFixed(2)}</strong></div>

      {items.length===0 ? (
        <div className="card">Your cart is empty. <button className="btn" onClick={()=>nav('/products')}>Browse Plants</button></div>
      ) : (
        <>
          <div className="cart-list">
            {items.map(i=> (
              <div className="cart-item" key={i.id}>
                <img src={i.image} alt={i.name} />
                <div style={{flex:1}}>
                  <h3 style={{margin:'0 0 6px 0'}}>{i.name}</h3>
                  <div>Unit price: ${i.price.toFixed(2)}</div>
                  <div style={{marginTop:8,display:'flex',alignItems:'center',gap:12}}>
                    <div className="qty-controls">
                      <button className="btn small" onClick={()=>decrease(i.id)}>-</button>
                      <div style={{padding:'6px 10px',background:'#f5f5f5',borderRadius:6}}>{i.qty}</div>
                      <button className="btn small" onClick={()=>increase(i.id)}>+</button>
                    </div>
                    <div style={{marginLeft:12}}>Subtotal: <strong>${(i.price*i.qty).toFixed(2)}</strong></div>
                  </div>
                </div>
                <div style={{display:'flex',flexDirection:'column',gap:8}}>
                  <button className="btn small" onClick={()=>removeFromCart(i.id)}>Delete</button>
                </div>
              </div>
            ))}
          </div>
          <div className="total-row">
            <div><strong>Total ({totalCount} items)</strong></div>
            <div style={{textAlign:'right'}}>
              <div style={{fontSize:18,fontWeight:700}}>${totalPrice.toFixed(2)}</div>
              <div className="footer-actions" style={{marginTop:8}}>
                <button className="btn" onClick={()=>nav('/products')}>Continue Shopping</button>
                <button className="btn" onClick={()=>{alert('Checkout not implemented in this demo'); clear();}}>Checkout</button>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  )
}
