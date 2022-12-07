
import React, { useState } from "react";
import './itemCount.css'

export const ItemCount = ({initial, stock, onAdd}) => {
//sumar o restar en el contador
    const [count, setCount] = useState(initial)

    const decrease = () => {
        setCount(count - 1);
    } 
    
    const increase = () => {
        setCount(count + 1);
    }   

    return (
        <div className="count">
            <button disabled={count <= 1} onClick={decrease}>-</button>
            <span>{count}</span>
            <button disabled={count >= stock} onClick={increase}>+</button>
            <div>
                <button disabled={stock <= 0} onClick={() => onAdd(count)}>Agregar<i className="bi bi-cart"></i></button>
            </div>
        </div>
        
        
    )
}

export default ItemCount;