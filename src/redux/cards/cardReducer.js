import { FETCH_CARDS} from "./cardTypes";
const cardReducer = (state = [], action) => {
  switch (action.type) {
    case FETCH_CARDS:
      return action.data;
    default:
      return state;
  }
};
export default cardReducer;
