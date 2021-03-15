import { combineReducers } from "redux";
import getWeatherReducer from "./getWeatherReducer";
import getCityReducer from './getCityReducer'

const rootReducer = combineReducers({
  GetWeather: getWeatherReducer,
  GetCity:getCityReducer
});

export default rootReducer;
