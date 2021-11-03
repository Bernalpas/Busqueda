


import React, { useState } from 'react'

const AgregarProductos = ({setProductos}) => {

    const [input, setInput] = useState('Introduzca un Nuevo Producto');


    const handleChange = (e) => {
        setInput(e.target.value);
        console.log(input);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        if(input.trim().length >= 2){
            //setProductos([...productos, input]);
            setProductos(input);
            setInput('');
        }
        console.log('Producto Guardado');
    }

    return (
        <div>
            <h1>Agregar Productos</h1>
            <form onSubmit={handleSubmit}>
                <input 
                    type="text" 
                    value={input}
                    onChange={handleChange}                     
                />
            </form>

            {/* Traer el boton desde Productos */}

            <button type="button" className="btn btn-danger w-50">Agregar Producto</button>
            
        </div>
    )
}

export default AgregarProductos;
