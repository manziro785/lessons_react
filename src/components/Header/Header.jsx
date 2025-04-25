import React from "react";
import logo from "../../assets/react.svg";
import "./Header.css";

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
          <a href="/">Логин</a>
        </div>
      </header>
    </div>
  );
}
