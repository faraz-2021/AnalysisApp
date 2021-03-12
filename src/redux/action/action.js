import {
  WEATHER_REPORT_RECIEVED,
  GET_WEATHER_REPORT,
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
  };
};
