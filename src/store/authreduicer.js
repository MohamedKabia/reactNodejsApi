import axios from 'axios';
import Cookies from 'js-cookie';

const token = Cookies.get('auth_biscute');
console.log(token);

const instate={
    user:token,
    message: 'welcome',
}
const authReduicer = (state = instate, action) =>{

  switch(action.type){
    case 'login':
      Cookies.set('auth_biscute', action.payload);
      return state ={
        ...state,
        user:action.payload,
        message:'login  sucessfully',
      }

    case 'login-error':
      return state={
        ...state,
        message:'Unable to login please check your credientials',
        }
    case 'create-user':
      axios.post('/api/user/register', action.payload).then( response=>{
        console.log(response)
       return{
         ...state,
         user:response.data,
         message:'Account created sucessfully'
       }
      })
      .catch(err=>{
        console.log(err)
        return{
          ...state,
          message:'Account not created'
        }
      })
      case 'logout':
        Cookies.remove('auth_biscute');
        return state={
          ...state,
          user:null
        }
      case 'resetpassword-err':
        console.log('invalid email',action.err);
        return state;

      case 'get-vCode':
        console.log('email sent to ', action.payload)
        return state ={
          ...state,
          email:action.payload
        }

      case 'reset-password':
        console.log('email sent to ', action.payload)
        return state ={
          ...state,
          email:null
        }
      case 'auth-user':
        console.log(action.payload)
        return state ={
          ...state,
          message:'Acess granted. welcome back ' + action.payload.data.user.name
        }
      case 'unauth-user':
        return state ={
          ...state,
          message:'Acess denied.' + action.err
        }

    default: return state;
  }
 
}

export default authReduicer