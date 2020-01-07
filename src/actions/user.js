import axios from 'axios';

import { LOGIN_USER } from './types';

export const login = (userCredentials) => dispatch => {
    axios.post("https://api-capstone-bug-tracker.herokuapp.com/users/login", userCredentials)
        .then(response => {
            if (response.data.status  === 200) {
                console.log(response.data.results);
                dispatch({
                    type: LOGIN_USER,
                    payload: response.data.results
                });
            } else {
            console.log(response.data);
        }
    }).catch(error => {
        console.log(error);
    });
}