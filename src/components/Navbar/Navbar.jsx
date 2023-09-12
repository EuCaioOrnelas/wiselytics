// import icons
import { LuLayoutDashboard } from "react-icons/lu";
import { MdVideoLibrary } from "react-icons/md";
import { AiFillCalculator } from "react-icons/ai";
import { FiSettings } from "react-icons/fi";
import { FiHeadphones } from "react-icons/fi";
import { AiFillCaretDown } from "react-icons/ai";
import { HiMenu } from "react-icons/hi";
import { HiOutlineX } from "react-icons/hi";

import "./navbar.css";
import { Link } from "react-router-dom";

export default function Navbar() {
  // Funcionamento da Navbar
  function menuShow() {
    let navbar = document.querySelector(".navbar");
    let menu = document.querySelector(".menu");
    let menuclose = document.querySelector(".menuClose");

    if (navbar.classList.contains("open")) {
      navbar.classList.remove("open");
      menu.classList.remove("open");
    } else {
      navbar.classList.add("open");
      menu.classList.add("open");
    }
  }

  // Funcionamento do submenu de preço teto
  function menuprecoteto() {
    let submenunavbar = document.querySelector(".submenuPrecoTeto");

    if (submenunavbar.classList.contains("open")) {
      submenunavbar.classList.remove("open");
    } else {
      submenunavbar.classList.add("open");
    }
  }

  return (
    <>
      <nav>
        <div className="navbar">
          <div className="navbarLogo">
            <img src="https://i.im.ge/2023/09/11/6ukZX8.wisefy-removebg-preview.png" />
            <h2>Wiselytics</h2>
          </div>
          <div className="navgation">
            <div className="linksRouter">
              <ul>
                <Link to="/home">
                  <li>
                    <LuLayoutDashboard className="iconColor" />{" "}
                    <span>Dashboard</span>
                  </li>
                </Link>
                <li onClick={menuprecoteto}>
                  <AiFillCalculator className="iconColor" />{" "}
                  <span>Preço Teto</span>
                  <AiFillCaretDown className="iconMenu" />
                </li>
                <div className="submenuPrecoTeto">
                  <Link to="/precotetoacoes">Ações</Link>
                  <Link to="/precotetofiis">FIIS</Link>
                  <Link to="/planilhageral">Planilha Geral</Link>
                </div>
                <Link to="/cursos">
                  <li>
                    <MdVideoLibrary className="iconColor" />{" "}
                    <span>Cursos </span>
                  </li>
                </Link>
                <li>
                  <FiSettings className="iconColor" />{" "}
                  <span>Configurações</span>
                </li>
                <Link to="/ajuda">
                  <li>
                    <FiHeadphones className="iconColor" /> <span>Ajuda</span>
                  </li>
                </Link>
              </ul>
            </div>
          </div>
        </div>
        <div>
          <HiMenu size={35} onClick={menuShow} className="menu" />
          <HiOutlineX size={35} className="menuClose" />
        </div>
      </nav>
    </>
  );
}
