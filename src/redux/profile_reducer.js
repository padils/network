import { ProfileAPI } from "../api/api";
import { stopSubmit } from 'redux-form';

const ADD_POST = `profile/ADD-POST`;
const NEW_TEXT_POST = `profile/NEW-TEXT-POST`;
const SET_USER_PROFILE = `profile/SET_USER_PROFILE`;
const SET_USER_PROFILE_STATUS = `profile/SET_USER_PROFILE_STATUS`;
const SAVE_PHOTO = `profile/SAVE_PHOTO`;
const DOWNLOAD_DATA = `profile/DOWNLOAD_DATA`;

let initialState =
{
    Post:
        [
            { id: 1, message: 'Hi,how are  you?', like: 1 },
            { id: 2, message: "It's my first post", like: 10 },

        ],

    profile: null,
    status: '',
    downloadData:false


};

const ProfileReducer = (state = initialState, action) => {



    switch (action.type) {


        case ADD_POST:


            return {
                ...state,
                Post: [...state.Post, {
                    id: 5,
                    message: action.values,
                    like: 0

                }],

            }

        case NEW_TEXT_POST:
            return {

                ...state,
                newPostText: action.text

            }
        case SET_USER_PROFILE:

            return {

                ...state,
                profile: action.profile,

            }
        case SET_USER_PROFILE_STATUS:

            return {

                ...state,
                status: action.status,

            }
        case SAVE_PHOTO:

            return {

                ...state,
                profile:{...state.profile,photos:action.photo}
               

            }
        case DOWNLOAD_DATA:

            return {

                ...state,
                downloadData:action.downloadData
               

            }

        default:
            return state
    }


};

export const addPostAction = (values) => ({ type: ADD_POST, values })
export const newPostTextAction = (text) => ({ type: NEW_TEXT_POST, text })
export const SetUserProfile = (profile) => ({ type: SET_USER_PROFILE, profile })
export const SetUserProfileStatus = (status) => ({ type: SET_USER_PROFILE_STATUS, status })
export const SavePhotoSuccess = (photo) => ({ type: SAVE_PHOTO, photo })
export const DownloadData = (downloadData) => ({ type: DOWNLOAD_DATA, downloadData})

export const getProfileUser = (userId) => {

    return async (dispatch) => {

        dispatch(DownloadData(false))
        let data = await ProfileAPI.getProfile(userId)

        dispatch(SetUserProfile(data));
        dispatch(DownloadData(true))

    }
}
export const getProfileUserStatus = (userId) => {

    return async (dispatch) => {

        let data = await ProfileAPI.getProfileStatus(userId)


        dispatch(SetUserProfileStatus(data));

    }
}
export const putProfileUserStatus = (status) => {

    return async (dispatch) => {

        let data = await ProfileAPI.putProfileStatus(status)


        if (data.resultCode === 0) {
            dispatch(SetUserProfileStatus(status))
        }


    }
}
export const putProfileUser = (profile) => {

    return async (dispatch) => {

        let data = await ProfileAPI.putProfile(profile)


        if (data.resultCode === 0) {
            dispatch(SetUserProfile(profile))
        }
        else{
            let message = data.messages.length > 0
            ? data.messages[0] : `some error`;
           

            dispatch(stopSubmit("InfoForm", { _error: message }));
        }


    }
}
export const SavePhoto = (photo) => {

    return async (dispatch) => {

        let data = await ProfileAPI.putPhoto(photo)


        if (data.resultCode === 0) {
            dispatch(SavePhotoSuccess(data.data.photos))
        }


    }
}


export default ProfileReducer