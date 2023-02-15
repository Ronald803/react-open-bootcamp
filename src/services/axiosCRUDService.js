import axios from 'axios';

/*
 * Login Method to ReqRes endpoint
 * @param { string } email
 * @param { string } password
*/
export const login = (email, password) => {
    let body = {
        email: email,
        password: password
    }
    //Returns the response with a Promise
    return axios.post('https://reqres.in/api/login', body)
}
// TODO Obtain all users
export const getAllUser = ()=> {
    return axios.get('https://reqres.in/api/users')
}
// TODO Obtain all paged users 
export const getAllPagedUser = (page)=> {
    return axios.get(`https://reqres.in/api/users?page=${page}`)
}
// TODO Obtain User by ID
export const getUserbyId = (id)=> {
    return axios.get(`https://reqres.in/api/users/${id}`)
}
// TODO Create User
export const createUser = (name,job) =>{
    let body = {
        name: name,
        job: job
    }
    return axios.post('https://reqres.in/api/users',body)
}
// TODO Update User
export const updateUser = (id,name,job) =>{
    let body = {
        name: name,
        job: job
    }
    return axios.put(`https://reqres.in/api/users/${id}`,body)
}
// TODO Delete User
export const deleteUserbyId = (id)=> {
    return axios.delete(`https://reqres.in/api/users/${id}`)
}