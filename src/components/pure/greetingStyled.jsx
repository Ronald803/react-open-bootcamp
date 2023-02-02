import React,{useState} from 'react';

// definiendo estilos en constantes

const loggedStyle = {
    color: 'white'
}

const unloggedStyle = {
    color: 'tomato',
    fontWeight: 'bold'
}
const greetingUser = (props) => (<p>Hola, {props.name}</p>)
const pleaseLogin = () => (<p>Please Login</p>)

const GreetingStyled = (props) => {
    //Generamos un estado para el componente
    //y asi controlar si el usuario está o no logueado
    const [logged, setLogged] = useState(false);

    
    return (
        <div style={logged ? loggedStyle : unloggedStyle}>
            {logged ? greetingUser(props) : pleaseLogin()}
            <button onClick={()=>{
                console.log('Botón pulsador');
                setLogged(!logged);
            }}>
                { logged ? 'Logout' : 'Login' }
            </button>
        </div>
    );
}

export default GreetingStyled;
