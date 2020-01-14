import { FETCH_USER_BUGS } from '../actions/types';

const initialState = {
    userBugs: [],
    organizationBugs: []
}

export default function(state=initialState, action) {
    switch(action.type) {
        case FETCH_USER_BUGS: 
            return {
                ...state,
                userBugs: action.payload
            }
        default: 
            return state
    }
}