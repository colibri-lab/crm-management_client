import { getUsersSuccess } from "./actions"
import { home } from "../../../api"

export const getUsers = () => async dispatch => {
    const responce = await home.getUsers()
    dispatch(getUsersSuccess(responce.data))
}