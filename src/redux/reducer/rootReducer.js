import { combineReducers } from "redux";
import getWeatherReducer from "./getWeatherReducer";

const rootReducer = combineReducers({
  GetWeather: getWeatherReducer,
});

export default rootReducer;
