import { FETCH_LISTS } from "./listTypes";
const listReducer = (state = [], action) => {
  switch (action.type) {
    case FETCH_LISTS:
      return action.data;
    default:
      return state;
  }
};
export default listReducer;
