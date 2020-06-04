import React, { Component } from 'react';
import {connect} from 'react-redux';
import {loginUser} from '../store/actions/loginaction'
import { Link } from 'react-router-dom';
export class Login extends Component {
  state ={
    email: null,
    password: null,
  }
  handlechange = (e) =>{
    e.preventDefault();
    this.setState({
      [e.target.name]:e.target.value
    })
  }
  componentDidUpdate(prevProps, prevState) {
    if(this.props.user){
      this.props.history.push('/dashboard')
    }
   }
  handleLogin = (e) =>{
    e.preventDefault()
    console.log(this.state.token)
    const userData = {
      email:this.state.email,
      password:this.state.password
    }
    this.props.login(userData)
  }
  render() {
    return (
      <div>
        <div className="s-container s-p-20">
          <div className="s-d-flex">
            <Link to="/resetPassword">forget password</Link>
          </div>
          <form className="s-form custom-form" onSubmit={this.handleLogin}>
            <div className="s-input-group">
              <div className="s-icon"><span className="mdi mdi-account"></span></div>
              <input type="text" className="s-input" placeholder="Name" name="email" 
              onChange={this.handlechange}/>
            </div>

            <div className="s-input-group s-mt-15">
              <div className="s-icon"><span className="mdi mdi-lock-question "></span></div>
              <input type="password" className="s-input" placeholder="Password" name="password" required
              onChange={this.handlechange}/>
              <div className="s-icon s-eye"><span className='mdi mdi-eye-outline'></span></div>
            </div>
            <div className="s-mt-15">
              <button className="s-btn s-btn-info">Login</button>
            </div>
          </form>
        </div>
      </div>
    )
  }
}

const mapDispatchToProp = (dispatch) => {
  return{
    login: (userData)=> dispatch(loginUser(userData))
    
  }
}


const mapStateToProp = (state)=>{
  return {
    user:state.auth.user
  }
}
export default connect(mapStateToProp, mapDispatchToProp)(Login)
