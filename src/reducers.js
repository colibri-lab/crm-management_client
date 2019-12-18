import { createStore, combineReducers, applyMiddleware } from "redux";
import sideBar from "./app/home/homeContainer/sidebarContainer/duck/reducer";
import { reducer } from 'redux-form';
import thunk from "redux-thunk";
import loginReducer from "./app/home/authentification/@duck/reducer";
import homeReducer from "./app/home/@duck/reducer";

const reducers = combineReducers({
    sideBar,
    home: homeReducer,
    loginPage: loginReducer,
    form: reducer
})
export const store = createStore(reducers, applyMiddleware(thunk))
window.store = store.getState()