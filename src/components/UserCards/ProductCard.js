import React from "react";
import './ProductCard.css'


function ProductCard({imagem,name,info,valor}) {
    return(
        <div className="productsMain">
            <img src={imagem} alt="" />
            <strong>{name}</strong>
            <span>{info}</span>
            <h3>{valor}</h3>
            <button>Comprar</button>
        </div>
    )
}export default ProductCard;