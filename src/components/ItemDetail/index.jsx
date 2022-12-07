import React from "react";

export const ItemDetail = ({data}) => {
    return (
        
        <div>
            <div>
                <img src={data.image} alt="" />
                <div>
                    <h1>{data.title}</h1>
                </div>
            </div>
        </div>
    )
}

export default ItemDetail;