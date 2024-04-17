/* eslint-disable no-undef */
import { GOOGLE_AUTH_FAIL, GOOGLE_AUTH_SUCCESS, LOGOUT } from "./types";
import axios from "axios";

axios.defaults.withCredentials = true;


export const googleAuthenticate = (state,code) => async dispatch =>{
    if(state && code && !localStorage.getItem('access')){
        const config = {
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
            }
        };
        

        const details = {
            'state':state,
            'code':code,
        } 

        const formBody = Object.keys(details).map(key => encodeURIComponent(key)+'='+encodeURIComponent(details[key])).join('&')

        try{
            const res = await axios.post(`${process.env.REACT_APP_TEST_URL}/auth/o/google-oauth2/?${formBody}`,config)
            console.log(res.data);
            dispatch({
                type:GOOGLE_AUTH_SUCCESS,
                payload:res.data
            })
        }
        catch(err){
            dispatch({
                type:GOOGLE_AUTH_FAIL
            })
            console.log(err)
        }
    }

}

//to logout 
export const logout = () => dispatch => {
    dispatch({
        type: LOGOUT
    })
}