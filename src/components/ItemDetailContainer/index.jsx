
import React, {useState, useEffect} from "react";

import ItemDetail from "../ItemDetail";

const detail = {
    id: 1,
    image: "https://www.posca.com/wp-content/uploads/2018/08/marron-8c3a0a-410x0-c-default.jpg",
    title: "marron"
};

export const ItemDetailContainer= () => {

    const [data, setData] = useState({});

    useEffect(() => {
        const getData = new Promise(resolve => {
            setTimeout(() => {
                resolve(detail);

            }, 2000);
        });

        getData.then(res => setData(res));

    }, [])

    return (
        
        <ItemDetail data={data} />
    )
}

export default ItemDetailContainer;
