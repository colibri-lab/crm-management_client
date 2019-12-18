import { auth } from "../../../../api"
import { setLoginParamsSuccess, setRegisterParamsSuccess } from "./actions"
import { stopSubmit } from 'redux-form';

export const setLoginParams = (userName, password) => async dispatch => {
    try {
        const responce = await auth.loginization(userName, password)
        debugger
        if (responce.data === "Incorrect Username and/or Password!") {
            console.log('1', 1)
        } else {
            dispatch(setLoginParamsSuccess())
        }
    } catch (error) {
        dispatch(stopSubmit("login", { _error: "Ooooops!" }))
        console.log(error)
    }

}
export const setRegisterParams = (payload) => async dispatch => {
    const responce = await auth.registration(payload)
    if (responce.data === "Incorrect Username and/or Password!") {
        console.error(responce)
    } else {
        dispatch(setRegisterParamsSuccess())
    }
}