/* eslint-disable react/prop-types */
/* eslint-disable import/prefer-default-export */
import React from "react";

export const SignupForm = (props) => (
        <form className='form-box' onSubmit={props.onSubmit}>
        <h3 className='h4 text-black mb-4'>Sign Up</h3>
        <div className='form-group'>
            <input type='email' name="email" className='form-control' placeholder='Email Address' onChange={props.onChange} required />
        </div>
        <div className='form-group'>
            <input type='text' name="username" className='form-control' placeholder='UserName' onChange={props.onChange} required />
        </div>
        <div className='form-group'>
            <input type='password' name="password" className='form-control' placeholder='Password' onChange={props.onChange} required />
        </div>
        <div className='form-group mb-4'>
            <input type='password' name="confirm_password" className='form-control' placeholder='Confirm Password' onChange={props.onChange} required />
        </div>
        <div className='form-group mb-4'>
        <div className="form-group">
        <label htmlFor="sel1">SignUp as:</label>
          <select className="form-control" name="role" id="role" onChange={props.onChange}>
            <option>Teacher</option>
            <option>Instructor</option>
          </select>
        </div>
        </div>
        <div className='form-group'>
            <input type='submit' className='btn btn-primary btn-pill' value='Sign up' />
        </div>
        <div>
        <span>Already have an account? </span>
          <a href="/login">Login</a>
        </div>
    </form>
);
