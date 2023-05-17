import React from "react";

const HelloFunction = (props) => {

    const state = {
        nombre: 'Alguien',
        apellido: 'Apellido'
    }

    return (
        <>
        <h3>Hello Function</h3>
        <div>
            Hola {props.nombre} {props.apellido}, ¿Qué tal?
        </div>
        <div>
            Hola estado: {state.nombre}, {state.apellido}
        </div>
    </>
    )
}

export default HelloFunction