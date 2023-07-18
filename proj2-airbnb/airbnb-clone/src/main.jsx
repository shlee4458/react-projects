import React from 'react'
import ReactDOM from 'react-dom/client'
import Navbar from './components/Navbar.jsx'
import Hero from './components/Hero.jsx'
import Card from './components/Card.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Navbar />
    <Hero />
    <Card 
      img="card1.png"
      rating="5.0"
      count={6}
      country="USA"
      quote="Life lessons with Zafre"
      price={136}
    />
  </React.StrictMode>,
)
