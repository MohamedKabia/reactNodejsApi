import React, { Component } from 'react'
import {connect} from 'react-redux';
export class Authlinks extends Component {

componentDidUpdate(prevProps, prevState) {
    if(!this.props.user){
        this.props.history.push('/')
    }
    }
  render() {
    return (
      <div className="ul">
        <div className="s-container">
        <h1>Loged out</h1>
        </div>
    </div>
    )
  }
}
const mapDispatchToProp = (dispatch) => {
  return{
    logout:  dispatch({type:'logout'})
    
  }
}
const mapStateToProp = (state)=>{
    return {
      user:state.auth.user
    }
  }
export default connect(mapStateToProp, mapDispatchToProp)(Authlinks)


