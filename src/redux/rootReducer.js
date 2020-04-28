import {combineReducers} from "redux";
import boardReducer from "./boards/boardReducer";
const rootReducer = combineReducers({
    board:boardReducer
})
export default rootReducer;