import React, {useState,useEffect} from 'react';
import '../../src/styles/rectangulo.css'

const Rectangulo = () => {
    const [color, setColor] = useState({backgroundColor : 'black'});
    const [mouse,setMouse] = useState(false)
    const generateRandomColor = ()=>{
        const r = Math.floor(Math.random() *256);
        const g = Math.floor(Math.random() *256);
        const b = Math.floor(Math.random() *256);
        const rgbColor = `rgb(${r},${g},${b})`;
        return rgbColor
    }   
    function tick(){
        return setColor({backgroundColor: `${generateRandomColor()}`})
    }
    useEffect(() => {
        console.log('uhmmmmmmm');
        console.log(mouse);
        if(mouse){
            const timerID = setInterval (
                () => tick(),1000
            )
            return() =>{
                clearInterval(timerID)
            }    
        }
    }, [mouse]);
    const mouseOver = ()=>{
        console.log('mouse sobre el rectangulo',generateRandomColor())
        setMouse(true)
    }
    const mouseOut = ()=>{
        console.log('saliendo del rectangulo');
        setMouse(false)        
    }
    const mouseDobleClick = ()=>{
        console.log('mouse doble click sobre rectangulo');
        setMouse(false)
    }

    return (
        <div 
            className='rectangulo' 
            style={color} 
            onMouseOver={mouseOver} 
            onMouseOut={mouseOut} 
            onDoubleClick={mouseDobleClick}>
            
        </div>
    );
}

export default Rectangulo;
