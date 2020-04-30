import { FETCH_LISTS } from "./listTypes";
export const getLists = (data) => {
  return {
    type: FETCH_LISTS,
    data,
  };
};
