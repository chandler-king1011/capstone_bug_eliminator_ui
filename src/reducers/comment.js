import {FETCH_BUG_COMMENTS} from '../actions/types';


const initialState = {
    currentBugComments: []
}

export default function(state=initialState, action) {
    switch(action.type) {
        case FETCH_BUG_COMMENTS:
            let comments =action.payload.sort((a, b) => {
                return new Date(b.comments_created_date) - new Date(a.comments_created_date);
            });
            return {
                ...state,
                currentBugComments: comments
            }
        default:
            return state
    }
}