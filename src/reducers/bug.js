import { 
    FETCH_USER_BUGS, 
    FETCH_ORGANIZATION_BUGS, 
    FETCH_CURRENT_BUG, 
    REMOVE_CURRENT_BUG,
    UPDATE_BUG,
    LOGOUT_USER,
    REPORT_BUG_SUCCESS,
    REPORT_BUG_FAILURE
 } from '../actions/types';

const initialState = {
    userBugs: [],
    organizationBugs: [],
    currentBug: {},
    reportBugMessage: ""
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
        case LOGOUT_USER:
            return {
                ...state,
                userBugs: [],
                organizationBugs: [],
                currentBug: {}
            }
        case UPDATE_BUG:
            return {
                ...state,
                currentBug: action.payload[0]
            }
        case REPORT_BUG_SUCCESS:
            console.log(action.payload);
            return {
                ...state,
                reportBugMessage: action.payload
            }
        case REPORT_BUG_FAILURE:
            console.log(action.payload);
            return {
                ...state,
                reportBugMessage: action.payload
            }
        default: 
            return state
    }
}