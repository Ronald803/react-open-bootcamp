import React from 'react';

const ContactComponent = ({contact,remove,connect}) => {
    function connectDisconnect (){
        if(contact.conectado){
            return (<i onClick={()=>connect(contact)} className='bi-toggle-on' style={{color: 'green'}}></i>)
        } else {
            return (<i onClick={()=>connect(contact)} className='bi-toggle-off'></i>)
        }
    }
    return (
        <tr>
           <td>
                <span>{contact.nombre}</span>
           </td>
           <td>
                <span>{contact.apellido}</span>
           </td> 
           <td>
                <span>{contact.email}</span>
           </td> 
           <td>
                {connectDisconnect()}
                <i className='bi-trash' onClick={()=>remove(contact)}></i> 
           </td>
        </tr>
    );
}

export default ContactComponent;
