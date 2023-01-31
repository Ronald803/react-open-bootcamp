import React from 'react'
import PropTypes from 'prop-types'
import { Contacto } from '../../../models/contacto.class'


const ComponenteB = ({contact})=>{
    return(
        <div>
            <h3>Nombre Contacto: {contact.nombre}</h3>
            <h3>Apellido Contacto: {contact.apellido}</h3>
            <h3>Correo Electrónico: {contact.email}</h3>
            <h3>{contact.conectado? "Contacto en Línea": "Contacto No Disponible"}</h3>
        </div>
    )
}

ComponenteB.propTypes ={
    contact: PropTypes.instanceOf(Contacto)
}

export default ComponenteB