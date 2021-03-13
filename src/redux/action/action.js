import {
  WEATHER_REPORT_RECIEVED,
  GET_WEATHER_REPORT,
  CITIES_RECIEVED,
  GET_CITIES,
} from "../constant/constant";

export const getWeatherReport = (user) => {
  return {
    type: GET_WEATHER_REPORT,
    user,
  };
};

export const weatherReportRecieved = (user) => {
  return {
    type: WEATHER_REPORT_RECIEVED,
    user,
  };
};

export const getCity = () => {
  return {
    type: GET_CITIES,
  };
};

export const cityRecieved = (user) => {
  return {
    type: CITIES_RECIEVED,
    user,
  };
};
