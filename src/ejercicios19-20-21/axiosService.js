import APIRequest from './axios.config'

export function getJoke(){
    return APIRequest.get('/jokes/random',{
        validateStatus: function (status){
            return status < 500;
        }
    });
}