import React from 'react';
import {useNavigate} from 'react-router-dom'
import { Formik, Field, Form, ErrorMessage } from 'formik'
import * as Yup from 'yup';

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

const LoginFormik = () => {
    const initialCredentials = {
        email: '',
        password: ''
    }
    const navigate = useNavigate();
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
                    await new Promise( (r)=> setTimeout(r,500) );
                    alert(JSON.stringify(values,null,2));
                    await localStorage.setItem('credentials',values)
                    await sessionStorage.setItem('loggeado', true)
                    const local = window.sessionStorage.getItem('loggeado')
                    console.log({local})
                    navigate('/profile')
                    window.location.reload()
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
        </div>
    );
}

export default LoginFormik;
