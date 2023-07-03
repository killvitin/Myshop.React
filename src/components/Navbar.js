import React from "react";
import './Navbar.css'
import home from "../imagens/img-Navbar/Home.png"
import comprar from "../imagens/img-Navbar/comprar.png"
import coracao from "../imagens/img-Navbar/coracao.png"
import login from "../imagens/img-Navbar/login.png"
import pesquisa from "../imagens/img-Navbar/pesquisa.png"

function Navbar() {
    return (
        <div class="container">
            <div class="logo">
                <img src={home} alt="" />
                <h1>My shop</h1>
            </div>
            <div class="menu">
                <nav class="menu-items">
                    <a href="#">Home</a>
                    <a href="#">Shop</a>
                    <a href="#">About</a>
                    <a href="#">Contact</a>
                </nav>
            </div>
            <div class="sociais">
              <button><img src={login} alt="" height="30" width="30"/></button>
              <button><img src={coracao} alt="" height="30" width="30"/></button>
              <button><img src={pesquisa} alt="" height="30" width="30"/></button>
              <button><img src={comprar} alt="" height="30" width="30"/></button> 
            </div>
        </div>
    )
}
export default Navbar;