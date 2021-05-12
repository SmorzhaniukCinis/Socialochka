let initialState = {
    friends: [
        {
            id: 1,
            name: 'dima',
            photo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSR_D9epGme0WV_2RUmuGoLe5SlEGwnE8VvbQ&usqp=CAU'
        },
        {
            id: 2,
            name: 'ivan',
            photo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSR_D9epGme0WV_2RUmuGoLe5SlEGwnE8VvbQ&usqp=CAU'
        },
        {
            id: 3,
            name: 'jura',
            photo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSR_D9epGme0WV_2RUmuGoLe5SlEGwnE8VvbQ&usqp=CAU'
        },
        {
            id: 4,
            name: 'sasha',
            photo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSR_D9epGme0WV_2RUmuGoLe5SlEGwnE8VvbQ&usqp=CAU'
        },
    ]
}

const friendsReducer = (state=initialState, action) => {
    return state
}


export default friendsReducer