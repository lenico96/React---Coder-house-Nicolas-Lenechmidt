import React, {useState} from "react";
import './itemDetail.css';
import ItemCount from "../itemCount";
import { Link } from "react-router-dom";
import { useCartContext } from "../../context/CartContext";

export const ItemDetail = ({data}) => {
    
    const [goToCart, setGoToCart] = useState(false);
    const {addProduct} = useCartContext();
    
    const onAdd = (quantity) => {
        setGoToCart(true);
        addProduct(data, quantity);
    }

    return (
        
        <div className="contenedor_detalles">
            <div className="imagenes_detalles">
                <img src={data.image} alt="" />
            </div>
            <div className="titulo_detalles">
                <h1>{data.tittle}</h1>
                {
                    goToCart 
                    
                     ? <Link to='/cart'>Terminar compra</Link>
                     : <ItemCount initial={1} stock={9} onAdd={onAdd}/>
                }
            </div>
            
        </div>
    )
}

export default ItemDetail;