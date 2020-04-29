import { FETCH_BOARDS, ADD_NEW_BOARDS } from "./boardTypes";
const boardReducer = (state = [], action) => {
  console.log(action.data);
  switch (action.type) {
    case FETCH_BOARDS:
      return action.data;
    case ADD_NEW_BOARDS:
      return state.concat([action.data]);
    default:
      return state;
  }
};
export default boardReducer;
