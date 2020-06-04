import React, {Component} from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom'
import './App.css';
import Navbar from './components/Navbar';
import Login from './components/Login';
import Signup from './components/Signup';
import Dashboard from './components/Dashboard';
import Home from './components/Home';
import logout from './components/logout';
import ResetPassword from './components/Resetpassword';
import Verifecationcode from './components/verificationcode'
import Alertcomp from './components/Alertcomp'
class App extends Component{
  render(){
  return (
    <BrowserRouter>
    <div className="App">
      <Navbar/>
      <Alertcomp/>
      
      <Switch>
      <Route exact path='/' component={Home} />
        <Route path='/dashboard' component={Dashboard} />
        <Route path='/login' component={Login} />
        <Route path='/signup' component={Signup} />
        <Route path='/logout' component={logout} />
        <Route path='/resetPassword' component={ResetPassword}/>
        <Route path='/verifecationcode' component={Verifecationcode}/>
      </Switch>
    </div>
    </BrowserRouter>
  );
}}
export default App;
