export const USER_ACTION_TYPES={
    SET_CURRENT_USER: 'SET_CURRENT_USER'
}


const INITIAL_STATE={
    currentUser: null
}


export const userReducer=(state = INITIAL_STATE, action)=>{
    const{type, payload}=action;  //destructure the action ---> type and payload(optional)
    

    switch(type){  //switch case. if type (string) is 'SET_CURRENT_USER' then the current user is the payload
        case USER_ACTION_TYPES.SET_CURRENT_USER:
            return{
                ...state,
                currentUser:payload
            }

        case 'increment':
            return{
                value: state.value+1,
            }
        default:
            return state; // if none of the previous cases doesnt match, the return state redux uses only one actiom
    }
}

