import React,{useRef} from 'react';
import { Contact } from '../../../models/contact.class';

const ContactForm = ({add}) => {
    const nameRef       = useRef('')
    const lastNameRef   = useRef('')
    const emailRef      = useRef('')
    function addContact(e){
        e.preventDefault();
        const newContact = new Contact(
            nameRef.current.value,
            lastNameRef.current.value,
            emailRef.current.value,
            false
        );
        add(newContact)
    }
    return (
        <form onSubmit={addContact}>
            <div>
                <input
                    type='text'
                    required
                    placeholder='Nombre'
                    ref={nameRef}
                />
                <input
                    type='text'
                    required
                    placeholder='Apellido'
                    ref={lastNameRef}
                />
                <input
                    type='text'
                    required
                    placeholder='Email'
                    ref={emailRef}
                />
            </div>
            <button type='submit'>Agregar nuevo contacto</button>
        </form>
    );
}

export default ContactForm;
