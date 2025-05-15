import React, { useEffect, useState } from "react";
import "../../basics/main.js";
import "./mainPage.css";
import Header from "../../components/Header/Header.jsx";
import Banner from "../../components/Banner/Banner.jsx";
import Cards from "../../components/Cards/Cards.jsx";
import axios from "axios";

export default function MainPage() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((res) => setUsers(res.data))
      .catch((err) => console.error("Ошибка:", err));
  }, []);
  return (
    <div>
      <Header />
      <Banner />
      <Cards />

      <h2>Пользователи:</h2>
      {users.map((user) => (
        <div key={user.id} className="card_user">
          <h5>{user.name}</h5>
          <p>{user.email}</p>
        </div>
      ))}
    </div>
  );
}
