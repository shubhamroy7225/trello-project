import {combineReducers} from "redux";
import boardReducer from "./boards/boardReducer";
import listReducer from "./lists/listReducer"
const rootReducer = combineReducers({
    board:boardReducer,
    list:listReducer
})
export default rootReducer;