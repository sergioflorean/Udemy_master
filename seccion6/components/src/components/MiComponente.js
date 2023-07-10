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
            <hr />
            <h2>componente creado</h2>
            <h3>datos del usuario</h3>
            <ul>
                <li>nombre: <strong>{usuario.nombre}</strong></li>
                <li>Apellidos: <strong>{usuario.apellidos}</strong></li>
                <li>web: <strong>{usuario.web}</strong></li>
                
            </ul>
            <p>este es mi primer componente</p>
            <ul>
                <li>hola</li>
                <li>angular</li>
                <li>vue </li>
            </ul>

        </>
    );

}

export default MiComponente;