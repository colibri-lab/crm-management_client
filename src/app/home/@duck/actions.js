import { GET_USERS } from "./types"

export const getUsersSuccess = (users) => {
    return {
        type: GET_USERS,
        users
    }
}