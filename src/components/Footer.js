import React from "react";
import "./Footer.css"
import insta from "../imagens/img-Rede-sociais/instagram.png"
import whats from "../imagens/img-Rede-sociais/whatsapp (1).png"
import email from "../imagens/img-Rede-sociais/o-email.png"

function Footer() {
    return (
        <div className="footer">
            <div>
               <h3>informações</h3>
               <ul>
                <li>Produtos adicionados recentementes</li>
                <li>Produtos em promoção</li>
                <li>Confira o estoque</li>
               </ul>
            </div>
            <div>
                <h3>Sobre</h3>
                <ul>
                    <li>Quem somos nós</li>
                    <li>Serviços prestados</li>
                </ul>
            </div>
            <div>
                <img src={insta}/>
                <img src={whats}/>
                <img src={email}/>
            </div>
            
        </div>
    )
}
export default Footer;