import axios from 'axios';

import {FETCH_BUG_COMMENTS, POST_NEW_COMMENT} from "./types";

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

export function postComment(commentData, token) {
    return function(dispatch) {
    axios({
        method: 'post',
        url: 'https://api-capstone-bug-tracker.herokuapp.com/comments',
        headers: {'auth-token': token},
        data: commentData
    }).then(res => {
        if (res.data.status === 200) {
            axios({
                method: 'get',
                url: `https://api-capstone-bug-tracker.herokuapp.com/comments/bug/${commentData.comments_bugs_id}`,
                headers: {'auth-token': token}
            }).then(response => {
                dispatch({
                    type: POST_NEW_COMMENT,
                    payload: response.data
                })
            }).catch(error => console.log(error))
        } else {
            console.log(res);
        }
    }).catch(err => {
        console.log(err);
    })
  }
}