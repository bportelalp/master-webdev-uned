import React, {useState} from "react";

const HelloFunction = (props) => {

    const state = {
        nombre: 'Alguien',
        apellido: 'Apellido'
    }

    /** Conservar estados */
    const [count, setCount] = useState(0);

    return (
        <>
        <h3>Hello Function</h3>
        <div>
            Hola {props.nombre} {props.apellido}, ¿Qué tal?
        </div>
        <div>
            Hola estado: {state.nombre}, {state.apellido}
        </div>
        <p>
            Has clickado {count} veces
        </p>
        <button onClick={() => setCount(count + 1)}>Click aquí</button>
    </>
    )
}

export default HelloFunction