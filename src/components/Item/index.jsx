import React from "react";
import './item.css'


export const Item = ({info}) => {
    return (
        <a href="" className="producto">
            <img src={info.image} alt="" />
            <p>{info.tittle}</p>

        </a>
        
    )
}

export default Item;