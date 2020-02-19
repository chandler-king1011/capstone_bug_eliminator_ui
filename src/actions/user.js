import axios from 'axios';

import history from '../history';

import { 
    LOGIN_USER,
    LOGOUT_USER,
    CLEAR_LOGIN_FAILED,
    WRONG_LOGIN_CREDENTIALS,
    REGISTER_USER, 
    REGISTER_FAILED,
    CLEAR_REGISTER_MESSAGES,
    UPDATE_USER_DATA,
    UPDATE_USER_ERROR,
    PASSWORD_UPDATED,
    PASSWORD_UPDATED_FAILED,
    PASSWORD_RESET_EMAIL_SENT,
    PASSWORD_RESET_EMAIL_FAILED,
    RESET_PASSWORD_FAILED,
    RESET_PASSWORD_SUCCESS,
    CLEAR_RESET_PASSWORD,
    CLEAR_RESET_REQUEST,
    LEAVE_GROUP,
    JOIN_GROUP,
    WRONG_GROUP_CREDENTIALS,
    FAILED_TO_REGISTER_GROUP,
    SUCCESSFULLY_REGISTERED_GROUP,
    CLEAR_MODAL_MESSAGES,
    CLEAR_USER_UPDATE_MODAL,
    CLEAR_REGISTER_GROUP_MODAL,
    SET_GROUP_NAME
} from './types';



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

export function clearLoginFailed() {
    return function(dispatch) {
        dispatch({
            type: CLEAR_LOGIN_FAILED,
            payload: ""
        })
    }
}

export function getGroupName(groupId, token) {
    return function(dispatch) {
    axios({
        method: "get",
        url: `https://api-capstone-bug-tracker.herokuapp.com/organization/${groupId}`,
        headers: {'auth-token': token}
    }).then(response => {
        dispatch({
            type: SET_GROUP_NAME,
            payload: response.data
        })
    }).catch(error => {
        console.log(error);
    })
  }
}


export function logout(){
    return function(dispatch) {
        dispatch({
            type: LOGOUT_USER,
            payload: {}
        })
        history.push("/");
    }
}

export function updateUser(userObject, token, userId) {
    return function(dispatch) {
        axios({
            method: "put",
            url: `https://api-capstone-bug-tracker.herokuapp.com/users/update/${userId}`,
            headers: {'auth-token': token},
            data: userObject
        }).then(response => {
            if(response.data.status === 400) {
                dispatch({
                    type: UPDATE_USER_ERROR,
                    payload: "An error occurred saving your changes. Please try again and make sure all fields are filled out completely."
                })
            } else {
            dispatch({
                type: UPDATE_USER_DATA,
                payload: response.data.message[0]
            })
          }
        }).catch(error => {
            console.log(error);
        })
    }
}

export function clearUpdateUserModal() {
    return function(dispatch) {
        dispatch({
            type: CLEAR_USER_UPDATE_MODAL,
            payload: ""
    })
    }
}

export function updateUserPassword(bodyData, token, userId) {
    return function(dispatch) {
        axios({
            method: "put",
            url: `https://api-capstone-bug-tracker.herokuapp.com/users/update-password/${userId}`,
            headers: {"auth-token": token},
            data: bodyData
        }).then(response => {
            if(response.data.status === 200) {
                dispatch({
                    type: PASSWORD_UPDATED,
                    payload: response.data.message
                })
            } else if(response.data.status === 400) {
                dispatch({
                    type: PASSWORD_UPDATED_FAILED,
                    payload: response.data.message
                })
            }
        }).catch(error => {
            console.log(error);
        })
    }
}


export function passwordResetRequest(email) {
    return function(dispatch) {
        axios.post("https://api-capstone-bug-tracker.herokuapp.com/users/reset-password/request", 
        {"email": email})
        .then(response => {
            if (response.data.status === 200) {
                dispatch({
                    type: PASSWORD_RESET_EMAIL_SENT,
                    payload: response.data.message
                })
            } else {
                dispatch({
                    type: PASSWORD_RESET_EMAIL_FAILED,
                    payload: response.data.message
                })
            }
        }).catch(error => {
            console.log(error);
        })
    }
}

export function clearResetPasswordRequest() {
    return function(dispatch) {
        dispatch({
            type: CLEAR_RESET_REQUEST,
            payload: ""
        })
    }
}

export function resetPassword(newPassword, token) {
    return function(dispatch) {
        axios({
            method: "put",
            url: "https://api-capstone-bug-tracker.herokuapp.com/users/reset-password/update",
            data: {
                "newPassword": newPassword,
                "token": token
            }
        }).then(response => {
            if (response.data.status === 200) {
                dispatch({
                    type: RESET_PASSWORD_SUCCESS,
                    payload: response.data.message
                })
            } else {
                dispatch({
                    type: RESET_PASSWORD_FAILED,
                    payload: response.data.message
                })
            }
        }).catch(error => {
            console.log(error);
        })
    }
}

export function clearResetPassword() {
    return function(dispatch){
        dispatch({
            type: CLEAR_RESET_PASSWORD,
            payload: ""
        })
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

export function clearRegisterMessages() {
    return function(dispatch) {
        dispatch({
            type: CLEAR_REGISTER_MESSAGES,
            payload: ""
        })
    }
}

export function joinGroup(body, token) {
    return function(dispatch) {
        axios({
            method: "post",
            url: "https://api-capstone-bug-tracker.herokuapp.com/organization/login",
            headers: {'auth-token': token},
            data: body
        }).then(response => {
            if (response.data.status === 400) {
                dispatch({
                    type: WRONG_GROUP_CREDENTIALS,
                    payload: response.data
                })
            } else {
                dispatch({
                    type: JOIN_GROUP,
                    payload: response.data.results
                })
            }
        }).catch(error => {
            console.log(error);
        })
    }

}

export function leaveGroup(userId, token) {
    return function(dispatch) {
        axios({
            method: "put",
            url: `https://api-capstone-bug-tracker.herokuapp.com/users/leave-org/${userId}`,
            headers: {'auth-token': token}
        }).then(response => {
            dispatch({
                type: LEAVE_GROUP,
                payload: response.data.results
            });
        }).catch(error => {
            console.log(error);
        })
    }
}

export function registerGroup(groupData, token) {
    return function(dispatch) {
        axios({
            method: "post",
            url:"https://api-capstone-bug-tracker.herokuapp.com/organization/register",
            headers: {'auth-token': token},
            data: groupData
        }).then(response => {
            if (response.data.status === 200) {
                dispatch({
                    type: SUCCESSFULLY_REGISTERED_GROUP,
                    payload: response.data.results
                })
            } else {
                dispatch({
                    type: FAILED_TO_REGISTER_GROUP,
                    payload: response.data.message
                })
            }
        }).catch(error => {
            console.log(error);
        })
    }
}

export function clearRegisterGroupModal() {
    return function(dispatch) {
        dispatch({
            type: CLEAR_REGISTER_GROUP_MODAL,
            payload: ""
        })
    }
}

export function clearModalMessages() {
    return function(dispatch) {
        dispatch({
            type: CLEAR_MODAL_MESSAGES,
            payload: ""
        })
    }
}

