import React from 'react';
import { useHistory, useLocation } from 'react-router';
import useAuth from '../../hooks/useAuth';
import googleIcon from '../../images/google.png'
import './Login.css'

const Login = () => {
    const { googleLogin } = useAuth();

    const location = useLocation();
    const history = useHistory();
    const redirectURI = location.state?.from || '/';

    const handleGoogleLogin = () => {
        googleLogin()
            .then(result => {
                history.push(redirectURI);
            })
            .catch(error => { })
    };
    return (
        <div className="google-login">
            <button onClick={handleGoogleLogin}>Google Login <img src={googleIcon} /> </button>
        </div>
    );
};

export default Login;