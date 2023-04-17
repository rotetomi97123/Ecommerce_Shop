import { combineReducers } from "redux";
import showSection from "./showSection";
import cart from './cart'

const allReducers = combineReducers({
    showSection: showSection,
    cart: cart
})

export default allReducers;