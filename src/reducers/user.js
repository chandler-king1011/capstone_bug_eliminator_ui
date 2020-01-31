import { 
    LOGIN_USER,
    LOGOUT_USER,
    WRONG_LOGIN_CREDENTIALS,
    REGISTER_USER, 
    REGISTER_FAILED,
    LEAVE_GROUP
} from '../actions/types';

const initialState = {
    user: {},
    userToken: "",
    loginErrorText: "",
    LOGGED_IN: false,
    userSuccessMessage: "",
    userFailureMessage: ""
}

export default function(state=initialState, action) {
    switch(action.type) {
        case LOGIN_USER:
            return {
                ...state,
                user: action.payload.userData,
                userToken: action.payload.authToken,
                LOGGED_IN: true,
                loginErrorText: ""
            }
        case WRONG_LOGIN_CREDENTIALS:
            return {
                ...state,
                loginErrorText: action.payload
            }
        
        case LOGOUT_USER: 
            return {
                ...state,
                user: action.payload,
                userToken: "",
                LOGGED_IN: false
            }

        case REGISTER_USER:
            return {
                ...state,
                userSuccessMessage: action.payload.userSuccessMessage
            }


        case REGISTER_FAILED: 
            return {
                ...state,
                userFailureMessage: action.payload.userFailureMessage
            }
    
        case LEAVE_GROUP: 
            return {
                ...state,
                user: action.payload
            }

        default: 
            return state
    }
}