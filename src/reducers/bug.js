import { 
    FETCH_USER_BUGS, 
    FETCH_ORGANIZATION_BUGS, 
    FETCH_CURRENT_BUG, 
    REMOVE_CURRENT_BUG
 } from '../actions/types';

const initialState = {
    userBugs: [],
    organizationBugs: [],
    currentBug: {}
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
        case FETCH_CURRENT_BUG: 
            return{
                ...state,
                currentBug: action.payload
           }
        case REMOVE_CURRENT_BUG: 
           return{
               ...state,
               currentBug: action.payload
           }
        default: 
            return state
    }
}