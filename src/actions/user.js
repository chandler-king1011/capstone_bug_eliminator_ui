import axios from 'axios';

import history from '../history';

import { LOGIN_USER, WRONG_LOGIN_CREDENTIALS } from './types';

export function login(userCredentials) {
    return function(dispatch) {
    axios.post("https://api-capstone-bug-tracker.herokuapp.com/users/login", userCredentials)
        .then(response => {
            if (response.data.status  === 200) {
                dispatch({
                    type: LOGIN_USER,
                    payload: response.data.results
                });
                history.push("/user-dashboard");

            } else if (response.data.status === 400) {
                dispatch({
                    type: WRONG_LOGIN_CREDENTIALS,
                    payload: "Incorrect Email or Password"
                });
        }
    }).catch(error => {
        console.log(error);
        dispatch({
            type: WRONG_LOGIN_CREDENTIALS,
            payload: "Incorrect Email or Password"
        });
    });
 }
}