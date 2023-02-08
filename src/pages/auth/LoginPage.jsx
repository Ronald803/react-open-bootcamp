import React from 'react';
import LoginFormik from '../../components/pure/forms/loginFormik';
import { useNavigate } from 'react-router-dom';

const LoginPage = () => {
    const navigate = useNavigate();
    return (
        <div>
            <h1>Login Page</h1>
            <LoginFormik></LoginFormik>
        </div>
    );
}

export default LoginPage;
