import Header from "../../components/Header/Header";

export default function ProfilePage() {
  const token = localStorage.getItem("token");

  if (!token) {
    return <p>Вы не авторизованы!</p>;
  }

  return (
    <div>
      <Header />
      <h2>Личный кабинет</h2>
      <p>Вы авторизованы с токеном: {token}</p>
    </div>
  );
}
