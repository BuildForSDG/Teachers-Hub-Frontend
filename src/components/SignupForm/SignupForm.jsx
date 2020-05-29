import React from "react";


const SignupForm = () => (
        <form method='post' className='form-box'>
        <h3 className='h4 text-black mb-4'>Sign Up</h3>
        <div className='form-group'>
            <input type='email' className='form-control' placeholder='Email Address' />
        </div>
        <div className='form-group'>
            <input type='text' className='form-control' placeholder='UserName' />
        </div>
        <div className='form-group'>
            <input type='password' className='form-control' placeholder='Password' />
        </div>
        <div className='form-group mb-4'>
            <input type='password' className='form-control' placeholder='Confirm Password' />
        </div>
        <div className='form-group mb-4'>
        <div className="form-group">
        <label htmlFor="sel1">SignUp as:</label>
          <select className="form-control" id="role">
            <option>Teacher</option>
            <option>Institution</option>
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
export default SignupForm;
