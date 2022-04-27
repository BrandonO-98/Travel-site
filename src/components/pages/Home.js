import React from "react";
import "../../App.css";
import Hero from "../Hero.js";
import Card from "../Card.js";
import cardData from "../cardData.js";
import "./Home.css";

function Home() {
  const cardElement = cardData.map((item) => <Card key={item.id} obj={item} />);
  return (
    <div className='home-container'>
      <Hero />
      <div className='cards-container-container'>
        <div className='cards-container'> {cardElement}</div>
      </div>
    </div>
  );
}

export default Home;
