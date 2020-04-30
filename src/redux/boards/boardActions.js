import { FETCH_BOARDS, ADD_NEW_BOARDS, DELETE_BOARDS} from "./boardTypes";
export const getBoards = (data) => {
  return {
    type: FETCH_BOARDS,
    data,
  };
};
export const addNewBoards = (data) => {
  return {
    type: ADD_NEW_BOARDS,
    data,
  };
};
export const deleteBoards = (id) => {
  return {
    type: DELETE_BOARDS,
    id,
  };
};
