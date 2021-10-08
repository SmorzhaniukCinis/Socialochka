import {followUser} from "./Users-Reducer";
import {usersAPI} from "../api/usersAPI";
import {defaultResponse} from "../api/api";


jest.mock('../api/usersAPI')
const usersAPIMock = usersAPI as jest.Mocked<typeof usersAPI>
const result: defaultResponse<{}> = {
    resultCode: 0,
    data: {},
    messages: []
}

usersAPIMock.FollowUser.mockReturnValue(Promise.resolve(result))

test('', async () => {
    const thunk = followUser(3)
    const dispatch = jest.fn()
    await thunk(dispatch)

    expect(dispatch).toBeCalledTimes(3)
})
