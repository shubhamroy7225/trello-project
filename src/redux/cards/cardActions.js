import { FETCH_CARDS,ADD_NEW_CARDS} from "./cardTypes";
export const getCards = (data) => {
  return {
    type: FETCH_CARDS,
    data,
  };
};
export const addNewCards = (data) => {
    return {
      type: ADD_NEW_CARDS,
      data,
    };
  };
