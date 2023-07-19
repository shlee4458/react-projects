import React from "react";
import Navbar from './Navbar.jsx'
import Hero from './Hero.jsx'
import Card from './Card.jsx'
import data from '../data.js'

export default function App() {

    const cardsElement = data.map(card => {
        return <Card
          key={card.id}
          img={card.coverImg}
          rating={card.stats.rating}
          count={card.stats.reviewCount}
          location={card.location}
          quote={card.title}
          price={card.price}
          openspots={card.openSpots}

        // {...card}; this will auto assign coverImg = card.cover,
        // props.stats.rating = card.stats.rating 
        />
      })

    return (
        <div>
            <Navbar />
            <Hero />
            {/* Take the array of Card Components and render */}
            <section className="cards__list">
                {cardsElement}
            </section>
        </div>
    )
}