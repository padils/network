import ProfileReducer from "./profile_reducer";
import DialogReducer from "./dialog_reducer";
import SidebarReducer from "./sidebar_reducer";




let store = {


    _state: {
        ProfilePage:
        {
            Post:
                [
                    { id: 1, message: 'Hi,how are  you?', like: 1 },
                    { id: 2, message: "It's my first post", like: 10 },

                ],
            newPostText: 'padils',

        },

        DialogsPage:
        {
            Messages:

                [
                    { id: 1, message: 'Hi', my: true },
                    { id: 2, message: 'How are you ?', me: false },
                    { id: 3, message: 'good', my: true },
                    { id: 4, message: 'great', my: false },

                ],
            Dialogs:
                [
                    { id: 1, name: 'Andrei', icon: 'https://i1.sndcdn.com/artworks-000504701919-9noeex-t500x500.jpg' },
                    { id: 2, name: 'Alex', icon: "https://archeonews.ru/wp-content/uploads/2018/11/sebek_egipet_1-500x500.jpg" },
                    { id: 3, name: 'Pete', icon: "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQ9x5S6-aqCBhq24ronYAYv21F_oDaj_Iojp16m8yX4BqIQB2R5&usqp=CAU" },
                    { id: 4, name: 'Kuril', icon: "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSAnAQVy-kIyZEyNlyabj5eEos7b4ZZzRaym5knrh2cUMAKwT5N&usqp=CAU" },

                ],
            newMessageText: ''
        },
        Sidebar : {}
    },

    _callSubscriber() {

        console.log(`sate changed`)

    },

    subscribe(observe) {
        this._callSubscriber = observe
    },
    getState() {
        return this._state
    },


    dispatch(action) {

        
        this._state.ProfilePage = ProfileReducer(this._state.ProfilePage,action)
        this._state.DialogsPage = DialogReducer(this._state.DialogsPage,action)
        this._state.Sidebar = SidebarReducer(this._state.Sidebar,action)
        this._callSubscriber(this._state)

    }



}




export default store;