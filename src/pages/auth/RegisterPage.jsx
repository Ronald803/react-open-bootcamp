import React from 'react';
import RegisterFormik from '../../components/pure/forms/registerFormik';
import { useNavigate } from 'react-router-dom';

const RegisterPage = () => {
    const navigate = useNavigate()
    return (
        <div>
            <h1>Register Page</h1>
            <RegisterFormik></RegisterFormik>
        </div>
    );
}

export default RegisterPage;
