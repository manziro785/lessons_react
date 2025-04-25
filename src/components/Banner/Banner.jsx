import React from "react";
import "./Banner.css";
import img from "../../assets/react.svg";

export default function Banner() {
  return (
    <div>
      <div className="banner">
        <h1>
          Реакт топ! <br /> Юзайте компоненты{" "}
        </h1>
        <img src={img} alt="" />
      </div>
    </div>
  );
}
