import React from 'react'
import { Contact } from '../../models/contact.class'
import ComponenteB from '../pure/forms/componenteB'

const ComponenteA = (props)=>{
    const nuevoContacto = new Contact("Ronald","Blanco","ronaldblanco@test.com",true)
    return (
        <div>
            <div><h2>Contacto:</h2></div>
            <ComponenteB contact={nuevoContacto}></ComponenteB>
        </div>
    )
}

export default ComponenteA