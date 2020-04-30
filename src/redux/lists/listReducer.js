import { FETCH_LISTS,ADD_NEW_LIST } from "./listTypes";
const listReducer = (state = [], action) => {
  switch (action.type) {
    case FETCH_LISTS:
      return action.data;
      case ADD_NEW_LIST:
        console.log(action)
      return state.concat([action.data])
    default:
      return state;
  }
};
export default listReducer;
