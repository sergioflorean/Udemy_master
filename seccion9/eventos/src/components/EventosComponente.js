import React from "react";

const EventosComponente = () => {
    const handleClick = (e, nombre) => {
        console.log(`has dado click al boton ${nombre}`)
    }

    const handleDoubleClick = (e, nombre) => {
        console.log(`has dado doble click al boton ${nombre}`)
    }

    const hasEntrado = (e, accion) => {
        console.log(`has ${accion}  a caja`)
    }

    const handleOnFocus = e =>{
        console.log("estar dentro del input escribe tu nombre!");
    }

    const handleOnBlur = e =>{
        console.log("estar fuera del input BYE");
    }


    return (
        <div>
            <h1>Eventos en react</h1>
            <p>
                {/* evento click  */}
                <button onClick={e => handleClick(e, "Sergio")}>click me!</button>
            </p>
            <p>
                {/* evento doble click  */}
                <button onDoubleClick={e => handleDoubleClick(e, "Sergio")}>double click me!</button>
            </p>
            <div id="caja" onMouseEnter={e => hasEntrado(e, " entrado")} onMouseLeave={e => hasEntrado(e," salido")}>
                {/* evento on mouse enter on mouse leave */}
                pasa por encima
            </div>

            <p>
                <input type="text" onFocus={handleOnFocus} onBlur={handleOnBlur} placeholder="introduce tu nombre"/>
            </p>

        </div>
    );
}

export default EventosComponente;