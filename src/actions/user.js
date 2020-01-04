import axios from 'axios';

import { LOGIN_USER } from './types';

export function login(user) {
    axios.post("https://api-capstone-bug-tracker.herokuapp.com/users/login", user)
        .then(response => {
            console.log(response);

        }).catch(error => {
            console.log(error);
        })

}