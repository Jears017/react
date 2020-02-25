let state = {

    profilePage: {
        posts: [
            { id: 1, message: 'Hi, How are u?', likesCount: 5 },
            { id: 2, message: 'How are you?', likesCount: 8 },
            { id: 3, message: 'What are you doing?', likesCount: 10 },
        ],
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
        ]
    }
}

export default state;