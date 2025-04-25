import React from "react";
import "../../basics/main.js";
import Header from "../../components/Header/Header.jsx";
import Banner from "../../components/Banner/Banner.jsx";
import Cards from "../../components/Cards/Cards.jsx";

export default function MainPage() {
  return (
    <div>
      <Header />
      <Banner />
      <Cards />
    </div>
  );
}
