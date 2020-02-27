const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';

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
        if (action.type === ADD_POST) {
            let newPost = {
                id: 5,
                message: this._state.profilePage.newPostText,
                likesCount: 0
            };

            this._state.profilePage.posts.push(newPost)
            this._state.profilePage.newPostText = ' ';
            this._callSub(this._state);
        } else if (action.type === UPDATE_NEW_POST_TEXT) {
            this._state.profilePage.newPostText = action.newText;
            this._callSub(this._state);
        } else if (action.type === 'ADD-MESSAGE') {
            let newMessage = {
                id: 4,
                message: this._state.messagesPage.newMessageText,
            };

            this._state.messagesPage.messages.push(newMessage)
            this._state.messagesPage.newMessageText = ' ';
            this._callSub(this._state);
        } else if (action.type === 'UPDATE-NEW-MESSAGE-TEXT') {
            this._state.messagesPage.newMessageText = action.newMessage;
            this._callSub(this._state);
        }
    }

}

export const addPostActionCreater = () => ({ type: ADD_POST })


export const updateNewPostTextActionCreater = (text) => (
    {
        type: UPDATE_NEW_POST_TEXT,
        newText: text,

    })


export default store;