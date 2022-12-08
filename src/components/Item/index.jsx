import React from "react";
import './item.css'
import { Link } from 'react-router-dom';


export const Item = ({info}) => {
    return (
        <div className="productos">
            <p>{info.tittle}</p>
        <Link to={`/detalle/${info.id}`} className="producto">
            <img src={info.image} alt="" />
            <div className="boton_detalles">
            <button class="button"> Detalles</button>
            
            </div>
        </Link>
        <div className="boton_comprar">
            <button class="button">Añadir al carro <i className="bi bi-cart"></i></button>
            
            </div>
        
        
        
        </div>
        
    )
}

export default Item;