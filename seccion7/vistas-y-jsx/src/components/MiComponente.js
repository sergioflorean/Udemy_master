import React, {Fragment} from "react";

const MiComponente = () => {

    const nombre = "sergio";
    const web = "sergioflorean.com"
    
    const usuario = {
        nombre: "sergio",
        apellidos: "florean chavez",
        web: "sergioflorean.com"
    }
    console.log("🚀 ~ file: MiComponente.js:13 ~ MiComponente ~ usuario:", usuario)

    return (
        <>
            
            <h2>Componente creado</h2>
            <h3>Datos del usuario</h3>
            <ul>
                <li>Nombre: <strong>{usuario.nombre}</strong></li>
                <li>Apellidos: <strong>{usuario.apellidos}</strong></li>
                <li>Web: <strong>{usuario.web}</strong></li>
                
            </ul>
            <p>Este es mi primerisimo componente</p>
            <ul>
                <li>React</li>
                <li>Angular</li>
                <li>Vue </li>
            </ul>

        </>
    );

}

export default MiComponente;