import {followUser, unFollowUser, UserActions} from "./Users-Reducer";
import {usersAPI} from "../api/usersAPI";
import {defaultResponse} from "../api/api";
import {ProfileActions} from "./Priofile-reducer";


jest.mock('../api/usersAPI')
const usersAPIMock = usersAPI as jest.Mocked<typeof usersAPI>
const result: defaultResponse<{}> = {
    resultCode: 0,
    data: {},
    messages: []
}
usersAPIMock.FollowUser.mockReturnValue(Promise.resolve(result))
usersAPIMock.unFollowUser.mockReturnValue(Promise.resolve(result))

test('follow thunk success', async () => {
    const thunk = followUser(3)
    const dispatch = jest.fn()

    await thunk(dispatch)

    expect(dispatch).toBeCalledTimes(4)
    expect(dispatch).toHaveBeenNthCalledWith(1, UserActions.onFollowingProgress(3, true))
    expect(dispatch).toHaveBeenNthCalledWith(2, UserActions.follow(3))
    expect(dispatch).toHaveBeenNthCalledWith(3, ProfileActions.setSubscription(true))
    expect(dispatch).toHaveBeenNthCalledWith(3, UserActions.onFollowingProgress(3, false))
})
test('un follow thunk success', async () => {
    const thunk = unFollowUser(3)
    const dispatch = jest.fn()

    await thunk(dispatch)

    expect(dispatch).toBeCalledTimes(4)
    expect(dispatch).toHaveBeenNthCalledWith(1, UserActions.onFollowingProgress(3, true))
    expect(dispatch).toHaveBeenNthCalledWith(2, UserActions.unFollow(3))
    expect(dispatch).toHaveBeenNthCalledWith(3, ProfileActions.setSubscription(false))
    expect(dispatch).toHaveBeenNthCalledWith(3, UserActions.onFollowingProgress(3, false))
})
