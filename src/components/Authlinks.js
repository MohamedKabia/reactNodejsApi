import React, { Component } from 'react'
import {Link} from 'react-router-dom';
export class Authlinks extends Component {
  render() {
    return (
      <div className="s-ul">
        <li className="s-list-item"> <Link to='/dashboard' ><span >Dashbord</span> </Link></li>
        <Link to='/logout' ><button className="s-btn s-btn-danger outline s-p-4" 
        onClick={this.ogout}>Logout</button> </Link>
    </div>
    )
  }
}

export default Authlinks


