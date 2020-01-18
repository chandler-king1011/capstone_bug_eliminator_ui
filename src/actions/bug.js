import axios from 'axios';


import { 
    LOGOUT_USER,
    FETCH_USER_BUGS, 
    FETCH_ORGANIZATION_BUGS, 
    FETCH_CURRENT_BUG, 
    REMOVE_CURRENT_BUG,
    UPDATE_BUG
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
            headers: {'auth-token': token}
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