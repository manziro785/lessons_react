import axios from "axios";
import { useState } from "react";
import Header from "../../components/Header/Header";
export default function RegisterPage() {
  const [email, setEmail] = useState("eve.holt@reqres.in");
  const [password, setPassword] = useState("pistol");

  const handleRegister = async () => {
    try {
      const res = await axios.post("https://reqres.in/api/register", {
        email,
        password,
      });
      alert("Успешно! Токен: " + res.data.token);
    } catch (err) {
      console.log(err);
      alert("Ошибка регистрации");
    }
  };

  return (
    <div className="container">
      <Header />
      <h2>Регистрация</h2>
      <form onSubmit={handleRegister}>
        <input
          className="form-control my-2"
          placeholder="Email"
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          className="form-control my-2"
          placeholder="Пароль"
          onChange={(e) => setPassword(e.target.value)}
        />
        <button className="btn btn-success" onClick={handleRegister}>
          Зарегистрироваться
        </button>
      </form>
    </div>
  );
}
