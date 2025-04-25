import React from "react";
import "./Cards.css";
import img from "../../assets/react.svg";

export default function Cards() {
  const cards = [
    { id: 1, title: "card1" },
    { id: 2, title: "card2" },
    { id: 3, title: "card3" },
  ];

  return (
    <div>
      <div className="cards">
        {cards.map((card) => (
          <div className="card" key={card.id}>
            {card.title}
            <img src={img} alt="" />
          </div>
        ))}
      </div>
    </div>
  );
}
