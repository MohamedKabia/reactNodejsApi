import React, { Component } from 'react';
import {vlinlAction} from '../store/actions/vlinkaction'
import {connect} from 'react-redux';

export class verificationcode extends Component {
    state={
        vCode:null,
        password:null,
        rePassword:null
    }
    componentDidUpdate(prevProps, prevState) {
        if(!this.props.email){
          this.props.history.push('/login')
        }
       }
    handlechange = (e) =>{
        e.preventDefault();
        this.setState({
          [e.target.name]:e.target.value
        })
      }

      handleReset= (e) =>{
        e.preventDefault()
        const {email} = this.props.email
        const userData = {
          email:email,
          authCode:this.state.vCode,
          password:this.state.password,
          rePassword:this.state.rePassword
        }
        console.log(userData)
        this.props.resetPassword(userData)
      }
    render() {
        return (
            <div>
               <div className="s-container s-p-20">
            <form className="s-form custom-form" onSubmit={this.handleReset}>
            <div className="s-input-group">
                <div className="s-icon"><span className="mdi mdi-lock-question"></span></div>
                <input type="number" className="s-input" placeholder="CODE" name="vCode" 
                onChange={this.handlechange}/>
            </div>

            <div className="s-input-group">
                <div className="s-icon"><span className="mdi mdi-lock-question"></span></div>
                <input type="password" className="s-input" placeholder="Password" name="password" 
                onChange={this.handlechange}/>
            </div>

            <div className="s-input-group">
                <div className="s-icon"><span className="mdi mdi-lock-question"></span></div>
                <input type="password" className="s-input" placeholder="Repeat Password" name="rePassword" 
                onChange={this.handlechange}/>
            </div>
            <button className="s-btn s-mt-15">Reset</button>
            </form>
        </div> 
            </div>
        )
    }
}

const mapDispatchToProp = (dispatch) => {
    return{
      resetPassword: (userData)=> dispatch(vlinlAction(userData))
      
    }
  }
  
  
  const mapStateToProp = (state)=>{
    return {
      email:state.auth.email
    }
  }

export default connect(mapStateToProp, mapDispatchToProp)(verificationcode)
