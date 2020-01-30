import axios from 'axios';


import { 
    LOGOUT_USER,
    FETCH_USER_BUGS, 
    FETCH_ORGANIZATION_BUGS, 
    FETCH_CURRENT_BUG, 
    REMOVE_CURRENT_BUG,
    UPDATE_BUG,
    REPORT_BUG_FAILURE,
    REPORT_BUG_SUCCESS,
    CLEAR_REPORT_SUCCESS_MESSAGE,
    SEARCH_ALL_BUGS,
    CLEAR_SEARCH_BUGS,
    NO_MATCHING_RESULTS
} from './types';

export function fetchUserBugs(userId, token) {
    return function(dispatch) {
        axios({
            method: 'get',
            url: `https://api-capstone-bug-tracker.herokuapp.com/bugs/user/${userId}`,
            headers: {'auth-token': token}
        }).then(response => {
            dispatch({
                type: FETCH_USER_BUGS,
                payload: response.data
            });
        }).catch(error => {
            console.log(error);
        })
    }
}

export function fetchOrganizationBugs(organizationId, token) {
    return function(dispatch) {
        axios({
            method: 'get',
            url: `https://api-capstone-bug-tracker.herokuapp.com/bugs/organization/${organizationId}`,
            headers: {'auth-token': token}
        }).then(response => {
            dispatch({
                type: FETCH_ORGANIZATION_BUGS,
                payload: response.data
            });
        }).catch(error => {
            console.log(error);
        })
    }
}

export function fetchCurrentBug(bugId, token) {
    return function(dispatch) {
        axios({
            method: 'get',
            url: `https://api-capstone-bug-tracker.herokuapp.com/bug/${bugId}`,
            headers: {'auth-token': token, 'Content-Type': 'multipart/form-data'}
        })
        .then(response => {
            dispatch({
                type: FETCH_CURRENT_BUG,
                payload: response.data[0]
            })
        }).catch(error => {
            console.log(error);
        })
    }
}

export function removeCurrentBug() {
    return function(dispatch){
        dispatch({
        type: REMOVE_CURRENT_BUG,
        payload: {}
    });
  }
}

export function clearBugsLogout() {
    return function(dispatch) {
        dispatch({
            type: LOGOUT_USER,
            payload: {}
        })
    }
}

export function updateBug(bug, bugId, token) {
    return function(dispatch) {
        axios({
            method: "put",
            url: `https://api-capstone-bug-tracker.herokuapp.com/bug/${bugId}`,
            headers:{'auth-token': token},
            data: bug
        }).then(res => {
            axios({
                method: 'get',
                url: `https://api-capstone-bug-tracker.herokuapp.com/bug/${bugId}`,
                headers: {'auth-token': token}
            }).then(response => {
            dispatch({
                type: UPDATE_BUG,
                payload: response.data
            })
        }).catch(error => console.log(error))
        }).catch(err => {
            console.log(err);
        })
  }
}


export function reportBug(bug, token){
    return function(dispatch) {
        axios({
            method: "post",
            url: "https://api-capstone-bug-tracker.herokuapp.com/bugs",
            headers: {
                'auth-token': token,
                'Content-Type': 'multipart/form-data'
        },
            data: bug,
        }).then(response => {
            if (response.data.status === 200) {
                dispatch({
                    type: REPORT_BUG_SUCCESS,
                    payload: "The bug was reported successfully!"
                })
            } else {
                dispatch({
                    type: REPORT_BUG_FAILURE,
                    payload: "Reporting this bug failed. Please try again."
                })
            }
        }).catch(error => console.log(error));
    }
}


export function clearReportSuccessMessage() {
    return function(dispatch) {
        dispatch({
            type: CLEAR_REPORT_SUCCESS_MESSAGE,
            payload: "",
        })
    }
}

export function searchAllBugs(query, token, organizationId) {
    return function(dispatch) {
        axios({
            method: "post",
            url: `https://api-capstone-bug-tracker.herokuapp.com/search/organization-bugs/${organizationId}`,
            headers: {'auth-token': token},
            data: {"query": query}
        }).then(results => {
            if (results.data.length > 0) {
            dispatch({
              type: SEARCH_ALL_BUGS,  
              payload: results.data
            })
          } else if (results.data.length === 0) {
              dispatch({
                  type: NO_MATCHING_RESULTS,
                  payload: results.data
              })
          }
        }).catch(error => {
            console.log(error);
        })
    }
}

export function clearSearchBugs() {
    return function(dispatch) {
        dispatch({
            type: CLEAR_SEARCH_BUGS,
            payload: []
        })
    }
}