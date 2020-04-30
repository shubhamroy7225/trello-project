import { FETCH_BOARDS, ADD_NEW_BOARDS, DELETE_BOARDS} from "./boardTypes";
const boardReducer = (state = [], action) => {
  switch (action.type) {
    case FETCH_BOARDS:
      return action.data;
    case ADD_NEW_BOARDS:
      return state.concat([action.data]);
    case DELETE_BOARDS:
      return state.filter((board) => board.id !== action.id);
    default:
      return state;
  }
};
export default boardReducer;
