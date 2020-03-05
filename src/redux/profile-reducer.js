const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';

let initialState = {
    posts: [
        { id: 1, message: 'Hi, How are u?', likesCount: 5 },
        { id: 2, message: 'How are you?', likesCount: 8 },
        { id: 3, message: 'What are you doing?', likesCount: 10 },
    ],
    newPostText: 'Shalom, bro!',
}

const profileReducer = (state = initialState, action) => {
    debugger;
    switch (action.type) {
        case ADD_POST:
            let newPost = {
                id: 5,
                message: state.newPostText,
                likesCount: 0
            };

            state.posts.push(newPost)
            state.newPostText = ' ';
            return state;
        case UPDATE_NEW_POST_TEXT:
            state.newPostText = action.newText;
            return state;
        default:
            return state;
    }



}

export const addPostActionCreater = () => ({ type: ADD_POST })


export const updateNewPostTextActionCreater = (text) => (
    {
        type: UPDATE_NEW_POST_TEXT,
        newText: text,

    })

export default profileReducer;