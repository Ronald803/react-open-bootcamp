import React, { useEffect, useState } from 'react';
export const ClockExercise = () => {
    const nombre = 'Martin';
    const apellidos = 'San José';
    const stateInicial = {
        edad: 0,
        fecha: new Date()
    }
    const [state, setState] = useState(stateInicial);
    function tick(){
        setState(prevState =>{
            let edad = prevState.edad+1
            return{
                fecha: new Date(),
                edad
            }
        })
    }
    useEffect(() => {
        const timerID = setInterval (
            () => tick(),1000
        )
        return() =>{
            clearInterval(timerID)
        }
    }, []);
    return (
            <div>
                <h2>Hora Actual: {state.fecha.toLocaleTimeString()}</h2>
                <h3>{nombre} {apellidos}</h3>
                <h1>Edad: {state.edad}</h1>
            </div>
    )
}

export default ClockExercise;