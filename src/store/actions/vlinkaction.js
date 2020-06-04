import axios from 'axios'
export const vlinlAction = (userData)=>{
    return (dispatch, getState)=>{
        //async function
        axios.post('/api/user/newpassword', userData).then( response=>{
            console.log(response);
            dispatch({type:'reset-password', payload:userData})
        })
        .catch(err=>{
           dispatch({type:'resetpassword-err', err:err})
          })
    }
} 