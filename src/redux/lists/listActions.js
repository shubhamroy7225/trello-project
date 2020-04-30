import { FETCH_LISTS, ADD_NEW_LIST, DELETE_LIST } from "./listTypes";
export const getLists = (data) => {
  return {
    type: FETCH_LISTS,
    data,
  };
};
export const addNewList = (data) => {
  return {
    type: ADD_NEW_LIST,
    data,
  };
};
export const deleteLists = (id) => {
  return {
    type: DELETE_LIST,
    id,
  };
};
