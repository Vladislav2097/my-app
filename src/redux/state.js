let state = {
    profilePage: {
        posts: [
            {id: 1, message: 'Hi, how are you?', likesCount: 12},
            {id: 2, message: 'It\'s my first post', likesCount: 11},
            {id: 2, message: 'Blabla', likesCount: 11},
            {id: 2, message: 'Dada', likesCount: 11},
        ],
    },
    dialogPage: {
        message: [
            { id: 1, message: 'Hi' },
            { id: 2, message: 'How is your it-kamasutra' },
            { id: 3, message: 'Yo' },
            { id: 4, message: 'Yo' },
            { id: 5, message: 'Yo' },
        ],
        dialogs: [
            { id: 1, name: 'Dimych' },
            { id: 2, name: 'Andrew' },
            { id: 3, name: 'Sveta' },
            { id: 4, name: 'Sasha' },
            { id: 5, name: 'Viktor' },
            { id: 6, name: 'Valera' },
        ],
    },
    sitebar: [
        { id: 1, name: 'Vlad' },
        { id: 2, name: 'Elena' },
        { id: 3, name: 'Klaudia' },
    ],
}

export default state;