import {FETCH_BOARDS, DELETE_BOARDS} from "./boardTypes";
const boardReducer = (state = [],action)=>{
    console.log(action.data)
    switch(action.type){
        case FETCH_BOARDS: return action.data
        
        default: return state
    }
}
export default boardReducer;