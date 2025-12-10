import React from 'react'
import { Link } from 'react-router-dom'

export default function Landing(){
  return (
    <section className="landing">
      <div className="container">
        <h2 style={{fontSize:38,marginTop:0}}>Welcome to Paradise Nursery</h2>
        <p style={{fontSize:18,lineHeight:1.5}}>We bring green life to your home. Explore a curated selection of houseplants for every space and skill level — from easy-care succulents to dramatic tropicals.</p>
        <p>
          <Link to="/products"><button className="btn">Get Started</button></Link>
        </p>
      </div>
    </section>
  )
}
