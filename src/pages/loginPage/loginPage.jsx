import axios from "axios";
import { useState } from "react";
import Header from "../../components/Header/Header";
export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async () => {
    try {
      const res = await axios.post("https://reqres.in/api/login", {
        email,
        password,
      });
      localStorage.setItem("token", res.data.token);
      alert("Вход выполнен!");
    } catch {
      alert("Ошибка входа");
    }
  };

  return (
    <div className="container">
      <Header />
      <h2>Вход</h2>
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
      <button className="btn btn-primary" onClick={handleLogin}>
        Войти
      </button>
    </div>
  );
}
