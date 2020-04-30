import { FETCH_CARDS} from "./cardTypes";
export const getCards = (data) => {
  return {
    type: FETCH_CARDS,
    data,
  };
};

