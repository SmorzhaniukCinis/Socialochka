import usersReducer, {initialStateType, UserActions} from "./Users-Reducer";


let state: initialStateType

beforeEach(() => {
    state = {
        usersData: [
            {id: 0, followed: false, name: 'ivan', photos: {small: null, large: null}, status: 's'},
            {id: 1, followed: false, name: 'ivan1', photos: {small: null, large: null}, status: 'v'},
            {id: 2, followed: true, name: 'ivan2', photos: {small: null, large: null}, status: 'g'},
            {id: 3, followed: true, name: 'ivan3', photos: {small: null, large: null}, status: 't'}
        ],
        totalCount: 0,
        pageSize: 5,
        portionCount: 10,
        currentPage: 1,
        isFetching: false,
        followingInProgress: [],
        PortionNumber: 1,
        searchingUserName: ''
    }
})
test('follow success', () => {


    const newState = usersReducer(state, UserActions.follow(1))

    expect(newState.usersData[1].followed).toBeTruthy()
    expect(newState.usersData[2].followed).toBeTruthy()
    expect(newState.usersData[3].followed).toBeTruthy()
})

test('un follow success', () => {


    const newState = usersReducer(state, UserActions.unFollow(3))

    expect(newState.usersData[0].followed).toBeFalsy()
    expect(newState.usersData[2].followed).toBeTruthy()
    expect(newState.usersData[3].followed).toBeFalsy()
})
