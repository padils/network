const ADD_MESSAGE = `dialogs/ADD-MESSAGE`;

let initialState =
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
    
}

const DialogReducer = (state = initialState, action) => {



    switch (action.type) {
        case ADD_MESSAGE:

            let newMessage = {
                id: 5,
                message: action.message,
                my: true

            };




            return {
                ...state,
                Messages: [...state.Messages, newMessage],
            
            }

       


        default:
            return state;
    }


}

export const addMessage = (message) => ({ type: ADD_MESSAGE,message })


export default DialogReducer