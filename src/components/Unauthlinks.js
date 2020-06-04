import React from 'react';
import {Link} from 'react-router-dom'

function Unauthlinks() {
  return (
    <div className="s-ul">
        <li className="s-list-item"> <Link to='/login' ><span >Login</span> </Link></li>
        <li className="s-list-item"> <Link to='/signup' ><span >Signup</span> </Link></li>
    </div>
  );
}

export default Unauthlinks;
