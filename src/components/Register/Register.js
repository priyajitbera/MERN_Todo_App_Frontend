import React, { useContext } from 'react'
import axios from 'axios';

import './Register.css';
import { UserContext } from '../../App';

function Register() {

  /* to set userContext on successfull regitration */
  const { setUserContext } = useContext(UserContext);

  const registerUser = (event) => {
    event.preventDefault();
    const name = event.target.elements.name.value;
    const email = event.target.elements.email.value;
    const password = event.target.elements.password.value;
    if (!name || !email || !password || name.length > 15
      || email.length > 30 || password.length > 30) {
      alert("Plese fill the details correctly!"); return;
    }
    axios('/user', {
      method: "POST",
      data: { name: name, email: email, password: password }
    })
      .then((res) => { setUserContext(res.data) })
      .catch(err => console.log(err));
  }
  return (
    <div className='register'>
      {/* <div className='register-heading'>Dont have an account Register here!</div> */}
      <form className="register-form" onSubmit={registerUser}>
        <label className='register-form-label'>Email</label>
        <input className='register-form-input' type="text" name="email" placeholder='emusk@twitter.com' />
        <label className='register-form-label'>What'd you like to be called?</label>
        <input className='register-form-input' type="text" name="name" placeholder='Musk' />
        <label className='register-form-label'>Password</label>
        <input className='register-form-input' type="password" name="password" placeholder='Something strong...' />
        <button className='register-form-btn' type="submit">Register</button>
      </form>
    </div>
  )
}

export default Register;