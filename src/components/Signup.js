import React, { Component } from 'react'
import {connect} from 'react-redux'

export class Signup extends Component {
  state ={
    email: '',
    password: '',
    repassword: '',
    name:''
  }
  handleChange =(e)=>{
    e.preventDefault();
    this.setState({
      [e.target.name]:e.target.value
    })
  }
  handleSubmit =(e)=>{
    e.preventDefault();
    if(this.state.password !== this.state.repassword){
      alert('passwords do not match')
    }
    else{
      const userData={
        name:this.state.name,
        email:this.state.email,
        password:this.state.password,
        rePassword:this.state.repassword
      }
      this.props.createUser(userData)
      this.props.history.push('/login')
    }
  }
  render() {
    return (
      <div>
        <div className="s-container s-p-20">
          <form className="s-form custom-form" onSubmit={this.handleSubmit}>

            <div className="s-input-group">
              <div className="s-icon"><span className="mdi mdi-account"></span></div>
              <input type="text" className="s-input" placeholder="Name" name="name"required 
              onChange={this.handleChange}/>
            </div>

            <div className="s-input-group s-mt-15">
              <div className="s-icon"><span className="mdi mdi-email"></span></div>
              <input type="email" className="s-input" placeholder="email" name="email"required 
              onChange={this.handleChange}/>
            </div>

            <div className="s-input-group s-mt-15">
              <div className="s-icon"><span className="mdi mdi-lock-question "></span></div>
              <input type="password" className="s-input" placeholder="Password" name="password" required
              onChange={this.handleChange}/>
              <div className="s-icon s-eye"><span className='mdi mdi-eye-outline'></span></div>
            </div>

            <div className="s-input-group s-mt-15">
              <div className="s-icon"><span className="mdi mdi-lock-question "></span></div>
              <input type="password" className="s-input" placeholder="repeat password" name="repassword" required
              onChange={this.handleChange}/>
              <div className="s-icon s-eye"><span className='mdi mdi-eye-outline'></span></div>
            </div>
            <div className="s-mt-15">
              <button className="s-btn s-btn-info">Signup</button>
            </div>
          </form>
        </div>
      </div>
    )
  }
}

const storeDispatch = (dispatch)=>{
  return{
    setUser: (userData) =>{
      dispatch({type:'Set-uses', payload:userData});
    },

    createUser: (userData) =>{
      dispatch({type:'create-user', payload: userData})
    }
  }
}

export default connect(null, storeDispatch)(Signup)
