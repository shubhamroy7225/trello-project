import { FETCH_BOARDS,ADD_NEW_BOARDS} from "./boardTypes";
export const getBoards = (data) => {
  return {
    type: FETCH_BOARDS,
    data,
  };
};
export const addNewBords = (data) => {
  return {
    type: ADD_NEW_BOARDS,
    data,
  };
};
