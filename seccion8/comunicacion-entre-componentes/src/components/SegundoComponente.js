import React from "react";

const SegundoComponente = () => {
    const libros = ["libro 1", "libro 2", "libro 3"]
    // const libros = [];

    return (
        <div className="segundo-componente">
            <h1>listado de libros</h1>
            {libros.length >= 1 ? (
                <ul>
                    {
                        libros.map((libro, index) => {
                            return <li key={index}>{libro}</li>
                        })
                    }
                </ul>)
                : (
                    <p>no hay libros</p>
                )
            }

        </div>
    );

}

export default SegundoComponente;