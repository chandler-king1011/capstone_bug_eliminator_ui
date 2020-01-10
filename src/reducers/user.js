import { LOGIN_USER, WRONG_LOGIN_CREDENTIALS } from '../actions/types';

const initialState = {
    user: {},
    loginErrorText: "",
    LOGGED_IN: false
}

export default function(state=initialState, action) {
    switch(action.type) {
        case LOGIN_USER:
            return {
                ...state,
                user: action.payload,
                LOGGED_IN: true,
                loginErrorText: ""
            }
        case WRONG_LOGIN_CREDENTIALS:
            return {
                ...state,
                loginErrorText: action.payload
            }

        default: 
            return state
    }
}