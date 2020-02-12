import { 
    LOGIN_USER,
    LOGOUT_USER,
    WRONG_LOGIN_CREDENTIALS,
    REGISTER_USER, 
    REGISTER_FAILED,
    UPDATE_USER_DATA,
    UPDATE_USER_ERROR,
    PASSWORD_UPDATED,
    PASSWORD_UPDATED_FAILED,
    LEAVE_GROUP,
    JOIN_GROUP,
    SUCCESSFULLY_REGISTERED_GROUP,
    FAILED_TO_REGISTER_GROUP,
    WRONG_GROUP_CREDENTIALS,
    CLEAR_MODAL_MESSAGES,
    CLEAR_USER_UPDATE_MODAL,
    CLEAR_REGISTER_GROUP_MODAL,
    SET_GROUP_NAME
} from '../actions/types';

const initialState = {
    user: {},
    usersGroup: "",
    userToken: "",
    loginErrorText: "",
    LOGGED_IN: false,
    userSuccessMessage: "",
    userFailureMessage: "",
    groupSuccessMessage: "",
    groupFailureMessage: "",
    updateUserSuccessMessage: "",
    updateUserFailureMessage: "",
    registerGroupFailed: "",
    registerGroupSuccess: ""
}

export default function(state=initialState, action) {
    switch(action.type) {
        case LOGIN_USER:
            return {
                ...state,
                user: action.payload.userData,
                userToken: action.payload.authToken,
                LOGGED_IN: true,
                loginErrorText: ""
            }
        case WRONG_LOGIN_CREDENTIALS:
            return {
                ...state,
                loginErrorText: action.payload
            }
        case SET_GROUP_NAME:
            return {
                ...state,
                usersGroup: action.payload.organizationName
            }
        
        case LOGOUT_USER: 
            return {
                ...state,
                user: action.payload,
                userToken: "",
                LOGGED_IN: false,
                groupFailureMessage: "",
                groupSuccessMessage: "",
                groupMessage: "",
                loginErrorText: "",
                usersGroup: ""
            }

        case REGISTER_USER:
            return {
                ...state,
                userSuccessMessage: action.payload.userSuccessMessage,
                userFailureMessage: ""
            }


        case REGISTER_FAILED: 
            return {
                ...state,
                userFailureMessage: action.payload.userFailureMessage
            }

        case UPDATE_USER_DATA: 
            return {
                ...state,
                user: action.payload,
                updateUserFailureMessage: "",
                updateUserSuccessMessage: "Your information was saved properly.",
            }

        case UPDATE_USER_ERROR:
            return {
                ...state,
                updateUserSuccessMessage: "",
                updateUserFailureMessage: action.payload
            }

        case PASSWORD_UPDATED:
            return {
                ...state,
                updateUserFailureMessage: "",
                updateUserSuccessMessage: action.payload
            }
        
        case PASSWORD_UPDATED_FAILED:
            return{
                ...state,
                updateUserSuccessMessage: "",
                updateUserFailureMessage: action.payload
            }

        case CLEAR_USER_UPDATE_MODAL: 
            return {
                ...state,
                updateUserSuccessMessage: "",
                updateUserFailureMessage: ""
            }
    
        case LEAVE_GROUP: 
            return {
                ...state,
                user: action.payload,
                groupSuccessMessage: "",
                groupFailureMessage: ""
            }

        case JOIN_GROUP: 
            return {
                ...state,
                user: action.payload,
                groupFailureMessage: "",
                groupSuccessMessage: "Success! Click close to return to your dashboard."
            }

        case WRONG_GROUP_CREDENTIALS:
            return {
                ...state,
                groupSuccessMessage: "",
                groupFailureMessage: "Group name or password was wrong. Check with your administrator to ensure you have the correct credentials."
            }
        
        case CLEAR_MODAL_MESSAGES: 
            return {
                ...state,
                groupSuccessMessage: action.payload,
                groupFailureMessage: action.payload
            }

        case SUCCESSFULLY_REGISTERED_GROUP:
            state.user.users_organization_id = action.payload.users_organization_id;
            state.user.users_role = action.payload.users_role;
            return {
                ...state,
                registerGroupFailed: "",
                registerGroupSuccess: "Group was registered successfully!"
            }

        case FAILED_TO_REGISTER_GROUP:
            return {
                ...state,
                registerGroupSuccess: "",
                registerGroupFailed: action.payload
            }
        case CLEAR_REGISTER_GROUP_MODAL:
            return {
                ...state,
                registerGroupSuccess: "",
                registerGroupFailed: ""
            }
        default: 
            return state
    }
}