import {
  GOOGLE_AUTH_FAIL,
  GOOGLE_AUTH_SUCCESS,
  LOGOUT,
} from "../../src/actions/types";

const initialState = {
    access:localStorage.getItem('access'),
    refresh:localStorage.getItem('refresh'),
    isAuthenticated:false,
}


export default function (state=initialState,action){
    switch (action.type){
        case GOOGLE_AUTH_SUCCESS:
            console.log(action.payload)
            localStorage.setItem('access',action.payload.access)
            return{
                ...state,
                isAuthenticated:true,
                access:action.payload.access,
                refresh:action.payload.refresh
            }
        case GOOGLE_AUTH_FAIL:
        case LOGOUT:
            console.log(action.payload)
            localStorage.removeItem('access')
            localStorage.removeItem('refresh')
            return{
                ...state,
                isAuthenticated:false,
                access:null,
                refresh:null,
            }
        default:
            return state        
    }
}