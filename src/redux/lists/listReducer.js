import { FETCH_LISTS,ADD_NEW_LIST,DELETE_LIST } from "./listTypes";
const listReducer = (state = [], action) => {
  switch (action.type) {
    case FETCH_LISTS:
      return action.data;
      case ADD_NEW_LIST:
      return state.concat([action.data])
      case DELETE_LIST:
      return state.filter((list) => list.id !== action.id);
    default:
      return state;
  }
};
export default listReducer;
