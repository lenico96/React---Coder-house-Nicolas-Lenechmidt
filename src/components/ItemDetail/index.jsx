import React from "react";
import './itemDetail.css'

export const ItemDetail = ({data}) => {
    return (
        
        <div className="contenedor_detalles">
            <div className="imagenes_detalles">
                <img src={data.image} alt="" />
            </div>
            <div className="titulo_detalles">
                <h1>{data.tittle}</h1>
            </div>
            
        </div>
    )
}

export default ItemDetail;