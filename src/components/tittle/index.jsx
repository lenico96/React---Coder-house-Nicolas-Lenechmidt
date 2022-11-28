import React from "react";



export const Title = (props) => {
    
    return (
        <div className="title">
        <h1>Comienzo de mi primer proyecto React!</h1>
        <h3>Nombre: {props.nombre}</h3>
        <p>Edad: {props.edad} </p>
        </div>
    )
}

export default Title;