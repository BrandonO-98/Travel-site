import React from "react";
import Hero from "../Hero.js";
import Card from "../Card.js";
import cardData from "../cardData.js";
import Footer from "../Footer.js";
import "./Home.css";

function Home() {
  return (
    <div className='home-container'>
      <Hero />
      <div className='cards-container-container'>
        <div className='cards-container'>
          {cardData.map((item) => (
            <Card key={item.id} obj={item} />
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Home;
