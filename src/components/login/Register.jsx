import React from 'react'
import {FaUser} from 'react-icons/fa'
import {RiLockPasswordFill} from 'react-icons/ri'

const Register = () => {
  return (
    <div className='login-container'>
        <div className='glass-container'>
            <div className="login_heading-container">
                <h1>Register</h1>
            </div>
            <div className="form-container">
                <form className="login-form">
                    <div className="form-input-group">
                        <label htmlFor="email"><FaUser/></label>
                        <input type="email" name="email" id="email" placeholder='Email'/>
                    </div>
                    <div className="form-input-group">
                        <label htmlFor="password"><RiLockPasswordFill/></label>
                        <input type="password" name="password" id="password" placeholder='password'/>
                    </div>
                    <div className="form-input-group">
                        <input type="submit" value="Login" />
                    </div>
                </form>
                <hr className='style-seven' />
            </div>
        </div>
    </div>
  )
}

export default Register