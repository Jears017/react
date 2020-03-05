import profileReducer from "./profile-reducer";
import dialogsReducer from "./dialogs-reducer";



let store = {
    _state: {

        profilePage: {
            posts: [
                { id: 1, message: 'Hi, How are u?', likesCount: 5 },
                { id: 2, message: 'How are you?', likesCount: 8 },
                { id: 3, message: 'What are you doing?', likesCount: 10 },
            ],
            newPostText: 'Shalom, bro!',
        },

        messagesPage: {
            dialogs: [
                { id: 1, name: 'Nariman' },
                { id: 2, name: 'Vlad' },
                { id: 3, name: 'Pasha' },
                { id: 4, name: 'Lera' },
                { id: 5, name: 'Anya' }
            ],

            messages: [
                { id: 1, message: 'Hi' },
                { id: 2, message: 'How are you?' },
                { id: 3, message: 'What are you doing?' },
            ],
            newMessageText: 'What\'s up!'
        }
    },

    _callSub() {
        console.log('state changed')
    },

    getState() {
        return this._state;
    },

    subscribe(observer) {
        this._callSub = observer;
    },

    dispatch(action) {

        this._state.profilePage = profileReducer(this._state.profilePage, action);
        this._state.messagesPage = dialogsReducer(this._state.messagesPage, action);
        this._callSub(this._state);
     
    }

}




export default store;