import { FETCH_USER_BUGS, FETCH_ORGANIZATION_BUGS } from '../actions/types';

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
        case FETCH_ORGANIZATION_BUGS:
            return {
                ...state,
                organizationBugs: action.payload
            }
        default: 
            return state
    }
}