import { 
    FETCH_USER_BUGS, 
    FETCH_ORGANIZATION_BUGS, 
    FETCH_CURRENT_BUG, 
    REMOVE_CURRENT_BUG,
    UPDATE_BUG,
    LOGOUT_USER,
    REPORT_BUG_SUCCESS,
    REPORT_BUG_FAILURE,
    CLEAR_REPORT_SUCCESS_MESSAGE,
    SEARCH_ALL_BUGS,
    CLEAR_SEARCH_BUGS,
    NO_MATCHING_RESULTS
 } from '../actions/types';

const initialState = {
    userBugs: [],
    organizationBugs: [],
    bugSearchBugs: [],
    currentBug: {},
    reportBugMessage: "",
    reportBugError: "",
    noBugsMessage: ""
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
            return {
                ...state,
                reportBugMessage: action.payload
            }
        case REPORT_BUG_FAILURE:
            return {
                ...state,
                reportBugError: action.payload
            }
        case CLEAR_REPORT_SUCCESS_MESSAGE:
            return {
                ...state,
                reportBugMessage: action.payload
            }

        case SEARCH_ALL_BUGS:
            return {
                ...state,
                noBugsMessage: "",
                bugSearchBugs: action.payload
            }
        case NO_MATCHING_RESULTS: 
            return {
                ...state,
                noBugsMessage: "No Matching Results",
                bugSearchBugs: action.payload
            }
        case CLEAR_SEARCH_BUGS: 
            return {
                ...state,
                noBugsMessage: "",
                bugSearchBugs: action.payload
            }
        default: 
            return state
    }
}