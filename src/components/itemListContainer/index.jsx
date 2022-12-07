import React, {useState, useEffect} from "react";
import ItemCount from "../itemCount";
import Title from  '../tittle'
import ItemList from '../ItemList';

const productos = [
    {
        id: 1,
        image: "https://www.tomasaccesorios.com.ar/assets/img/product/chicas/w-450-1.jpg",
        tittle: "sombrero marron",
        
    },
    {
        id: 2,
        image: "https://www.tomasaccesorios.com.ar/assets/img/product/grandes/233-1.jpg",
        tittle: "sombrero rojo",
        
    },
    {
        id: 3,
        image: "https://www.ecured.cu/images/9/94/Hackers-llevan-sombrero-blanco-negro_EDIIMA20160414_0713_1.jpg",
        tittle: "sombrero gris",
        
    },
];



export const ItemListContainer = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        const getData = new Promise(resolve =>{
            setTimeout(() =>{
                resolve(productos);


            }, 2000);

            
        });

        getData.then(res => setData(res));

    }, [])


//boton agregar
    const onAdd = (quantity) => {
        console.log(`compraste ${quantity} unidades`)
    }

    return (
        <>
        <Title nombre="Nicolas" edad="25"/>

        <ItemCount initial={1} stock={9} onAdd={onAdd}/>

        <ItemList data={data}/>
        </>
        
        
        
        
    )
}

export default ItemListContainer;