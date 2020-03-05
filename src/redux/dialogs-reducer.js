const ADD_MESSAGE = 'ADD-MESSAGE';
const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE-NEW-MESSAGE-TEXT';

let initialState = {
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

const dialogsReducer = (state = initialState, action) => {

    switch (action.type) {
        case ADD_MESSAGE:
            let newMessage = {
                id: 4,
                message: state.newMessageText,
            };
            state.messages.push(newMessage)
            state.newMessageText = '';
            return state;
        case UPDATE_NEW_MESSAGE_TEXT:
            state.newMessageText = action.newMessage;
            return state;
        default:
            return state;
    }
}

export const addMessageActionCreater = () => ({ type: ADD_MESSAGE })


export const helpMe = (message) => (
    {
        type: UPDATE_NEW_MESSAGE_TEXT,
        newMessage: message,

    })

export default dialogsReducer;