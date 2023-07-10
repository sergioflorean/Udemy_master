import React, { useState } from "react";

const MiPrimerEstado = () => {

    //problematica
    /* let nombre = "Sergio"

    const cambiarNombre = (e) => {
        nombre = "Paquito Fernandez"

    } */

    const [nombre, setNombre] = useState("Sergio Floreán")
    const cambiarNombre = (e, nombreFijo) => {
        setNombre(nombreFijo)
        console.log(e.target.value)
    }

    const ValorEstado = e => {
        console.log(`el valor del estado es ${nombre}`);
    }

    return (
        <div>
            <h3>Componente: mi primer estado</h3>
            <strong className="label" className={nombre.length >= 4 ? 'verde' : 'rojo'}>{nombre}</strong>
            &nbsp;
            <button onClick={e => cambiarNombre(e, "Paquito")}>cambiar nombre por paquito </button>
            &nbsp;
            <input type="text" placeholder="Cambia el nombre" onChange={e => cambiarNombre(e, e.target.value)} />
            &nbsp;
            <button onClick={ValorEstado}>ValorEstado</button>
        </div>
    );
}

export default MiPrimerEstado;