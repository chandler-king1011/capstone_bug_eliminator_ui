import {FETCH_BUG_COMMENTS, POST_NEW_COMMENT} from '../actions/types';


const initialState = {
    currentBugComments: []
}

export default function(state=initialState, action) {
    switch(action.type) {
        case FETCH_BUG_COMMENTS:
            let comments =action.payload.sort((a, b) => {
                return new Date(a.comments_created_date) - new Date(b.comments_created_date);
            });
            return {
                ...state,
                currentBugComments: comments
            }
        
        case POST_NEW_COMMENT:
            let updatedComments =action.payload.sort((a, b) => {
                return new Date(a.comments_created_date) - new Date(b.comments_created_date);
            });
            return {
                ...state,
                currentBugComments: updatedComments
            }
        default:
            return state
    }
}