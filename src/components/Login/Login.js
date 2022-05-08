import axios from 'axios';
import React, { useContext } from 'react';
import { UserContext } from '../../App';

import './Login.css';

function Login() {
    const { setUserContext } = useContext(UserContext);
    const loginUser = (event) => {
        event.preventDefault();
        const email = event.target.email.value;
        const password = event.target.password.value;
        if (!email || !password) { alert("Please fill the details correctly!"); return; }
        axios('/auth', {
            method: "POST",
            data: { email: email, password: password }
        })
            .then((res) => {
                console.log(res.data);
                setUserContext(res.data);
            })
            .catch(err => console.log(err));
    }
    return (
        <div className='login'>
            {/* <div className='login-heading'>Already have an account Login here!</div> */}
            <form className="login-form" onSubmit={loginUser}>
                <label className='login-form-label'>Email</label>
                <input className='login-form-input' type="text" name="email" />
                <label className='login-form-label'>Password</label>
                <input className='login-form-input' type="password" name="password" />
                <button className='login-form-btn' type="submit">Login</button>
            </form>
        </div>
    )
}

export default Login;