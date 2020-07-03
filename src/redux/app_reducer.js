import { AuthMe } from './auth_reducer';

const SET_INITIAL = `app/SET_INITIAL`;



let initialState =
{
    initial: false

}

const AppReducer = (state = initialState, action) => {



    switch (action.type) {



        case SET_INITIAL:

            return {

                ...state,
                initial: true
            }

    default:
            return state
    }


};

export const initializedSuccess = () => ({ type: SET_INITIAL });

export const initialApp = () => async (dispatch) => {

    await dispatch(AuthMe());
    
    dispatch(initializedSuccess());

}


export default AppReducer