import {
    WEATHER_REPORT_RECIEVED,
    GET_WEATHER_REPORT
} from "../constant/constant";

const initialState = {
  isLoading: false,
  isSuccess: false,
  isError: false,
};

const getWeatherReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_WEATHER_REPORT: {
      return {
        isLoading: true,
        isSuccess: false,
        isError: false,
      };
    }
    case WEATHER_REPORT_RECIEVED: {
      return {
        isLoading: false,
        isSuccess: true,
        isError: false,
      };
    }
    default:
      return state;
  }
};

export default getWeatherReducer;
