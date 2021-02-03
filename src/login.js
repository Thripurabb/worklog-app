import React from 'react';
import ReactDOM from 'react-dom';
import {Redirect} from 'react-router-dom';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import './loginform.css';
import Navibar from './navbar';

class Login extends React.Component
{
  constructor(props)
  {
    super(props);
    this.state = {
      email : '',
      password : '',
      errormsg : '',
      success : false
    };
  }
  setValues =(event) => {
    let nam = event.target.name;
    let val = event.target.value;
    this.setState({[nam]: val});
    
  }
  submitHandler =(event) => {
    let err = <b>Incorrect UserName or Password!!!</b>;
    if(this.state.email!="admin")
      {
        this.setState({errormsg : err, success : false});
      }
    if( this.state.password!="admin")
      {
        this.setState({errormsg : err, success : false});
      }
    else 
      this.setState({errormsg : '',success : true});
    //event.preventDefault();
  }
  render()
  {
    if(this.state.success)
      return <Redirect to='/home'  />;
    return(
      <div class="formbody">
        <div className="container" id="logincontainer">
          <div class="login-div">
            <h4>LOGIN <img src="https://www.materialui.co/materialIcons/action/lock_grey_192x192.png"alt="lock" class="lock" /></h4>
          </div>
        <div class="form-div">
          <form name="loginform"  onSubmit={this.submitHandler}>
            <div class="form-group" id="log-user">
              <input type="text" id="input-control" class="form-control" aria-describedby="emailHelp"
                placeholder="Email" name="email" onChange={this.setValues} required />
            </div>
            <div class="form-group">
              <input type="password" id="input-control" class="form-control" placeholder="Password" name="password"
              required onChange={this.setValues}/>
            </div>
            <div class="error_msg">{this.state.errormsg}</div>
            <button type="submit" class="btn btn-primary btn-block" id="button" >Login</button>
          </form>
        </div>
        </div>
      </div>      
    );
  }
}
export default Login;