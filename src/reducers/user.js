import { 
    LOGIN_USER,
    LOGOUT_USER,
    WRONG_LOGIN_CREDENTIALS,
    REGISTER_USER, 
    REGISTER_FAILED,
    LEAVE_GROUP,
    JOIN_GROUP,
    WRONG_GROUP_CREDENTIALS,
    CLEAR_MODAL_MESSAGES
} from '../actions/types';

const initialState = {
    user: {},
    userToken: "",
    loginErrorText: "",
    LOGGED_IN: false,
    userSuccessMessage: "",
    userFailureMessage: "",
    groupSuccessMessage: "",
    groupFailureMessage: ""
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
                LOGGED_IN: false,
                groupFailureMessage: "",
                groupSuccessMessage: "",
                groupMessage: ""
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
                user: action.payload,
                groupSuccessMessage: "",
                groupFailureMessage: ""
            }

        case JOIN_GROUP: 
            return {
                ...state,
                user: action.payload,
                groupFailureMessage: "",
                groupSuccessMessage: "Success! Click close to return to your dashboard."
            }

        case WRONG_GROUP_CREDENTIALS:
            return {
                ...state,
                groupSuccessMessage: "",
                groupFailureMessage: "Group name or password was wrong. Check with your administrator to ensure you have the correct credentials."
            }
        
        case CLEAR_MODAL_MESSAGES: 
            return {
                ...state,
                groupSuccessMessage: action.payload,
                groupFailureMessage: action.payload
            }

        default: 
            return state
    }
}