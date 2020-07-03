import { UserAPI } from '../api/api';



const FOLLOWED = `users/FOLLOWED`;
const UNFOLLOWED = `users/UNFOLLOWED`;
const SET_USERS = `users/SET_USERS`;
const SET_TOTALCOUNT = `users/SET_TOTALCOUNT`;
const SET_PAGECOUNT = `users/SET_PAGECOUNT`;
const SHIFT_REQUEST = `users/SHIFT_REQUEST`;
const SHIFT_FOLLOWED_PROGRESS = `users/SHIFT_FOLLOWED_PROGRESS`;

let initialState =
{
    Users: [],
    totalCountPage: 0,
    UsersPageCount: 1,
    AllPage: 10,
    shiftingRequest: true,
    fallowingProgress: [],
    




};

const UsersReducer = (state = initialState, action) => {



    switch (action.type) {

        case FOLLOWED:
            return {
                ...state,
                Users: state.Users.map(u => {
                    if (u.id === action.usersID) {
                        return { ...u, followed: true }
                    }
                    return u

                }

                )
            }
        case UNFOLLOWED:
            return {
                ...state,
                Users: state.Users.map(u => {
                    if (u.id === action.usersID) {
                        return { ...u, followed: false }
                    }
                    return u

                }

                )
            }

        case SET_USERS:
            return {
                ...state,
                Users: [...action.Users]
            }
        case SET_TOTALCOUNT:

            return {
                ...state,
                totalCountPage: action.count
            }
        case SET_PAGECOUNT:

            return {
                ...state,
                UsersPageCount: action.count
            }
        case SHIFT_REQUEST:

            return {
                ...state,
                shiftingRequest: action.bool
            }
        case SHIFT_FOLLOWED_PROGRESS:

            return {
                ...state,
                fallowingProgress: action.shiftingRequest
                    ? [...state.fallowingProgress, action.Uid]
                    : state.fallowingProgress.filter(id => id != action.Uid)

            }


        default:
            return state
    }


};

export const FollowedAssert = (usersID) => ({ type: FOLLOWED, usersID })
export const unFollowedAssert = (usersID) => ({ type: UNFOLLOWED, usersID })
export const SetUsers = (Users) => ({ type: SET_USERS, Users })
export const SetTotalCount = (count) => ({ type: SET_TOTALCOUNT, count })
export const SetPageCount = (count) => ({ type: SET_PAGECOUNT, count })
export const shiftingAjaxRequest = (bool) => ({ type: SHIFT_REQUEST, bool })
export const shiftFollowedProgress = (Uid, shiftingRequest) => ({ type: SHIFT_FOLLOWED_PROGRESS, Uid, shiftingRequest })


export const getUsers = (UsersPageCount, AllPage) => {

    return async (dispatch) => {

        dispatch(shiftingAjaxRequest(true));
        let data = await UserAPI.getUser(UsersPageCount, AllPage)

        
        dispatch(SetUsers(data.items));
        dispatch(SetTotalCount(data.totalCount));
        dispatch(shiftingAjaxRequest(false));

    }
}

const FollowedAll = async (Api, dispatchFollowed, id, dispatch) => {

    dispatch(shiftFollowedProgress(id, true))
    let data = await Api;
    if (data.resultCode === 0) {

        dispatch(dispatchFollowed)

    }
    dispatch(shiftFollowedProgress(id, false))

}

export const unFollowed = (id) => {

    return (dispatch) => {
        FollowedAll(UserAPI.deleteFollowed(id), unFollowedAssert(id), id, dispatch)

    }
}

export const Followed = (id) => {

    return (dispatch) => {
        FollowedAll(UserAPI.postFollowed(id), FollowedAssert(id), id, dispatch)
    }
}

export default UsersReducer