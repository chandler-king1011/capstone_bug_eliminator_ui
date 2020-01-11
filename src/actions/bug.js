import axios from 'axios';

import history from '../history';

import { LOGIN_USER, WRONG_LOGIN_CREDENTIALS, REGISTER_USER, REGISTER_FAILED} from './types';

export function fetchUserBugs(userId) {
    return function(dispatch) {
        axios.get(`https://api-capstone-bug-tracker.herokuapp.com/bugs/user/${userId}`);
 }
}