import React from 'react';
import { createUser, deleteUserbyId, getAllPagedUser, getAllUser, getUserbyId, login, updateUser } from '../../services/axiosCRUDService';

import { Formik, Field, Form, ErrorMessage } from 'formik'
import * as Yup from 'yup';

const AxiosCRUDExample = () => {
    const authUser = (values) => {
        login(values.email,values.password)
            .then( response => {
                if(response.data.token){
                    alert(JSON.stringify(response.data.token))
                    sessionStorage.setItem('token',response.data.token)
                } else {
                    sessionStorage.removeItem('token')
                    throw new Error('Login failure')
                }
            })
            .catch( error => {
                alert(`Something went wrong: ${error}`)
                sessionStorage.removeItem('token')
            })
            .finally( ()=>{
                console.log('Logind done');
            })
    }
    const loginSchema = Yup.object().shape(
        {
            email: Yup
                        .string()
                        .email('Invalid email format')
                        .required('Email is required'),
            password: Yup  
                        .string()
                        .required('Password is required')
        }
    )
    
    const initialCredentials = {
        email: '',
        password: ''
    }
    //Crud examples
    const obtainAllUsers = ()=>{
        getAllUser()
            .then( response => {
                if(response.data.data && response.status === 200){
                    console.log(JSON.stringify(response.data.data));
                } else {
                    throw new Error(`No users found`)
                }
            })
            .catch( error => {
                alert(`Something went wrong: ${error}`)
            }) 
    }
    const obtainAllPagedUsers = (page)=>{
        getAllPagedUser(page)
            .then( response => {
                if(response.data.data && response.status === 200){
                    console.log(JSON.stringify(response.data.data));
                } else {
                    throw new Error(`No users found in page ${page}`)
                }

            })
            .catch( error => {
                alert(`Something went wrong: ${error}`)
            }) 
    }
    const obtainUserById = (id)=>{
        getUserbyId(id)
            .then(response => {
                if(response.data.data && response.status === 200){
                    alert(JSON.stringify(response.data.data))
                } else {
                    throw new Error('user not found')
                }
            })
            .catch( error=>{
                alert(`something went wrong: ${error}`)
            })
    }
    const createNewUser = (name,job) => {
        createUser(name,job)
            .then( response => {
                console.log(response.status);
                if (response.data && response.status === 201) {
                    alert(JSON.stringify(response.data))   
                } else {
                    throw new Error ('User not created') 
                }
            })
            .catch(error => {
                alert(`Something went wrong: ${error}`)
            })

    }
    const updateUserById = (id,name,job)=>{
        updateUser(id,name,job)
            .then(response => {
                if(response.data && response.status === 200){
                    alert(JSON.stringify(response.data))
                } else {
                    throw new Error('user not found and not updated')
                }
            })
            .catch( error=>{
                alert(`something went wrong: ${error}`)
            })
    }
    const deleteUser = (id)=>{
        deleteUserbyId(id)
            .then(response => {
                console.log(response);
                if( response.status === 204){
                    alert(`User with id: ${id} deleted succesfully`)
                } else {
                    throw new Error('user was not deleted')
                }
            })
            .catch( error=>{
                alert(`something went wrong: ${error}`)
            })
    }
    return (
<div>
            <h4>Login Formik</h4>
            <Formik 
                // *** Initial values that the form will take ***
                initialValues= {initialCredentials}
                // *** Yup validation schema ***
                validationSchema = {loginSchema}
                // *** onSubmit Event ***
                onSubmit={ async (values) => {
                    authUser(values)
                }}
            >
                {/* We obtain props from Formik */}
                
                {({
                    values,
                    touched,
                    errors,
                    isSubmitting,
                    handleChange,
                    handleBlur }) => (
                        <Form>
                            <label htmlFor='email'>Email</label>
                            <Field id="email" type="email" name="email" placeholder="example@email.com"/>
                            {/* Email Errors */}
                            {   
                                errors.email && touched.email &&
                                (
                                    <ErrorMessage name='email' component='div'></ErrorMessage>
                                )
                            }
                            <label htmlFor='password'>Password</label>
                            <Field 
                                id="password"
                                name="password"
                                placeholder="password"
                                type="password"
                            />
                            {/* Password Errors */}
                            {
                                errors.password && touched.password && (
                                        <ErrorMessage name='password' component='div'></ErrorMessage>
                                )
                            }
                            <button type="submit">Login</button>
                            {isSubmitting ? (<p>Login your credentials...</p>): null}
                        </Form>
                    ) 
                }
                
            </Formik>
            {/* Example button to test API responses */}
            <div>
                <button onClick={obtainAllUsers}>
                    Get all users with Axios
                </button>
                <button onClick={()=> obtainAllPagedUsers(1)}>
                    Get all paged users (page 1) with Axios
                </button>
                <button onClick={()=> obtainUserById(1)}>
                    Get user (id 1) with Axios
                </button>
                <button onClick={()=> createNewUser('morpheus','leader')}>
                    Create User
                </button>
                <button onClick={()=> updateUserById(1,'morpheus', 'developer')}>
                    Update User
                </button>
                <button onClick={()=> deleteUser(2)}>
                    Delete User
                </button>
            </div>
        </div>
    );
}

export default AxiosCRUDExample;
