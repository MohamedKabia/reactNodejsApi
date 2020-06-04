import React, { Component } from 'react'
import {connect} from 'react-redux';
import {resPassAction} from '../store/actions/restPassAction'

export class Resetpassword extends Component {
    state={
        email:null
    }
    componentDidUpdate(prevProps, prevState) {
        if(this.props.user){
          this.props.history.push('/verifecationcode')
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
        const email = {
          email:this.state.email,
        }
        console.log(email)
        this.props.resetPassword(email)
      }
    render() {
        return (
        <div className="s-container s-p-20">
            <form className="s-form custom-form" onSubmit={this.handleReset}>
            <div className="s-input-group">
                <div className="s-icon"><span className="mdi mdi-email"></span></div>
                <input type="text" className="s-input" placeholder="Name" name="email" 
                onChange={this.handlechange}/>
            </div>
            <button className="s-btn s-mt-15">Reset</button>
            </form>
        </div>
           
        )
    }
}

const mapDispatchToProps=(dispatch)=>{
    return{
        resetPassword: (email)=> dispatch(resPassAction(email))
    }
}


const mapStateToProp = (state)=>{
    return {
      user:state.auth.email
    }
  }
export default connect(mapStateToProp, mapDispatchToProps)(Resetpassword)
