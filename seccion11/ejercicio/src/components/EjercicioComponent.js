import React, {useState} from "react";
import PropTypes from "prop-types"

const EjercicioComponent = ({year}) => {
    const [yearNow, setYearNow] = useState(year);

    const siguiente = (e) => {
        setYearNow(yearNow + 1)

    }

    const anterior = (e) => {
        setYearNow(yearNow - 1)
        
    }

    const cambiarYear = e => {
        const valor = parseInt(e.target.value)
        Number.isInteger(valor)?setYearNow(valor) : setYearNow(year)
        
    }


    return (
        <div>
            <h1>Ejercicio con components y use state</h1>
            <strong className="label label-green">
                {yearNow}
            </strong>
            <p>
                <button onClick={siguiente}>Siguiente</button>
                &nbsp;
                <button onClick={anterior}>Anterior</button>
            </p>
            <p>
                <label htmlFor="">cambia el año: </label>
                <input type="text" placeholder="cambia el año " onChange={ cambiarYear } />
            </p>
        </div>

    )

}

EjercicioComponent.propTypes = {
    year: PropTypes.number.isRequired
}
export default EjercicioComponent;