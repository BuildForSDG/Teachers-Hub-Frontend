import React, { Component } from 'react'
import APIPostService from './APIPostService'

class CompSignupForm extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             username:'',
             password:'',
             confirm_password:'',
             role:'',
             firstname:'',
             lastname:'',
             email:''
            
        }
    }

    changehandler = e => {
        this.setState({[e.target.name]: e.target.value})
    }

    submithandler = async (e) => {
        e.preventDefault()
            
            const user = this.state

            //check data sent to server
            alert(JSON.stringify(user,null,2))
            
            await APIPostService.post('/signup',{user})
            .then(res => {
                console.log(res);
                console.log(res.data);
                localStorage.setItem('User',JSON.stringify(res,null,2))
              })
              .catch(e => {
                  console.log(e)
                  alert(e)
              })
    }

    componentDidMount(){
        //
    }
    
    
    render() {

      const {firstname,
             lastname,
             username,
             email,
             password,
             confirm_password,
             role} = this.state

        return (
            <div>
            <form onSubmit={this.submithandler} className='form-box'>
                <h3 className='h4 text-black mb-4'>Sign Up</h3>
                    <div className='form-group'>
                        <input type='text' className='form-control' name='firstname' placeholder='FirstName' value= {firstname} onChange={this.changehandler}/>
                    </div>
                    <div className='form-group'>
                        <input type='text' className='form-control' name='lastname' placeholder='LastName' value= {lastname} onChange={this.changehandler}/>
                    </div>
                    <div className='form-group'>
                        <input type='email' className='form-control' name='email' placeholder='Email Address' value= {email} onChange={this.changehandler}/>
                    </div>
                    <div className='form-group'>
                        <input type='text' className='form-control' name='username' placeholder='UserName' value= {username} onChange={this.changehandler}/>
                    </div>
                    <div className='form-group'>
                        <input type='password' className='form-control' name='password' placeholder='Password' value= {password} onChange={this.changehandler}/>
                    </div>
                    <div className='form-group mb-4'>
                        <input type='password' className='form-control' name='confirm_password' placeholder='Confirm Password' value= {confirm_password} onChange={this.changehandler}/>
                    </div>
                    <div className='form-group'>
                        <select name="role" placeholder="trainee" value= {role} onChange={this.changehandler}>
                            <option value="tutor">Tutor</option>
                            <option value="trainee">Trainee</option>
                        </select>
                    </div>
                    <div className='form-group'>
                        <input type='submit' className='btn btn-primary btn-pill' value='Sign up' />
                    </div>
                </form>
        </div>
        )
    }
}

export default CompSignupForm
