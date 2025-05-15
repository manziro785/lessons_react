import React from "react";
import logo from "../../assets/react.svg";
import "./Header.css";
import { NavLink } from "react-router-dom";

export default function Header() {
  return (
    <div>
      <header>
        <div>
          <a href="">
            <img src={logo} alt="" />
          </a>
        </div>
        <div>
          <a href="/">О нас</a>
          <a href="/">Контакты</a>
          <NavLink to="/login">Логин</NavLink>
          <NavLink to="/register">Регистрация</NavLink>
        </div>
      </header>
    </div>
  );
}
