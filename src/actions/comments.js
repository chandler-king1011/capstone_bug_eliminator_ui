import axios from 'axios';

import {FETCH_BUG_COMMENTS} from "./types";

export function fetchComments(bugId, token) {
    return function(dispatch) {
        axios({
            method: 'get',
            url: `https://api-capstone-bug-tracker.herokuapp.com/comments/bug/${bugId}`,
            headers: {'auth-token': token}
        }).then(response => {
            dispatch({
                type: FETCH_BUG_COMMENTS,
                payload: response.data
            })
        }).catch(error => {
            console.log(error);
        })
    }
}