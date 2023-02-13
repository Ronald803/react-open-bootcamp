import React from 'react';

const AsyncExample = () => {
    
    async function generateNumber(){
        return 1;
    }
    async function generatePromiseNumber(){
        return Promise.resolve(2)
    }
    
    function obtainNumber(){
        generateNumber()
            .then( (response)=> alert(`Response: ${response}`) )
            .catch( (error)=> alert (`Somethings went wrong: ${error}`) )
    }
    function obtainPromiseNumber(){
        generatePromiseNumber()
            .then( (response)=> alert(`Response: ${response}`) )
            .catch( (error)=> alert(`Something went wrong: ${error}`) )
    }

    async function saveSessionStorage(key,value){
        window.sessionStorage.setItem(key,value);
        
        return Promise.resolve(window.sessionStorage.getItem(key))
    }
    function showStorage(){
        saveSessionStorage('name', 'Martin')
            .then( (response)=>{
                let value = response;
                alert(`Saved Name: ${value}`)
            } )
            .catch( (error)=>{
                alert(`Something went wrong: ${error}`)
            } )
            .finally( ()=> console.log('SUCCESS: Name saved and retreived'))
    }

    async function obtainMessage(){
        let promise = new Promise((resolve,reject)=>{
            setTimeout( ()=> resolve('Hello World'),2000 )
        });
        let message = await promise;
        await alert(`Message received: ${message}`)
    }

    const returnError = async ()=>{
        await Promise.reject(new Error('Ooooops!'))
    }
    const consumeError = ()=>{
        returnError()
            .then( (response)=> alert(`Everithing is ok: ${response}`) )
            .catch( (error)=> alert(`Something went wrong: ${error}`) )
            .finally( ()=> alert('Finally executed') )
    }

    const urlNotFound = async ()=>{
        try{
            let response = await fetch('https://invalidURL')
            alert(`response: ${JSON.stringify(response)}`)
        } catch(error){
            alert(`Something went wrong with your URL: ${error} (check your console)`)
        }
    }
    const multiplePromise = async()=>{
        let results = await Promise.all(
            [
                fetch('https://reqres.in/api/users'),
                fetch('https://reqres.in/api/users?page=2')
            ]
        ).catch((error)=> alert(`Something went wrong with your URL: ${error} (check your console)`) )
    }
    // faltando 21 minutos para que termine el video del tema 19
    return (
        <div>
            <h1> Async, Promise Examples</h1>
            <button onClick={obtainNumber}>Obtain number</button>
            <button onClick={obtainPromiseNumber}>Obtain Promise Number</button>
            <button onClick={showStorage}>Save name and show</button>
            <button onClick={obtainMessage}>Receive message in 2 seconds</button>
            <button onClick={consumeError} >Obtain error</button>
            <button onClick={urlNotFound}>Request to Unknow URL</button>
            <button onClick={multiplePromise}>Multiple Promises</button>
        </div>
    );
}

export default AsyncExample;
