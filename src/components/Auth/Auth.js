import React, { useState } from 'react';
import Login from '../Login/Login';
import Register from '../Register/Register';

import './Auth.css';

const Auth = () => {
    const [isRegistered, setIsRegistered] = useState(false);
    const [toggle, setToggle] = useState(false);
    const switchToggle = () => setToggle((oldVal) => !oldVal);
    return (
        <div className='auth'>
            <div className='auth-toggle'>
                <div>
                    <span>{toggle ? "Don't have an account?" : "Already have an account?"}</span>
                    <button className='auth-toggle-btn' onClick={switchToggle}>{toggle ? "Register" : "Login"}</button>
                </div>
            </div>
            {!toggle && <Register />}
            {toggle && <Login />}
        </div>
    );
};

export default Auth;