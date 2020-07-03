import { createStore, combineReducers, applyMiddleware, compose,  } from "redux";
import ProfileReducer from "./profile_reducer";
import DialogReducer from "./dialog_reducer";
import SidebarReducer from "./sidebar_reducer";
import AuthReducer from "./auth_reducer";
import thunkMiddleware from "redux-thunk";
import { reducer as formReducer } from "redux-form";
import AppReducer from './app_reducer';
import UsersReducer from './users_reducer ';

let reducers = combineReducers({
    ProfilePage : ProfileReducer,
    DialogsPage: DialogReducer,
    Sidebar: SidebarReducer,
    UsersPage: UsersReducer,
    Auth:AuthReducer,
    form:formReducer,
    App:AppReducer
    

});





 const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
 const store = createStore(reducers, composeEnhancers(
    applyMiddleware(thunkMiddleware)
  ));

export default store