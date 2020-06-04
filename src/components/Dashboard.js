import React, { Component } from 'react'
//import Notifications from './Notifecations'
import {connect} from 'react-redux';
import {TokenProtected} from '../store/actions/tokenRoutAction'


export class Dashboard extends Component {
    tokenRequest = ()=>{
        const token = this.props.user
        this.props.getProtectedrout(token)
    }
    render() {
        //console.log('try',this.props.tasks)
        //const {tasks} = this.props
        return (
            
            <div>
                <div className="s-container s-p-16 s-mt-20">
                    <div className="s-row">
                        <div className="s-center-all s-col-sm-12 s-col-lg-8 s-order-lg-1 s-order-sm-2">
                            <button className="s-btn-lg s-btn-info" onClick={this.tokenRequest}>I am Protected</button>
                        </div>
                    </div>
                    
                </div>
            </div>
        )
    }
}
const mapStateToProps =(state)=>{
 return{
     tasks: state.tasks.tasks,
     user:state.auth.user
 } 
} 

const mapDispatchToProp = (dispatch) => {
    return{
      getProtectedrout: (userData)=> dispatch(TokenProtected(userData))
      
    }
  }
  
export default connect(mapStateToProps, mapDispatchToProp)(Dashboard)
