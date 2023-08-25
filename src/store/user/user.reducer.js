import { USER_ACTION_TYPES } from "./user.types"


const INITIAL_STATE={
    currentUser: null,
    isLoading: false,
    error: null
}


export const userReducer=(state = INITIAL_STATE, action)=>{
    const{type, payload}=action;  //destructure the action ---> type and payload(optional)
    

    switch(type){  //switch case: if type (string) is 'SET_CURRENT_USER' then the current user is the payload
        case USER_ACTION_TYPES.SIGN_IN_SUCCESS:
            return{
                ...state,
                currentUser:payload
            }
        case USER_ACTION_TYPES.SIGN_OUT_SUCCESS:
            return {
                ...state, currentUser: null
            }
        case USER_ACTION_TYPES.SIGN_IN_FAILED:
        case USER_ACTION_TYPES.SIGN_UP_FAILED:
        case USER_ACTION_TYPES.SIGN_OUT_FAILED:
            return {
                ...state, error:payload
            }       

        case 'increment':
            return{
                value: state.value+1,
            }
        default:
            return state; // if none of the previous cases doesnt match, the return state redux uses only one actiom
    }
}

