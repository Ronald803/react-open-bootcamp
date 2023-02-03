import React,{useState} from 'react';
import { Contact } from '../../models/contact.class';
import ContactComponent from '../pure/forms/contact';
import ContactForm from '../pure/forms/contactForm';
import '../../styles/contact_list.css'

const ContactList = () => {
    const defaultContact1 = new Contact('Ronald', 'Blanco', 'ronaldblanco@test.com',true)
    const defaultContact2 = new Contact('Pamela', 'Zambrana', 'pamelazambrana@test.com',false)    
    const [contacts, setContacts] = useState([defaultContact1,defaultContact2]);

    function connectContact(contact){
        const index = contacts.indexOf(contact);
        const tempContacts = [...contacts]
        tempContacts[index].conectado = !tempContacts[index].conectado
        setContacts(tempContacts)
    }

    function deleteContact(task){
        const index = contacts.indexOf(task)
        const tempContacts = [...contacts]
        tempContacts.splice(index,1)
        setContacts(tempContacts)
    }

    function addContact(contact){
        const tempContacts = [...contacts]
        tempContacts.push(contact)
        setContacts(tempContacts)
    }
    return (
        <div class="contact-list">
            <div>
                <div>
                    <h5>Contactos: </h5>        
                </div>
                <div>
                    <table>
                        <thead>
                            <tr>
                                <th>Nombre</th>
                                <th>Apellido</th>
                                <th>Email</th>
                                <th>Conectado</th>
                            </tr>
                        </thead>
                        <tbody>
                            {contacts.map( 
                                (contact,index)=>{
                                    return(
                                        <ContactComponent 
                                            contact={contact}
                                            key={index}
                                            remove={deleteContact}
                                            connect={connectContact}
                                        >
                                        </ContactComponent>    
                                    )
                                }
                             )}
                        </tbody>
                    </table>
                </div>
            </div>
            <ContactForm add={addContact}></ContactForm>
        </div>
    );
}

export default ContactList;
