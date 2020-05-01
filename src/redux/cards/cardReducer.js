import { FETCH_CARDS,ADD_NEW_CARDS} from "./cardTypes";
const cardReducer = (state = [], action) => {
  switch (action.type) {
    case FETCH_CARDS:
      return action.data;
      case ADD_NEW_CARDS:
        return state.concat([action.data]);
    default:
      return state;
  }
};
export default cardReducer;
