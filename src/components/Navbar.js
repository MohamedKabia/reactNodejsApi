import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import Authlinks from './Authlinks';
import Unauthlinks from './Unauthlinks'
import {connect} from 'react-redux';

export class Navbar extends Component {
    
    render() {
        let {user} = this.props
        let navlink
        console.log(user)
        if (user){ 
           navlink = <Authlinks/>
        }
        else{ 
          navlink = <Unauthlinks/>
        }
        return (
            <div>
                <div className='s-toolbar s-app'>
                    <Link to='/'>
                      <div className='s-ml-5 s-toolbrar-title'>Home</div>
                    </Link>
                    <div className="s-spacer"></div>
                     {navlink}
                </div>
            </div>
        )
    }
}

const mapStoreToProps = (state)=>{
    return{
      user:state.auth.user
    }
  }

export default connect(mapStoreToProps)(Navbar)
