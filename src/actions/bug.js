import axios from 'axios';

import { FETCH_USER_BUGS } from './types';

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