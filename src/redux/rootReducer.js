import {combineReducers} from "redux";
import boardReducer from "./boards/boardReducer"
import listReducer from "./lists/listReducer"
import cardReducer from "./cards/cardReducer"
const rootReducer = combineReducers({
    board:boardReducer,
    list:listReducer,
    card:cardReducer
})
export default rootReducer;