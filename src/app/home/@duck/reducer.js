import { GET_USERS } from "./types";

const initialState = {
    isAuth: false,
    users: []
};

const homeReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_USERS:
            return { ...state, users: action.users }
        default:
            return state
    }
}
export default homeReducer