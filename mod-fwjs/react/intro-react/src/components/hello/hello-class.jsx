import React, { Component } from "react";

class HelloClass extends Component {
    /* El constructor recibe las propiedades que se le pasan al componente cuando se usa*/
    constructor(props) {
        super();
        /*Datos del estado del componente. Se puede usar como variable interna del componente */
        this.state = {
            nombre: 'Alguien',
            apellido: 'Apellido'
        }
    }
    render() {
        return (
            <>
            <h3>Hello class</h3>
                <div>
                    Hola {this.props.nombre} {this.props.apellido}, ¿Qué tal?
                </div>
                <div>
                    Hola estado: {this.state.nombre}, {this.state.apellido}
                </div>
            </>
        )
    }
}

export default HelloClass;