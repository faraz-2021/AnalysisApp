import { CITIES_RECIEVED, GET_CITIES } from "../constant/constant";

const initialState = {
  isLoading: false,
  isSuccess: false,
  isError: false,
  data: {},
};

const getCityReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_CITIES: {
      return {
        isLoading: true,
        isSuccess: false,
        isError: false,
      };
    }
    case CITIES_RECIEVED: {
      return {
        isLoading: false,
        isSuccess: true,
        isError: false,
        data: action.user,
      };
    }
    default:
      return state;
  }
};

export default getCityReducer;
