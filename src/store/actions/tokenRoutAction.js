import axios from 'axios'
export const TokenProtected = (userData)=>{
    return (dispatch, getState)=>{
        //async function
        axios.get('/api/user/tasks', {
            headers: {
              'auth_token': userData
            }
          }).then( response=>{
            dispatch({type:'auth-user', payload:response})
        })
        .catch(err=>{
           dispatch({type:'unauth-user', err:err})
          })
    }
} 