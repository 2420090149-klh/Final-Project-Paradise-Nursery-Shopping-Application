import React, { createContext, useContext, useEffect, useState } from 'react'

const CartContext = createContext()

export function useCart(){
  return useContext(CartContext)
}

export function CartProvider({children}){
  const [items, setItems] = useState(()=>{
    try{
      const raw = localStorage.getItem('pn_cart')
      return raw ? JSON.parse(raw) : []
    }catch(e){
      return []
    }
  })

  useEffect(()=>{
    localStorage.setItem('pn_cart', JSON.stringify(items))
  },[items])

  function addToCart(product){
    setItems(prev=>{
      const found = prev.find(i=>i.id===product.id)
      if(found){
        return prev.map(i=>i.id===product.id?{...i, qty:i.qty+1}:i)
      }
      return [...prev,{...product, qty:1}]
    })
  }

  function removeFromCart(id){
    setItems(prev=>prev.filter(i=>i.id!==id))
  }

  function increase(id){
    setItems(prev=>prev.map(i=>i.id===id?{...i, qty:i.qty+1}:i))
  }

  function decrease(id){
    setItems(prev=>prev.map(i=>{
      if(i.id!==id) return i
      const next = i.qty-1
      return next>0?{...i, qty:next}:i
    }).filter(Boolean))
  }

  function clear(){
    setItems([])
  }

  const totalCount = items.reduce((s,i)=>s+i.qty,0)
  const totalPrice = items.reduce((s,i)=>s + i.qty * i.price,0)

  const value = {items, addToCart, removeFromCart, increase, decrease, clear, totalCount, totalPrice}
  return <CartContext.Provider value={value}>{children}</CartContext.Provider>
}
