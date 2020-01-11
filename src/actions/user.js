import axios from 'axios';

import history from '../history';

import { LOGIN_USER, WRONG_LOGIN_CREDENTIALS, REGISTER_USER, REGISTER_FAILED} from './types';

export function login(userCredentials) {
    return function(dispatch) {
    axios.post("https://api-capstone-bug-tracker.herokuapp.com/users/login", userCredentials)
        .then(response => {
            if (response.data.status  === 200) {
                dispatch({
                    type: LOGIN_USER,
                    payload: {
                        userData: response.data.results,
                        authToken: response.data.token
                    }
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

export function register(userObject) {
    return function(dispatch) {
    axios.post("https://api-capstone-bug-tracker.herokuapp.com/users/register", userObject)
        .then(response => {
            if (response.data.status  === 200) {
                dispatch({
                    type: REGISTER_USER,
                    payload: {
                        userSuccessMessage: "You are all set! Click below to login."
                    }
                });

            } else if (response.data.status === 400) {
                if (response.data.title === "Duplicate Email") {
                dispatch({
                    type: REGISTER_FAILED,
                    payload: {
                        userFailureMessage: "An account already exists under that email. Please try again."
                    }
                });
            }   else if (response.data.title === "Invalid Input") {
                    dispatch({
                        type: REGISTER_FAILED,
                        payload: {
                            userFailureMessage: "Invalid password. Please try again."
                        }
                    });

            }
        }
    }).catch(error => {
        console.log(error);
        dispatch({
            type: REGISTER_FAILED,
            payload: {
                userFailureMessage: "An error occurred. Please try again."
            }
        });
    });
 }
}