// IMPORT CSS STYLE //
import "./login.css";
import styles from "./Login.module.css";
import { Link } from "react-router-dom";

export default function Login() {
  function logar() {
    let email = document.getElementById("email").value;
    let senha = document.getElementById("password").value;

    if (email == "wiselytics@gmail.com" && senha == "admin123") {
      location.href = "/home";
    } else {
      window.alert("Usuario ou senha, Incorretos.");
    }
  }

  return (
    <>
      <div className="sectionLogin">
        <img
          src="https://i.im.ge/2023/09/10/6lo7Kz.Design-sem-nome-2023-09-10T115902-035-removebg-preview.png"
          alt="Logo"
        />
        <div className="boxLogin">
          <div className="titleLogin">
            <h1>acessar conta</h1>
          </div>
          <div className="sectionEmail">
            <input type="email" id="email" placeholder="E-mail" />
          </div>
          <div className="sectionPassword">
            <input type="password" id="password" placeholder="Senha" />
          </div>
          <div className="button">
            <button className={styles.buttonLogin} onClick={logar}>
              Entrar
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
