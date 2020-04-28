import {FETCH_BOARDS} from "./boardTypes";
export const getBoards = (data)=>{
    return{
        type: FETCH_BOARDS,
        data
    }
}
