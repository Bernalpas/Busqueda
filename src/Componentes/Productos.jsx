

import React, { useState } from 'react';
import AgregarProductos from './AgregarProductos';
import Coleccion from './Coleccion';

const Productos = () => {

    const [productos, setProductos] = useState([]);

    /*  const handleAgregar = () => {
        //setProductos([...productos, 'Galletitas']);  
        setProductos(['Galletitas', ...productos]);     
    }  */

    return (
        <div>
            <ol>
    {/*             {
                    productos.map(producto => {
                        return <li key={producto} >{ producto }</li>
                    })
                } */}
                
            </ol>  

            <AgregarProductos setProductos={setProductos}  />
            
            <Coleccion productos={productos}/>
        </div>
    )
}

export default Productos
