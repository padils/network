import { meAPI } from './../api/api';
import { stopSubmit } from 'redux-form';

const SET_AUTH_USER_PROFILE = `auth/SET_AUTH_USER_PROFILE`;



let initialState =
{
    id: null,
    email: null,
    login: null,
    isAuth: false,
    RememberMe: false,
    captcha: null,

}

const AuthReducer = (state = initialState, action) => {



    switch (action.type) {

        case SET_AUTH_USER_PROFILE:

            return {

                ...state,
               ...action.valueLog,
               isAuth:action.isAuth
                

            }

        default:
            return state
    }

};

export const SetAuthUserProfile = (data, isAuth) => ({ type: SET_AUTH_USER_PROFILE, 
    valueLog : 
    {
    id:data.id,
    email:data.email,
    Password:data.password,
    login: data.login,
    RememberMe: data.rememberMe,
    captcha: data.url },
     isAuth });

export const AuthMe = () => {

    return async (dispatch) => {
       
        let data = await meAPI.myAuth()
        if (data.resultCode === 0) {

            dispatch(SetAuthUserProfile(data.data, true))
        }

    }

}
export const Log_in = (data) => {

    return async (dispatch) => {
        let response = await meAPI.Login(data.login, data.password,data.captcha, data.rememberMe = true)

        if (response.data.resultCode === 0) {

            dispatch(SetAuthUserProfile(data, true))
            dispatch(AuthMe());
        }
        if (response.data.resultCode === 10) {

            let response = await meAPI.getCaptcha()
            

            dispatch(SetAuthUserProfile({url:response.url}))
        }
        else {

            let message = response.data.messages.length > 0
                ? response.data.messages[0] : `some error`;

            dispatch(stopSubmit("login", { _error: message }));


        }

    }

}

export const Log_out = (data) => {

    return async (dispatch) => {
        let response = await meAPI.Logout()

        if (response.data.resultCode === 0) {
            dispatch(SetAuthUserProfile({}, false))
        }



    }

}


export default AuthReducer