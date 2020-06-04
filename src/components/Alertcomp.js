import React, { Component } from 'react';
import  {connect} from 'react-redux'; 

export class Alertcomp extends Component {
    render() {
        const message =this.props.message
        return (
                 <div className="s-alert s-dismissable s-alert-outline-error">
            <div className="s-alert-content">
                <div className="s-icon"><span className="mdi mdi-alert"></span></div> 
        <div className="s-fluid">{ message}</div>
                <div className="s-icon "><span className="mdi mdi-close"></span></div>
            </div>
            </div>
        )
    }
}
const mapStateToProp = (state)=>{
    return {
      message:state.auth.message
    }
  }
export default  connect(mapStateToProp)(Alertcomp)