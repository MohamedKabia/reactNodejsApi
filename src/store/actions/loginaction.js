import axios from 'axios'
export const loginUser = (userData)=>{
    return (dispatch, getState)=>{
        //async function
        axios.post('/api/user/login', userData).then( response=>{
            let newUserData  =response.data
            dispatch({type:'login', payload:newUserData})
        })
        .catch(err=>{
           dispatch({type:'login-error', err})
          })
    }
} 