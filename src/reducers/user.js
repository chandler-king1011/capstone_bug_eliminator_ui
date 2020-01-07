import { LOGIN_USER } from '../actions/types';

const initialState = {
    user: {}
}

export default function(state=initialState, action) {
    switch(action.type) {
        case LOGIN_USER:
            console.log("you got it.");
            return {
                user: action.payload,
                ...state
            }
        default: 
            return state
    }
}