import profileReducer from "./Priofile-reducer";
import dialogsReducer from "./Dialods-reducer";

let store = {
    _state: {
        profile: {
            posts: [
                {postText: "df673tsdf", id: 1, likeCount: 10},
                {postText: "dgdfgdfgdfsdsdf", id: 2, likeCount: 10},
                {postText: "dgdfg", id: 3, likeCount: 10},
                {postText: "ertete", id: 4, likeCount: 10},
            ],
            newPostText: ''
        },
        dialogs: {
            messageData: [
                {id: 1, messageItem: "1 messageItem"},
                {id: 2, messageItem: "2 messageItem"},
                {id: 3, messageItem: "3 messageItem"},
                {id: 4, messageItem: "4 messageItem"},
                {id: 5, messageItem: "5 messageItem"}
            ],
            DialogsData: [
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
            ],
            currentMessage: ''
        }
    },

    getState() {
        return this._state
    },
    _callSubscriber() {},
    subscribe(observer) {
        this._callSubscriber = observer
    },



    dispatch (action) {
        this._state.profile = profileReducer(this._state.profile, action)
        this._state.dialogs = dialogsReducer(this._state.dialogs, action)
        this._callSubscriber(this._state)
    }


}

window.store = store

export default store