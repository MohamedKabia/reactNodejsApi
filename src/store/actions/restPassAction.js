import axios from 'axios'
export const resPassAction = (userData)=>{
    return (dispatch, getState)=>{
        //async function
        axios.post('/api/user/password', userData).then( response=>{
            console.log(response);
            dispatch({type:'get-vCode', payload:userData})
        })
        .catch(err=>{
           dispatch({type:'resetpassword-err', err:err})
          })
    }
} 