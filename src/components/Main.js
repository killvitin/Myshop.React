import React from "react";
import styles from "./Main.css"
import cozinha from "../imagens/img-Main/cozinha.jpg"
import ProductCard from "./UserCards/ProductCard";
import sala from "../imagens/img-Main/Products-desc/sala.jpg"
import Quarto from "../imagens/img-Main/Products-desc/quarto.jpg"
import corredor from "../imagens/img-Main/Products-desc/corredor.jpg"


function Main() {
    return(
        <div className="main">
            <img className="img-cozinha" src={cozinha} alt="" />
            <div className="texto">
                <h1 className="texto texto-1">Produtos exclusivos</h1>
                <h5 className="texto texto-2">Nâo perca tempo,acesse e corra para Garantir o seu produto que só aqui você encontra</h5>
            </div>
            <div className="main-cards">
                <ProductCard
               imagem={sala}
               name="sala"
               info="oferta exclusiva"
               valor="R$ 299,00"
                />
              <ProductCard
               imagem={Quarto}
               name="Quarto"
               info="oferta exclusiva"
               valor="R$ 579,00"
                />
              <ProductCard
               imagem={corredor}
               name="Corredor"
               info="oferta exclusiva"
               valor="R$ 179,00"
                /> 
            </div>
            <div className="container-slider">
                <div className="textoSlider">
                    <h1>confiraa</h1>
                    <h4>Esse estão quase acabando</h4>
                </div>
                <ul className="slider">
                    <li>
                        <input type="radio" id="slide1" name="slide" checked />
                        <label for="slide1"></label>
                        <img src={sala}/>
                    </li>
                    <li>
                        <input type="radio" id="slide2" name="slide"/>
                        <label for="slide2"></label>
                        <img src={corredor}/>
                    </li>
                </ul>
            </div>
           
        </div>
    )
}
export default Main;