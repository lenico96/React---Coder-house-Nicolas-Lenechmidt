
import React, {useState, useEffect} from "react";

import ItemDetail from "../ItemDetail";

import { useParams } from 'react-router-dom';

const productos = [
    {
        id: 1,
        image: "https://jumboargentina.vtexassets.com/arquivos/ids/697095-800-auto?v=637858930495270000&width=800&height=auto&aspect=true",
        tittle: "Teclado RedDragon",
        category: 'teclados',
        
    },
    {
        id: 2,
        image: "https://mundofixar.vtexassets.com/arquivos/ids/565064-800-auto?v=638060364820170000&width=800&height=auto&aspect=true",
        tittle: "Teclado Razer",
        category: 'teclados',
        
    },
    {
        id: 3,
        image: "https://http2.mlstatic.com/D_NQ_NP_652011-MLA43691183894_102020-O.webp",
        tittle: "Auricular RedDragon",
        category: 'auriculares',
        
    },
    {
        id: 4,
        image: "https://http2.mlstatic.com/D_NQ_NP_636263-MLA51631372512_092022-O.webp",
        tittle: "Auricular Kotion",
        category: 'auriculares',
        
    },
];


export const ItemDetailContainer= () => {

    const [data, setData] = useState({});

    const {detalleId} = useParams();

    useEffect(() => {
        const getData = new Promise(resolve => {
            setTimeout(() => {
                resolve(productos);

            }, 1000);
        });

        getData.then(res => setData(res.find(producto => producto.id === parseInt(detalleId))));

    }, [])

    return (
        
        <ItemDetail data={data} />
    )
}

export default ItemDetailContainer;
