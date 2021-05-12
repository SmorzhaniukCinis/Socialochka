// setUserAuthData
let SET_USER_AUTH_DATA = 'SET_USER_AUTH_DATA'

let initialState = {
    id: null,
    login: null,
    email: null
}


const AuthReducer = (state=initialState, action) => {
    switch (action.type) {
        case SET_USER_AUTH_DATA:
            return {...state, id: action.AuthData.id, login: action.AuthData.login, email: action.AuthData.email}
        default: return state
    }
}

export const setUserAuthData = (AuthData) => ({type:'SET_USER_AUTH_DATA', AuthData})

export default AuthReducer